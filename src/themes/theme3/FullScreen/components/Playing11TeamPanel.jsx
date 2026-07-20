import React from "react";

/**
 * One team's Playing XI panel — header (name + logo) + player list.
 *
 * @param {Object} props
 * @param {Object} props.team
 * @param {"batsman"|"bowler"} [props.tone]
 */
export default function Playing11TeamPanel({ team, tone = "batsman" }) {
  if (!team?.name && !team?.players?.length) return null;

  const players = Array.isArray(team.players) ? team.players : [];
  const label = team.name || team.code || "";
  const toneClass =
    tone === "bowler" ? "playing11-panel--bowler" : "playing11-panel--batsman";

  return (
    <section className={`playing11-panel ${toneClass}`}>
      <header className="playing11-panel-header">
        <span className="ctrl-t-playing11-team min-w-0 truncate uppercase text-white">
          {label}
        </span>
        <div className="playing11-panel-logo">
          {team.logoUrl ? (
            <img
              src={team.logoUrl}
              alt={label}
              className="h-full w-full object-contain"
            />
          ) : (
            <span className="ctrl-t-playing11-code font-bold uppercase text-white">
              {team.code || "?"}
            </span>
          )}
        </div>
      </header>

      <ul className="playing11-player-list">
        {players.map((player, index) => {
          const name = typeof player === "string" ? player : player?.name ?? "";
          return (
            <li key={`${name}-${index}`} className="playing11-player-row">
              <span className="playing11-player-accent" aria-hidden="true" />
              <span className="playing11-player-name-wrap">
                <span className="ctrl-t-playing11-player uppercase text-white">
                  {name}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
