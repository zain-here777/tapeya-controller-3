import React from "react";

const WHITE_PANEL =
  "bg-[linear-gradient(165deg,#ffffff_0%,#ffffff_58%,#f4f8fd_82%,#e3eef9_100%)]";

/**
 * @param {Object} props
 * @param {number} props.runs
 * @param {number} props.wickets
 * @param {string} [props.teamName]
 * @param {string} props.scoreColor
 */
export default function DefaultScoreCenter({
  runs = 0,
  wickets = 0,
  teamName,
  scoreColor,
}) {
  return (
    <div
      className={`flex h-full min-w-[calc(220px*var(--t4-scale))] shrink-0 flex-col items-center justify-center px-[calc(48px*var(--t4-scale))] ${WHITE_PANEL}`}
    >
      <span
        key={`${runs}-${wickets}`}
        className="animate-score-pop text-[calc(64px*var(--t4-scale))] font-bold leading-none tabular-nums"
        style={{ color: scoreColor }}
      >
        {runs}-{wickets}
      </span>
      {teamName ? (
        <span
          className="max-w-full animate-soft-in truncate whitespace-nowrap text-[calc(24px*var(--t4-scale))] font-medium uppercase"
          style={{ color: scoreColor }}
        >
          {teamName}
        </span>
      ) : null}
    </div>
  );
}
