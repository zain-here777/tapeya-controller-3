import React from "react";

function PanelDivider() {
  return (
    <div
      className="h-[calc(68px*var(--t4-scale))] w-px shrink-0 self-center bg-white/25"
      aria-hidden="true"
    />
  );
}

function BatterRow({ batter }) {
  if (!batter) return null;

  const { name, runs = 0, balls = 0, onStrike } = batter;
  const textSize = onStrike
    ? "text-[calc(28px*var(--t4-scale))]"
    : "text-[calc(22px*var(--t4-scale))]";
  const ballsSize = onStrike
    ? "text-[calc(22px*var(--t4-scale))]"
    : "text-[calc(20px*var(--t4-scale))]";

  return (
    <div className="flex min-w-0 items-center gap-[calc(8px*var(--t4-scale))] leading-none">
      <span
        className={`inline-flex w-[calc(16px*var(--t4-scale))] shrink-0 items-center justify-center self-center${
          onStrike ? "" : " invisible"
        }`}
        aria-hidden="true"
      >
        {onStrike ? (
          <span className="block h-[calc(9px*var(--t4-scale))] w-[calc(9px*var(--t4-scale))] animate-strike-blink rounded-full bg-white shadow-[0_0_calc(6px*var(--t4-scale))_rgba(255,255,255,0.55)]" />
        ) : null}
      </span>

      <div className="flex min-w-0 items-center gap-[calc(24px*var(--t4-scale))]">
        <span className={`min-w-0 truncate font-medium ${textSize}`}>{name}</span>
        <span
          key={runs}
          className={`shrink-0 animate-score-pop font-medium tabular-nums ${textSize}`}
        >
          {runs}
        </span>
      </div>

      <span
        key={balls}
        className={`shrink-0 animate-score-pop font-medium tabular-nums ${ballsSize}`}
      >
        ({balls})
      </span>
    </div>
  );
}

function OversRunRateAside({ overs, oversLimit, runRateStat, runRateStats }) {
  const rates =
    Array.isArray(runRateStats) && runRateStats.length > 0
      ? runRateStats
      : runRateStat
        ? [runRateStat]
        : [];

  return (
    <div className="flex shrink-0 flex-col items-center justify-center gap-[calc(6px*var(--t4-scale))] leading-snug">
      {(overs || oversLimit != null) && (
        <span
          key={`${overs}-${oversLimit}`}
          className="animate-score-pop whitespace-nowrap text-center text-[calc(28px*var(--t4-scale))] font-medium tabular-nums"
        >
          {overs ?? "0"}
          {oversLimit != null && oversLimit !== "" ? ` / ${oversLimit}` : null}
        </span>
      )}

      {rates.length > 0 ? (
        <div className="flex flex-col items-center justify-center gap-[calc(4px*var(--t4-scale))]">
          {rates.map((stat) => (
            <span
              key={`${stat.label}-${stat.value}`}
              className="animate-soft-in whitespace-nowrap text-center text-[calc(22px*var(--t4-scale))] font-medium"
            >
              {stat.label}{" "}
              <span className="font-medium tabular-nums">{stat.value}</span>
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function NeedTargetStatsAside({ stats }) {
  if (!stats?.length) return null;

  return (
    <div className="flex shrink-0 items-center gap-[calc(36px*var(--t4-scale))]">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center justify-center gap-[calc(10px*var(--t4-scale))] leading-none"
        >
          <span className="animate-soft-in whitespace-nowrap text-center text-[calc(18px*var(--t4-scale))] font-bold uppercase tracking-wide text-white">
            {stat.label}
          </span>
          <span
            key={`${stat.label}-${stat.value}`}
            className="animate-score-pop whitespace-nowrap text-center text-[calc(28px*var(--t4-scale))] font-bold tabular-nums"
          >
            {stat.value}
          </span>
        </div>
      ))}
    </div>
  );
}

/**
 * @param {Object} props
 * @param {import('../../../../../shared/types/match.types.js').MatchTeam} props.team
 * @param {import('../../../../../shared/types/match.types.js').MatchBatter[]} [props.batters]
 * @param {import('../../../../../shared/types/match.types.js').MatchStat} [props.runRateStat]
 * @param {import('../../../../../shared/types/match.types.js').MatchStat[]} [props.runRateStats] - Multiple rates (e.g. CRR + RRR)
 * @param {import('../../../../../shared/types/match.types.js').MatchStat[]} [props.stats] - Need/Target pairs; replaces overs + RR when set
 * @param {string} props.backgroundColor
 */
export default function DefaultBattingPanel({
  team,
  batters = [],
  runRateStat,
  runRateStats,
  stats,
  backgroundColor,
}) {
  const { overs, oversLimit, code: teamCode } = team ?? {};
  const [batterOne, batterTwo] = batters;
  const showNeedTarget = Array.isArray(stats) && stats.length > 0;

  return (
    <div
      className="flex min-w-0 flex-1 items-center gap-[calc(20px*var(--t4-scale))] px-[calc(18px*var(--t4-scale))] text-white"
      style={{ backgroundColor }}
    >
      {teamCode ? (
        <>
          <div className="flex shrink-0 items-center justify-center px-[calc(8px*var(--t4-scale))]">
            <span className="whitespace-nowrap text-[calc(36px*var(--t4-scale))] font-bold uppercase leading-none">
              {teamCode}
            </span>
          </div>
          <PanelDivider />
        </>
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-[calc(18px*var(--t4-scale))]">
        <BatterRow batter={batterOne} />
        <BatterRow batter={batterTwo} />
      </div>

      <PanelDivider />

      {showNeedTarget ? (
        <NeedTargetStatsAside stats={stats} />
      ) : (
        <OversRunRateAside
          overs={overs}
          oversLimit={oversLimit}
          runRateStat={runRateStat}
          runRateStats={runRateStats}
        />
      )}
    </div>
  );
}
