import React from "react";

/**
 * Left FOW team block — code + score / overs (Theme 5 MiniScorecard language).
 *
 * @param {Object} props
 * @param {import('../../../../../shared/types/match.types.js').MatchTeam} props.team
 */
export default function FowTeamBlock({ team }) {
  if (!team) return null;

  const { code, runs = 0, wickets = 0, overs, oversLimit } = team;

  return (
    <div className="flex h-full shrink-0 items-center gap-[calc(40px*var(--t5-scale))] pl-[calc(20px*var(--t5-scale))] pr-[calc(28px*var(--t5-scale))] text-white">
      {code ? (
        <span className="shrink-0 text-[calc(36px*var(--t5-scale))] font-bold uppercase leading-none tracking-tight">
          {code}
        </span>
      ) : null}

      <div className="flex w-max shrink-0 flex-col items-end leading-none">
        <span
          key={`${runs}-${wickets}`}
          className="animate-score-pop shrink-0 text-[calc(52px*var(--t5-scale))] font-bold leading-none tabular-nums"
        >
          {runs}-{wickets}
        </span>

        {overs ? (
          <span className="flex shrink-0 items-baseline gap-[calc(8px*var(--t5-scale))] leading-none tabular-nums">
            <span className="text-[calc(24px*var(--t5-scale))] font-bold">{overs}</span>
            {oversLimit != null && oversLimit !== "" ? (
              <span className="text-[calc(18px*var(--t5-scale))] font-bold text-white/85">
                ({oversLimit})
              </span>
            ) : null}
          </span>
        ) : null}
      </div>
    </div>
  );
}
