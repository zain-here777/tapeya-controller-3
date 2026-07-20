import React from "react";

/**
 * StatItem
 * One label/value pair (e.g. PARTNERSHIP 9 (6)).
 */
export default function StatItem({ label, value, sublabel }) {
  return (
    <div className="ctrl-px-8 flex min-w-0 flex-col items-center justify-center overflow-hidden text-center">
      <span className="ctrl-t-stat-label ctrl-tracking whitespace-nowrap uppercase text-white">
        {label}
      </span>
      <span
        key={value}
        className="ctrl-t-stat-value animate-score-pop whitespace-nowrap tabular-nums text-white"
      >
        {value}
      </span>
      {sublabel && (
        <span className="ctrl-t-stat-sub whitespace-nowrap font-medium text-white">
          {sublabel}
        </span>
      )}
    </div>
  );
}
