import React from "react";

/**
 * Break team column — logo tile + name under it.
 *
 * @param {Object} props
 * @param {{ code?: string, name?: string, logoUrl?: string }} props.team
 */
export default function BreakTeamCard({ team }) {
  if (!team) return null;

  const label = team.name || team.code || "";

  return (
    <div className="break-team-card">
      <div className="break-team-logo">
        {team.logoUrl ? (
          <img
            src={team.logoUrl}
            alt={label}
            className="h-full w-full object-contain p-[calc(16px*var(--cs))]"
          />
        ) : (
          <span className="ctrl-t-break-team-code font-bold uppercase leading-none text-white">
            {team.code || "?"}
          </span>
        )}
      </div>

      {label ? (
        <span className="ctrl-t-break-team-name text-center uppercase text-white">
          {label}
        </span>
      ) : null}
    </div>
  );
}
