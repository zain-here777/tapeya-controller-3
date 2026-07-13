import React from "react";
import Divider from "../core/Divider";

/**
 * At Stage right-panel content — title + two team score/overs blocks.
 * Fits the same panel shell as CurrentPartnership / Last30Balls.
 */
export default function AtStageCard({
  titleLine1 = "AT THIS",
  titleLine2 = "STAGE",
  teams = [],
  showLeadingDivider = true,
  showTrailingDivider = true,
}) {
  return (
    <div className="ctrl-pl-32 ctrl-pr-16 flex h-full min-w-0 flex-1 items-stretch">
      {showLeadingDivider ? <Divider /> : null}

      <div className="ctrl-gap-2 ctrl-px-24 flex shrink-0 flex-col items-center justify-center text-center leading-none text-white">
        <span className="ctrl-t-last30-title-sm whitespace-nowrap uppercase">
          {titleLine1}
        </span>
        <span className="ctrl-t-last30-title-lg whitespace-nowrap uppercase">
          {titleLine2}
        </span>
      </div>

      <div className="flex h-full min-w-0 flex-[1.2] items-stretch">
        {teams.map((team, index) => {
          const shortName = team.code || team.name || "";
          const runs = team.runs ?? 0;
          const wickets = team.wickets ?? 0;
          const overs = team.overs;
          const score = `${runs}-${wickets}`;

          return (
            <React.Fragment key={team.id ?? shortName ?? index}>
              <Divider />
              <div className="ctrl-gap-6 ctrl-px-16 flex h-full min-w-0 flex-1 basis-0 flex-col items-center justify-center overflow-hidden text-center leading-none text-white">
                {shortName ? (
                  <span className="ctrl-t-at-stage-team min-w-0 max-w-full truncate uppercase">
                    {shortName}
                  </span>
                ) : null}
                <div className="ctrl-gap-10 flex min-w-0 items-end justify-center">
                  <span
                    key={score}
                    className="ctrl-t-at-stage-score animate-score-pop whitespace-nowrap tabular-nums"
                  >
                    {score}
                  </span>
                  {overs != null && overs !== "" ? (
                    <span className="ctrl-t-at-stage-overs whitespace-nowrap tabular-nums">
                      ({overs})
                    </span>
                  ) : null}
                </div>
              </div>
            </React.Fragment>
          );
        })}
        {showTrailingDivider ? <Divider /> : null}
      </div>
    </div>
  );
}
