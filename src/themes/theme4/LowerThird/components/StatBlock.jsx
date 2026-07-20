import React from "react";

/** Theme 4 stat column. */
export default function StatBlock({ stat }) {
  if (!stat) return null;

  return (
    <div className="t4-stat-block">
      <span className="t4-stat-label">{stat.label}</span>
      <span className="t4-stat-value">{stat.value}</span>
      {stat.sublabel && <span className="t4-stat-sublabel">{stat.sublabel}</span>}
    </div>
  );
}
