import React from "react";
import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";
import BreakFabricBackground from "../../Breaks/components/BreakFabricBackground.jsx";
import TournamentLeaderboardRow from "../components/TournamentLeaderboardRow.jsx";

/**
 * Shared full-screen tournament leaderboard shell.
 * Left: title + ranked list. Right: featured player portrait + name + value.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 * @param {"center"|"top"} [props.layout="top"] - "top" pins header like Match Summary
 */
export default function TournamentLeaderboardCore({
  match,
  baseConfig,
  config: configOverride = {},
  layout = "top",
}) {
  if (!match) return null;

  const config = mergeControllerConfig(baseConfig, configOverride);
  const title = match.title ?? config.title ?? "";
  const tournament = match.tournament ?? "";
  const entries = Array.isArray(match.entries) ? match.entries : [];
  const featured = match.featured ?? entries[0] ?? null;
  const pageClass = [
    "tournament-lb-page",
    layout === "top" ? "tournament-lb-page--top" : null,
    "controller-scaled",
    "font-controller",
    "select-none",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={pageClass}>
      <BreakFabricBackground />

      <div className="tournament-lb-inner">
        <div className="tournament-lb-left">
          <header className="tournament-lb-header">
            {title ? (
              <h1 className="ctrl-t-tournament-lb-title uppercase text-white">
                {title}
              </h1>
            ) : null}
            {tournament ? (
              <p className="ctrl-t-tournament-lb-subtitle uppercase text-white">
                {tournament}
              </p>
            ) : null}
          </header>

          <div className="tournament-lb-list">
            {entries.map((entry, index) => (
              <TournamentLeaderboardRow
                key={`${entry.rank}-${entry.name}-${index}`}
                rank={entry.rank ?? index + 1}
                name={entry.name ?? ""}
                value={entry.value ?? "—"}
                index={index}
                active={Boolean(
                  featured &&
                    (featured.rank ?? 1) === (entry.rank ?? index + 1)
                )}
              />
            ))}
          </div>
        </div>

        {featured ? (
          <aside className="tournament-lb-featured">
            <div className="tournament-lb-portrait">
              {featured.photoUrl ? (
                <img
                  src={featured.photoUrl}
                  alt={featured.name || "Featured player"}
                  className="tournament-lb-portrait-img"
                />
              ) : (
                <div className="tournament-lb-portrait-fallback">
                  <span className="ctrl-t-tournament-lb-title uppercase text-white/35">
                    {(featured.name || "?").slice(0, 1)}
                  </span>
                </div>
              )}
            </div>

            <div className="tournament-lb-featured-meta">
              <div className="tournament-lb-nameplate">
                <span
                  className="ctrl-t-tournament-lb-featured-name tournament-lb-name-anim uppercase text-white"
                  style={{ animationDelay: "280ms" }}
                >
                  {featured.name}
                </span>
              </div>
              <div className="tournament-lb-scoreplate">
                <span className="ctrl-t-tournament-lb-featured-value tabular-nums text-white">
                  {featured.value ?? "—"}
                </span>
              </div>
            </div>
          </aside>
        ) : null}
      </div>
    </div>
  );
}
