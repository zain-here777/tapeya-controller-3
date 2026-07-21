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

/**
 * @param {Object} props
 * @param {import('../../../../../shared/types/match.types.js').MatchTeam} props.team
 * @param {import('../../../../../shared/types/match.types.js').MatchBatter[]} [props.batters]
 * @param {import('../../../../../shared/types/match.types.js').MatchStat} [props.runRateStat]
 * @param {string} props.backgroundColor
 */
export default function DefaultBattingPanel({
  team,
  batters = [],
  runRateStat,
  backgroundColor,
}) {
  const { overs, oversLimit, code: teamCode } = team ?? {};
  const [batterOne, batterTwo] = batters;

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

        {runRateStat ? (
          <span
            key={`${runRateStat.label}-${runRateStat.value}`}
            className="animate-soft-in whitespace-nowrap text-center text-[calc(22px*var(--t4-scale))] font-medium"
          >
            {runRateStat.label}{" "}
            <span className="font-medium tabular-nums">{runRateStat.value}</span>
          </span>
        ) : null}
      </div>
    </div>
  );
}
