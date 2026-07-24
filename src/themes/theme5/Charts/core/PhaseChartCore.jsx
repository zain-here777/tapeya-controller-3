import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import ChartPageShell from "../components/ChartPageShell.jsx";
import ChartHeader from "../components/ChartHeader.jsx";
import ChartCrestColumn from "../components/ChartCrestColumn.jsx";
import ChartFrame from "../components/ChartFrame.jsx";

const CHART_W = 1100;
const CHART_H = 460;
const BAR_TOP_BASE_DELAY_MS = 150;
const BAR_BOTTOM_DELAY_OFFSET_MS = 60;
const BAR_BUCKET_STAGGER_MS = 120;

function PhaseBar({ value, yMax, plotH, color, delay, badge = null }) {
  const heightPx = (value / Math.max(yMax, 1)) * plotH;

  return (
    <div
      className="t5-chart-phase-bar relative min-w-0 flex-1 origin-bottom motion-safe:animate-chart-bar-grow motion-reduce:animate-none"
      style={{
        height: `calc(${heightPx}px * var(--t5-scale))`,
        maxWidth: `calc(96px * var(--t5-scale))`,
        background: `linear-gradient(180deg, ${color}, color-mix(in srgb, ${color} 65%, #0b1220))`,
        animationDelay: `${delay}ms`,
      }}
    >
      {badge != null ? (
        <span className="t5-chart-wicket-badge">{badge}</span>
      ) : null}
    </div>
  );
}

function PhaseBars({ buckets, yMax, plotH, topColor, bottomColor, topWicketBadge = null }) {
  return (
    <div className="absolute inset-0 flex">
      {buckets.map((bucket, index) => (
        <div
          key={bucket.label}
          className="relative flex min-w-0 flex-1 items-end justify-center gap-[calc(14px*var(--t5-scale))] px-[calc(6px*var(--t5-scale))]"
        >
          <PhaseBar
            value={bucket.top}
            yMax={yMax}
            plotH={plotH}
            color={topColor}
            delay={BAR_TOP_BASE_DELAY_MS + index * BAR_BUCKET_STAGGER_MS}
            badge={
              topWicketBadge?.bucketIndex === index
                ? topWicketBadge.value
                : null
            }
          />
          <PhaseBar
            value={bucket.bottom}
            yMax={yMax}
            plotH={plotH}
            color={bottomColor}
            delay={
              BAR_TOP_BASE_DELAY_MS +
              BAR_BOTTOM_DELAY_OFFSET_MS +
              index * BAR_BUCKET_STAGGER_MS
            }
          />
        </div>
      ))}
    </div>
  );
}

function TeamStrip({ name, score, tone }) {
  return (
    <div
      className={`t5-chart-team-strip ${
        tone === "bowler" ? "t5-chart-team-strip--bowler" : ""
      }`}
    >
      <span className="t5-chart-strip-name uppercase">{name}</span>
      <span className="t5-chart-strip-score ml-auto tabular-nums">{score}</span>
    </div>
  );
}

/** Shared phase bar chart — Manhattan / Run Rate (Theme 5). */
export default function PhaseChartCore({
  match,
  baseConfig,
  config: configOverride = {},
  defaultTitle = "MANHATTAN",
  defaultYLabel = "RUNS PER OVER",
  showWicketBadges = true,
}) {
  if (!match?.chart || !match?.teams) return null;

  mergeConfig(baseConfig, configOverride);

  const title = match.title ?? defaultTitle;
  const tournament = match.tournament ?? "";
  const { teams, chart, summary } = match;
  const xLabels = chart.buckets.map((bucket) => bucket.label);
  const topBadge = showWicketBadges ? chart.topWicketBadge : null;

  return (
    <ChartPageShell>
      <ChartHeader title={title} subtitle={tournament} />
      <ChartCrestColumn top={teams.top} bottom={teams.bottom} />

      <div className="t5-chart-body t5-chart-body--phase t5-chart-body-anim">
        <div
          className="flex h-full min-w-0 w-full flex-col gap-[calc(28px*var(--t5-scale))]"
          style={{ maxWidth: `calc(${CHART_W}px * var(--t5-scale))` }}
        >
          <div className="flex min-h-0 min-w-0 flex-1 items-start">
            <ChartFrame
              width={CHART_W}
              height={CHART_H}
              fluid
              yMax={chart.yMax}
              yTicks={chart.yTicks}
              xLabels={xLabels}
              yLabel={chart.yLabel ?? defaultYLabel}
              xLabel={chart.xLabel ?? "OVERS"}
            >
              {({ plotH }) => (
                <PhaseBars
                  buckets={chart.buckets}
                  yMax={chart.yMax}
                  plotH={plotH}
                  topColor={teams.top.accent}
                  bottomColor={teams.bottom.accent}
                  topWicketBadge={topBadge}
                />
              )}
            </ChartFrame>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-[calc(12px*var(--t5-scale))]">
            <TeamStrip
              name={summary?.top?.name ?? teams.top.name}
              score={summary?.top?.score}
              tone="batsman"
            />
            <TeamStrip
              name={summary?.bottom?.name ?? teams.bottom.name}
              score={summary?.bottom?.score}
              tone="bowler"
            />
          </div>
        </div>
      </div>
    </ChartPageShell>
  );
}
