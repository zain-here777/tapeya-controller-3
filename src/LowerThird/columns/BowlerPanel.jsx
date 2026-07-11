import React from "react";
import FeaturedPlayerCard from "../components/FeaturedPlayerCard";
import Last12BallsCard from "../components/Last12BallsCard";
import Last30BallsCard from "../components/Last30BallsCard";
import TeamCrest from "../components/TeamCrest";

/**
 * BowlerPanel
 * Right-side column — featured bowler + opposing team crest.
 */
export default function BowlerPanel({
  featuredPlayer,
  team,
  last12Balls,
  last30Balls,
  currentPartnership,
  winPrediction,
  teamCodeClassName = "ctrl-t-team-code ctrl-tracking font-bold uppercase text-white",
  showFullOverBalls = false,
  showLastOverSummary = false,
  showLast12Balls = false,
  showLast30Balls = false,
  showCurrentPartnership = false,
  showWinPrediction = false,
  showTeamCrest = true,
}) {
  const summaryPanel =
    (showWinPrediction && winPrediction) ||
    (showCurrentPartnership && currentPartnership) ||
    (showLast30Balls && last30Balls) ||
    null;

  let main = null;
  if (summaryPanel) {
    main = (
      <Last30BallsCard
        titleLine1={summaryPanel.titleLine1}
        titleLine2={summaryPanel.titleLine2}
        titleAlign={summaryPanel.titleAlign}
        showLeadingDivider={summaryPanel.showLeadingDivider}
        showTrailingDivider={summaryPanel.showTrailingDivider}
        stats={summaryPanel.stats}
      />
    );
  } else if (showLast12Balls && last12Balls) {
    main = (
      <Last12BallsCard
        title={last12Balls.title}
        runs={last12Balls.runs}
        balls={last12Balls.balls}
      />
    );
  } else if (featuredPlayer) {
    main = (
      <FeaturedPlayerCard
        player={featuredPlayer}
        showFullOverBalls={showFullOverBalls}
        showLastOverSummary={showLastOverSummary}
      />
    );
  }

  return (
    <>
      {main}
      {showTeamCrest && team ? (
        <div className="ctrl-gap-8 ctrl-pl-8 ctrl-pr-16 flex h-full shrink-0 items-center">
          {(team.code || team.name) && (
            <span className={`${teamCodeClassName} ctrl-px-12`}>
              {team.code || team.name}
            </span>
          )}
          <TeamCrest
            code={team.code}
            name={team.name}
            logoUrl={team.logoUrl}
            theme={team.theme || "gold"}
            size="md"
          />
        </div>
      ) : null}
    </>
  );
}
