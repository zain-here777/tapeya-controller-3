import React from "react";

/** Theme 4 batter card. */
export default function BatterCard({ batter }) {
  if (!batter) return null;

  const { name, runs = 0, balls = 0, onStrike } = batter;

  return (
    <div className={`t4-batter-card${onStrike ? " t4-batter-card--strike" : ""}`}>
      <span className="t4-batter-name">{name}</span>
      <span className="t4-batter-stats">
        {runs}
        <span className="t4-batter-stats-sep">/</span>
        {balls}
      </span>
    </div>
  );
}
