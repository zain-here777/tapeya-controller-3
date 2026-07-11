import React, { useLayoutEffect, useRef, useState } from "react";
import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";
import ChartPageShell from "../components/ChartPageShell.jsx";
import ChartHeader from "../components/ChartHeader.jsx";
import ChartCrestColumn from "../components/ChartCrestColumn.jsx";
import ChartFrame, { CHART_PAD } from "../components/ChartFrame.jsx";

const CHART_W = 1180;
const CHART_H = 480;

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
    <div className="flex h-[calc(64px*var(--cs))] flex-1 items-center justify-between rounded-[calc(10px*var(--cs))] border border-white/15 bg-panel-player px-[calc(22px*var(--cs))]">
      <span className="ctrl-t-chart-mini-label uppercase text-white">{label}</span>
      <span className="ctrl-t-chart-mini-value tabular-nums text-white">{value}</span>
    </div>
  );
}

function WormMeta({ name, meta, tone }) {
  const oversBg = tone === "bowler" ? "bg-bowler-panel" : "bg-black/35";

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-[calc(12px*var(--cs))]">
      <div className="flex h-[calc(64px*var(--cs))] items-center overflow-hidden rounded-[calc(12px*var(--cs))] border border-white/15 bg-panel-player">
        <span className="ctrl-t-chart-meta-name min-w-0 flex-1 truncate px-[calc(22px*var(--cs))] uppercase text-white">
          {name}
        </span>
        <span className="ctrl-t-chart-meta-total shrink-0 px-[calc(18px*var(--cs))] tabular-nums text-white">
          {meta.total}
        </span>
        <span
          className={`flex h-full shrink-0 flex-col justify-center px-[calc(22px*var(--cs))] ${oversBg}`}
        >
          <span className="ctrl-t-chart-mini-label uppercase text-white/70">OVERS</span>
          <span className="ctrl-t-chart-meta-overs tabular-nums text-white">
            {meta.overs}
          </span>
        </span>
      </div>
      <div className="flex gap-[calc(12px*var(--cs))]">
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
          stroke="#0a0812"
          strokeWidth="3"
        />
      ))}
    </svg>
  );
}

/**
 * Worm / score comparison chart core.
 */
export default function WormChartCore({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match?.chart || !match?.teams) return null;

  mergeControllerConfig(baseConfig, configOverride);

  const title = match.title ?? "SCORE COMPARISON";
  const tournament = match.tournament ?? "";
  const { teams, chart, meta } = match;
  const plotW = CHART_W - CHART_PAD.L - CHART_PAD.R;
  const plotH = CHART_H - CHART_PAD.T - CHART_PAD.B;
  const markerLeft =
    chart.markerOver != null
      ? CHART_PAD.L + (chart.markerOver / chart.xMax) * plotW - 8
      : null;

  return (
    <ChartPageShell>
      <ChartHeader title={title} subtitle={tournament} />
      <ChartCrestColumn top={teams.top} bottom={teams.bottom} />

      <div className="absolute bottom-[calc(48px*var(--cs))] left-[calc(70px*var(--cs))] right-[calc(360px*var(--cs))] top-[calc(210px*var(--cs))] flex flex-col gap-[calc(36px*var(--cs))]">
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
                className="ctrl-t-chart-xlabel absolute text-white"
                style={{
                  left: `calc(${markerLeft}px * var(--cs))`,
                  top: `calc((${CHART_PAD.T + plotH + 14}px) * var(--cs))`,
                }}
              >
                {chart.markerOver}
              </span>
            ) : null}
          </div>
        </div>

        <div className="flex shrink-0 gap-[calc(48px*var(--cs))]">
          <WormMeta name={teams.bottom.name} meta={meta.bottom} tone="bowler" />
          <WormMeta name={teams.top.name} meta={meta.top} tone="batsman" />
        </div>
      </div>
    </ChartPageShell>
  );
}
