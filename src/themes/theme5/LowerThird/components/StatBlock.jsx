import React from "react";

/** Theme 5 stat column. */
export default function StatBlock({ stat }) {
  if (!stat) return null;

  return (
    <div className="t5-stat-block">
      <span className="t5-stat-label">{stat.label}</span>
      <span className="t5-stat-value">{stat.value}</span>
      {stat.sublabel && <span className="t5-stat-sublabel">{stat.sublabel}</span>}
    </div>
  );
}
