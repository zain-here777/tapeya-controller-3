import React from "react";
import PlayerCardRow from "./PlayerCardRow";
import OverBalls from "./OverBalls";

/**
 * Current bowler spotlight — figures and live over ball strip / last-over summary.
 *
 * @param {Object} props
 * @param {Object} props.player
 * @param {boolean} [props.showFullOverBalls] - Always show the full over strip (pad to 6+)
 * @param {boolean} [props.showLastOverSummary] - Show "Last over X runs" instead of balls
 */
export default function FeaturedPlayerCard({
  player,
  showFullOverBalls = false,
  showLastOverSummary = false,
}) {
  if (!player) return null;
  const {
    name,
    photoUrl,
    wickets = 0,
    runs = 0,
    overs,
    overBalls = [],
    lastOverRuns,
  } = player;
  const showOverBalls =
    !showLastOverSummary && (showFullOverBalls || overBalls.length > 0);
  const lastOverValue =
    lastOverRuns ?? (showLastOverSummary ? 0 : null);

  return (
    <PlayerCardRow
      cardClassName="ctrl-bowler-card min-w-0 flex-1"
      fallbackClassName="ctrl-gap-26 ctrl-px-16"
      noAvatarAlign="start"
      photoUrl={photoUrl}
      name={name}
    >
      <div className="ctrl-gap-10 flex min-w-0 flex-col">
        <div className="ctrl-gap-6 flex min-w-0 items-baseline justify-between">
          <span className="ctrl-t-bowler-name ctrl-tracking min-w-0 truncate text-white">
            {name}
          </span>
          <span className="ctrl-t-bowler-fig shrink-0 whitespace-nowrap tabular-nums text-white">
            {wickets}-{runs}
            {overs != null && overs !== "" && (
              <span className="ctrl-t-bowler-overs ctrl-ml-8">({overs})</span>
            )}
          </span>
        </div>

        {showLastOverSummary ? (
          <p className="ctrl-t-bowler-last-over m-0 whitespace-nowrap text-white">
            Last over{" "}
            <span
              key={lastOverValue}
              className="ctrl-t-bowler-last-over-score animate-score-pop font-bold tabular-nums"
            >
              {lastOverValue}
            </span>{" "}
            runs
          </p>
        ) : null}

        {showOverBalls ? <OverBalls balls={overBalls} /> : null}
      </div>
    </PlayerCardRow>
  );
}
