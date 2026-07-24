import React from "react";

/** Theme 5 batter card. */
export default function BatterCard({ batter }) {
  if (!batter) return null;

  const { name, runs = 0, balls = 0, onStrike } = batter;

  return (
    <div className={`t5-batter-card${onStrike ? " t5-batter-card--strike" : ""}`}>
      <span className="t5-batter-name">{name}</span>
      <span className="t5-batter-stats">
        {runs}
        <span className="t5-batter-stats-sep">/</span>
        {balls}
      </span>
    </div>
  );
}
