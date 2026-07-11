import React from "react";
import TeamCrest from "./TeamCrest";

/**
 * TeamScore
 * Logo↔code spacing matches bowler panel; equal code→score and score→divider gaps.
 */
export default function TeamScore({ team, align = "left" }) {
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

  const isRight = align === "right";

  if (isRight) {
    return (
      <div className="ctrl-gap-12 ctrl-py-8 flex items-center">
        <div className="ctrl-gap-8 flex items-baseline">
          <span
            key={`${runs}-${wickets}`}
            className="ctrl-t-score-md animate-score-pop tabular-nums text-white"
          >
            {runs}-{wickets}
          </span>
          {overs && (
            <span className="ctrl-t-overs-sm font-medium tabular-nums text-white">
              {overs}
            </span>
          )}
        </div>
        <TeamCrest code={code} name={name} logoUrl={logoUrl} theme={theme} size="md" />
      </div>
    );
  }

  return (
    <div className="ctrl-pr-48 flex h-full w-full min-w-0 items-center">
      <div className="ctrl-gap-8 flex shrink-0 items-center">
        <TeamCrest code={code} name={name} logoUrl={logoUrl} theme={theme} size="md" />
        {code && (
          <span className="ctrl-t-team-code ctrl-px-12 ctrl-tracking-tight shrink-0 font-bold text-white">
            {code}
          </span>
        )}
      </div>

      <div className="ctrl-ml-48 flex w-max shrink-0 flex-col items-end leading-none">
        <span
          key={`${runs}-${wickets}`}
          className="ctrl-t-team-score animate-score-pop shrink-0 leading-none tabular-nums text-white"
        >
          {runs}-{wickets}
        </span>

        {overs && (
          <span className="ctrl-gap-10 flex shrink-0 items-baseline leading-none tabular-nums text-white">
            <span className="ctrl-t-overs">{overs}</span>
            {oversLimit ? (
              <span className="ctrl-t-overs-limit">({oversLimit})</span>
            ) : null}
          </span>
        )}
      </div>
    </div>
  );
}
