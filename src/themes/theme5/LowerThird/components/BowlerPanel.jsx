import React from "react";
import TeamCrest from "./TeamCrest.jsx";

/** Theme 5 bowler panel. */
export default function BowlerPanel({ featuredPlayer, team }) {
  if (!featuredPlayer) return null;

  const { name, wickets = 0, runs = 0, overs, overBalls = [] } = featuredPlayer;

  return (
    <div className="t5-bowler-panel">
      <div className="t5-bowler-header">
        {team && (
          <TeamCrest
            code={team.code}
            name={team.name}
            logoUrl={team.logoUrl}
            theme={team.theme || "gold"}
            size="sm"
          />
        )}
        <div className="t5-bowler-meta">
          <span className="t5-bowler-name">{name}</span>
          <span className="t5-bowler-figures">
            {wickets}/{runs} ({overs})
          </span>
        </div>
      </div>
      {overBalls.length > 0 && (
        <div className="t5-over-balls">
          {overBalls.map((ball, index) => (
            <span key={`${ball}-${index}`} className="t5-over-ball">
              {ball === "dot" ? "•" : ball}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
