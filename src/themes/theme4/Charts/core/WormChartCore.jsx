import React, { useLayoutEffect, useRef, useState } from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import ChartPageShell from "../components/ChartPageShell.jsx";
import ChartHeader from "../components/ChartHeader.jsx";
import ChartCrestColumn from "../components/ChartCrestColumn.jsx";
import ChartFrame, { CHART_PAD } from "../components/ChartFrame.jsx";

const CHART_W = 1180;
const CHART_H = 480;
const MARKER_STROKE = "#0b1220";

function toPlotPoints(values, { xMax, yMax, plotW, plotH }) {
  return values.map((value, index) => {
    const x = ((index + 1) / xMax) * plotW;
    const y = plotH - (value / Math.max(yMax, 1)) * plotH;
    return [x, y];
  });
}

function toPathD(points) {
  return points
    .map((point, index) => `${index ? "L" : "M"}${point[0].toFixed(1)} ${point[1].toFixed(1)}`)
    .join(" ");
}

function MiniStat({ label, value }) {
  return (
    <div className="t4-chart-mini-stat flex-1">
      <span className="t4-chart-mini-label uppercase">{label}</span>
      <span className="t4-chart-mini-value tabular-nums">{value}</span>
    </div>
  );
}

function WormMeta({ name, meta, tone }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-[calc(12px*var(--t4-scale))]">
      <div className="t4-chart-meta-row">
        <span className="t4-chart-meta-name min-w-0 flex-1 truncate uppercase">{name}</span>
        <span className="t4-chart-meta-total shrink-0 tabular-nums">{meta.total}</span>
        <span
          className={`t4-chart-meta-overs shrink-0 ${
            tone === "bowler" ? "t4-chart-meta-overs--bowler" : ""
          }`}
        >
          <span className="t4-chart-mini-label block uppercase">OVERS</span>
          <span className="t4-chart-meta-overs-value tabular-nums">{meta.overs}</span>
        </span>
      </div>
      <div className="flex gap-[calc(12px*var(--t4-scale))]">
        <MiniStat label="FOURS" value={meta.fours} />
        <MiniStat label="SIXES" value={meta.sixes} />
      </div>
    </div>
  );
}

function WormLines({
  topSeries,
  bottomSeries,
  topColor,
  bottomColor,
  xMax,
  yMax,
  plotW,
  plotH,
  markerPointIndices = [],
}) {
  const scale = { xMax, yMax, plotW, plotH };
  const topPoints = toPlotPoints(topSeries, scale);
  const bottomPoints = toPlotPoints(bottomSeries, scale);
  const topPathRef = useRef(null);
  const bottomPathRef = useRef(null);
  const [lengths, setLengths] = useState({ top: 0, bottom: 0 });

  useLayoutEffect(() => {
    setLengths({
      top: topPathRef.current?.getTotalLength() ?? 0,
      bottom: bottomPathRef.current?.getTotalLength() ?? 0,
    });
  }, [plotW, plotH, topSeries, bottomSeries, xMax, yMax]);

  const markerPoints = markerPointIndices
    .map((index) => bottomPoints[index])
    .filter(Boolean);

  const strokeW = Math.max(2, 6);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${plotW} ${plotH}`}
      className="absolute inset-0 overflow-visible"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        ref={topPathRef}
        d={toPathD(topPoints)}
        fill="none"
        stroke={topColor}
        strokeWidth={strokeW}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="motion-safe:animate-chart-worm motion-reduce:animate-none"
        style={{
          strokeDasharray: lengths.top || undefined,
          strokeDashoffset: lengths.top || undefined,
          animationDelay: "180ms",
        }}
      />
      <path
        ref={bottomPathRef}
        d={toPathD(bottomPoints)}
        fill="none"
        stroke={bottomColor}
        strokeWidth={strokeW}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="motion-safe:animate-chart-worm motion-reduce:animate-none"
        style={{
          strokeDasharray: lengths.bottom || undefined,
          strokeDashoffset: lengths.bottom || undefined,
          animationDelay: "320ms",
        }}
      />
      {markerPoints.map((point, index) => (
        <circle
          key={index}
          cx={point[0]}
          cy={point[1]}
          r="10"
          fill={bottomColor}
          stroke={MARKER_STROKE}
          strokeWidth="3"
        />
      ))}
    </svg>
  );
}

/** Worm / score comparison chart core (Theme 4). */
export default function WormChartCore({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match?.chart || !match?.teams) return null;

  mergeConfig(baseConfig, configOverride);

  const title = match.title ?? "SCORE COMPARISON";
  const tournament = match.tournament ?? "";
  const { teams, chart, meta } = match;
  const plotH = CHART_H - CHART_PAD.T - CHART_PAD.B;
  const plotW = CHART_W - CHART_PAD.L - CHART_PAD.R;
  const markerLeft =
    chart.markerOver != null
      ? CHART_PAD.L + (chart.markerOver / chart.xMax) * plotW - 8
      : null;

  return (
    <ChartPageShell>
      <ChartHeader title={title} subtitle={tournament} />
      <ChartCrestColumn top={teams.top} bottom={teams.bottom} />

      <div className="t4-chart-body t4-chart-body-anim">
        <div className="flex min-h-0 flex-1 items-start">
          <div className="relative shrink-0">
            <ChartFrame
              width={CHART_W}
              height={CHART_H}
              yMax={chart.yMax}
              yTicks={chart.yTicks}
              yLabel="RUNS"
              xLabel="OVERS"
            >
              {({ plotW: innerW, plotH: innerH }) => (
                <WormLines
                  topSeries={chart.topSeries}
                  bottomSeries={chart.bottomSeries}
                  topColor={teams.top.accent}
                  bottomColor={teams.bottom.accent}
                  xMax={chart.xMax}
                  yMax={chart.yMax}
                  plotW={innerW}
                  plotH={innerH}
                  markerPointIndices={chart.markerPointIndices}
                />
              )}
            </ChartFrame>

            {markerLeft != null ? (
              <span
                className="t4-chart-xlabel absolute"
                style={{
                  left: `calc(${markerLeft}px * var(--t4-scale))`,
                  top: `calc((${CHART_PAD.T + plotH + 14}px) * var(--t4-scale))`,
                }}
              >
                {chart.markerOver}
              </span>
            ) : null}
          </div>
        </div>

        <div className="flex shrink-0 gap-[calc(48px*var(--t4-scale))]">
          <WormMeta name={teams.bottom.name} meta={meta.bottom} tone="bowler" />
          <WormMeta name={teams.top.name} meta={meta.top} tone="batsman" />
        </div>
      </div>
    </ChartPageShell>
  );
}
