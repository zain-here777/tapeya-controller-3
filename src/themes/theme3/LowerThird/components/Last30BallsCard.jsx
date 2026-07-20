import React from "react";
import Divider from "../core/Divider";

const DEFAULT_STATS = [
  { label: "DOTS", key: "dots" },
  { label: "FOURS", key: "fours" },
  { label: "SIXES", key: "sixes" },
  { label: "WICKETS", key: "wickets" },
  { label: "RUNS", key: "runs" },
];

function StatCell({ label, value }) {
  return (
    <div className="ctrl-gap-4 flex h-full min-w-0 flex-col items-center justify-center leading-none text-white">
      <span className="ctrl-t-last30-stat-label whitespace-nowrap uppercase">
        {label}
      </span>
      <span
        key={value}
        className="ctrl-t-last30-stat-value animate-score-pop whitespace-nowrap tabular-nums"
      >
        {value}
      </span>
    </div>
  );
}

function titleAlignClassName(titleAlign) {
  if (titleAlign === "end") return "min-w-0 flex-1 items-end text-right";
  if (titleAlign === "center") {
    return "min-w-0 flex-1 items-center text-center";
  }
  return "shrink-0 items-start text-left";
}

/**
 * Summary stats block — title + evenly spaced stat columns (Last30 / Partnership).
 */
export default function Last30BallsCard({
  titleLine1 = "LAST 30",
  titleLine2 = "BALLS",
  stats,
  titleAlign = "start",
  showLeadingDivider = false,
  showTrailingDivider = false,
}) {
  const cells = stats?.length
    ? stats
    : DEFAULT_STATS.map(({ label, key }) => ({
        label,
        value: 0,
        key,
      }));

  return (
    <div className="ctrl-pl-32 ctrl-pr-16 flex h-full min-w-0 flex-1 items-stretch">
      {showLeadingDivider ? <Divider /> : null}

      <div
        className={`ctrl-gap-2 ctrl-px-24 flex flex-col justify-center leading-none text-white ${titleAlignClassName(titleAlign)}`}
      >
        <span className="ctrl-t-last30-title-sm whitespace-nowrap uppercase">
          {titleLine1}
        </span>
        <span className="ctrl-t-last30-title-lg whitespace-nowrap uppercase">
          {titleLine2}
        </span>
      </div>

      <div className="flex h-full min-w-0 flex-[1.2] items-stretch">
        {cells.map((stat) => (
          <React.Fragment key={stat.key ?? stat.label}>
            <Divider />
            <div className="flex h-full min-w-0 flex-1 basis-0 items-center justify-center">
              <StatCell label={stat.label} value={stat.value} />
            </div>
          </React.Fragment>
        ))}
        {showTrailingDivider ? <Divider /> : null}
      </div>
    </div>
  );
}
