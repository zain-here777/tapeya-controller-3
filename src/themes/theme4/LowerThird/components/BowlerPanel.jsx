import React from "react";
import TeamCrest from "./TeamCrest.jsx";

/** Theme 4 bowler panel. */
export default function BowlerPanel({ featuredPlayer, team }) {
  if (!featuredPlayer) return null;

  const { name, wickets = 0, runs = 0, overs, overBalls = [] } = featuredPlayer;

  return (
    <div className="t4-bowler-panel">
      <div className="t4-bowler-header">
        {team && (
          <TeamCrest
            code={team.code}
            name={team.name}
            logoUrl={team.logoUrl}
            theme={team.theme || "gold"}
            size="sm"
          />
        )}
        <div className="t4-bowler-meta">
          <span className="t4-bowler-name">{name}</span>
          <span className="t4-bowler-figures">
            {wickets}/{runs} ({overs})
          </span>
        </div>
      </div>
      {overBalls.length > 0 && (
        <div className="t4-over-balls">
          {overBalls.map((ball, index) => (
            <span key={`${ball}-${index}`} className="t4-over-ball">
              {ball === "dot" ? "•" : ball}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
