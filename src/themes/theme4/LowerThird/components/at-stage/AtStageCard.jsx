import React from "react";

function PanelDivider() {
  return (
    <div
      className="h-[calc(68px*var(--t4-scale))] w-px shrink-0 self-center bg-white/25"
      aria-hidden="true"
    />
  );
}

/**
 * Theme 4 At Stage card — title + team score/overs columns.
 * Sized to fit the equal-width right half so the innings score stays centered.
 *
 * @param {Object} props
 * @param {string} [props.titleLine1]
 * @param {string} [props.titleLine2]
 * @param {Array<{ id?: string, code?: string, name?: string, runs?: number, wickets?: number, overs?: string|number }>} [props.teams]
 */
export default function AtStageCard({
  titleLine1 = "AT THIS",
  titleLine2 = "STAGE",
  teams = [],
}) {
  return (
    <div className="flex min-w-0 flex-1 items-stretch">
      <div className="flex shrink-0 flex-col items-center justify-center gap-[calc(4px*var(--t4-scale))] px-[calc(12px*var(--t4-scale))] text-center leading-none">
        <span className="whitespace-nowrap text-[calc(18px*var(--t4-scale))] font-bold uppercase tracking-wide text-white">
          {titleLine1}
        </span>
        <span className="whitespace-nowrap text-[calc(28px*var(--t4-scale))] font-bold uppercase leading-none text-white">
          {titleLine2}
        </span>
      </div>

      <div className="flex min-w-0 flex-1 items-stretch">
        {teams.map((team, index) => {
          const shortName = team.code || team.name || "";
          const runs = team.runs ?? 0;
          const wickets = team.wickets ?? 0;
          const overs = team.overs;
          const score = `${runs}-${wickets}`;

          return (
            <React.Fragment key={team.id ?? shortName ?? index}>
              <PanelDivider />
              <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-[calc(4px*var(--t4-scale))] overflow-hidden px-[calc(8px*var(--t4-scale))] text-center leading-none">
                {shortName ? (
                  <span className="min-w-0 max-w-full truncate text-[calc(24px*var(--t4-scale))] font-bold uppercase tracking-wide text-white">
                    {shortName}
                  </span>
                ) : null}
                <div className="flex min-w-0 items-end justify-center gap-[calc(6px*var(--t4-scale))]">
                  <span
                    key={score}
                    className="animate-score-pop whitespace-nowrap text-[calc(34px*var(--t4-scale))] font-bold tabular-nums text-white"
                  >
                    {score}
                  </span>
                  {overs != null && overs !== "" ? (
                    <span className="pb-[calc(3px*var(--t4-scale))] whitespace-nowrap text-[calc(18px*var(--t4-scale))] font-bold tabular-nums text-white/90">
                      ({overs})
                    </span>
                  ) : null}
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
