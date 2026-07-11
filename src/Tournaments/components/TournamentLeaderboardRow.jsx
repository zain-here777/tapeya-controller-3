import React from "react";

/**
 * Single leaderboard row — rank badge, stat value, player name.
 *
 * @param {Object} props
 * @param {number|string} props.rank
 * @param {string} props.name
 * @param {string|number} props.value
 * @param {boolean} [props.active]
 * @param {number} [props.index] - Stagger index for name enter animation
 */
export default function TournamentLeaderboardRow({
  rank,
  name,
  value,
  active = false,
  index = 0,
}) {
  const rankLabel = String(rank).padStart(2, "0");
  const rowClass = [
    "tournament-lb-row",
    active ? "tournament-lb-row--active" : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rowClass}>
      <div className="tournament-lb-rank">
        <span className="ctrl-t-tournament-lb-rank tabular-nums text-white">
          {rankLabel}
        </span>
      </div>
      <span className="ctrl-t-tournament-lb-value tabular-nums text-white">
        {value}
      </span>
      <span
        className="ctrl-t-tournament-lb-name tournament-lb-name-anim min-w-0 truncate uppercase text-white"
        style={{ animationDelay: `${120 + index * 140}ms` }}
      >
        {name}
      </span>
    </div>
  );
}
