import React from "react";
import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";
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
      className="relative min-w-0 flex-1 origin-bottom rounded-t-[calc(8px*var(--cs))] motion-safe:animate-chart-bar-grow motion-reduce:animate-none"
      style={{
        height: `calc(${heightPx}px * var(--cs))`,
        maxWidth: `calc(96px * var(--cs))`,
        background: `linear-gradient(180deg, ${color}, color-mix(in srgb, ${color} 70%, black))`,
        animationDelay: `${delay}ms`,
      }}
    >
      {badge != null ? (
        <span className="absolute -top-[calc(18px*var(--cs))] left-1/2 grid h-[calc(40px*var(--cs))] w-[calc(40px*var(--cs))] -translate-x-1/2 place-items-center rounded-full bg-white text-[calc(22px*var(--cs))] font-black text-black shadow-md">
          {badge}
        </span>
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
          className="relative flex min-w-0 flex-1 items-end justify-center gap-[calc(14px*var(--cs))] px-[calc(6px*var(--cs))]"
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
  const bg = tone === "bowler" ? "bg-bowler-panel" : "bg-panel-player";

  return (
    <div
      className={`flex h-[calc(78px*var(--cs))] w-full shrink-0 items-center rounded-[calc(12px*var(--cs))] border border-white/15 px-[calc(32px*var(--cs))] ${bg}`}
    >
      <span className="ctrl-t-chart-strip-name uppercase text-white">{name}</span>
      <span className="ctrl-t-chart-strip-score ml-auto tabular-nums text-white">
        {score}
      </span>
    </div>
  );
}

/**
 * Shared phase bar chart (Manhattan / Run Rate).
 */
export default function PhaseChartCore({
  match,
  baseConfig,
  config: configOverride = {},
  defaultTitle = "MANHATTAN",
  defaultYLabel = "RUNS PER OVER",
  showWicketBadges = true,
}) {
  if (!match?.chart || !match?.teams) return null;

  mergeControllerConfig(baseConfig, configOverride);

  const title = match.title ?? defaultTitle;
  const tournament = match.tournament ?? "";
  const { teams, chart, summary } = match;
  const xLabels = chart.buckets.map((bucket) => bucket.label);
  const topBadge = showWicketBadges ? chart.topWicketBadge : null;

  return (
    <ChartPageShell>
      <ChartHeader title={title} subtitle={tournament} />
      <ChartCrestColumn top={teams.top} bottom={teams.bottom} />

      <div className="absolute bottom-[calc(44px*var(--cs))] left-[calc(70px*var(--cs))] right-[calc(380px*var(--cs))] top-[calc(210px*var(--cs))] flex min-w-0 justify-start">
        <div
          className="flex h-full min-w-0 w-full flex-col gap-[calc(28px*var(--cs))]"
          style={{ maxWidth: `calc(${CHART_W}px * var(--cs))` }}
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

          <div className="flex w-full shrink-0 flex-col gap-[calc(12px*var(--cs))]">
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
