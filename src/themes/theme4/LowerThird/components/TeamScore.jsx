import React from "react";
import TeamCrest from "./TeamCrest.jsx";

/** Theme 4 team score column. */
export default function TeamScore({ team }) {
  if (!team) return null;

  const {
    code,
    name,
    logoUrl,
    runs = 0,
    wickets = 0,
    overs,
    oversLimit,
    theme = "gold",
  } = team;

  return (
    <div className="t4-team-score">
      <TeamCrest code={code} name={name} logoUrl={logoUrl} theme={theme} size="md" />
      <div className="t4-team-score-meta">
        {code && <span className="t4-team-code">{code}</span>}
        <span className="t4-team-runs">{runs}-{wickets}</span>
        {overs && (
          <span className="t4-team-overs">
            {overs}
            {oversLimit ? ` (${oversLimit})` : ""}
          </span>
        )}
      </div>
    </div>
  );
}
