import React from "react";
import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";
import BreakFabricBackground from "../../Breaks/components/BreakFabricBackground.jsx";

/**
 * LastWicket — MatchFS-style full-screen dismissed batter graphic.
 * Portrait | vertical stats | card (logo + name + how out).
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function LastWicketFsCore({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  const player = match?.player;
  if (!player?.name && !player?.lastName) return null;

  mergeControllerConfig(baseConfig, configOverride);

  const team = match.team ?? {};
  const tournament = match.tournament ?? "";
  const name = player.name || player.lastName || "";
  const howOut = player.howOut ?? "";
  const photoUrl = player.photoUrl ?? "";
  const stats = player.stats ?? [];
  const teamLabel = team.name || team.code || "Team";

  return (
    <div className="name-fs-page last-wicket-fs-page controller-scaled font-controller select-none">
      <BreakFabricBackground />

      <div className="last-wicket-fs-shell">
        {tournament ? (
          <h1 className="ctrl-t-last-wicket-fs-tournament uppercase text-white">
            {tournament}
          </h1>
        ) : null}

        <div className="name-fs-inner match-fs-inner last-wicket-fs-inner">
          <div className="name-fs-portrait">
            {photoUrl ? (
              <img
                src={photoUrl}
                alt={name}
                className="name-fs-portrait-img"
              />
            ) : (
              <div className="name-fs-portrait-fallback">
                <span className="ctrl-t-name-fs-last uppercase text-white/40">
                  {(name || "?").slice(0, 1)}
                </span>
              </div>
            )}
          </div>

          {stats.length ? (
            <div className="match-fs-stats-col">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="match-fs-stat-block bg-panel-player"
                >
                  <span className="ctrl-t-match-fs-stat-label uppercase text-white">
                    {stat.label}
                  </span>
                  <span className="ctrl-t-match-fs-stat-value tabular-nums text-white">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          ) : null}

          <div className="name-fs-info match-fs-info last-wicket-fs-info">
            <div className="name-fs-card bg-panel-player last-wicket-fs-card">
              <div className="name-fs-logo bg-panel-player last-wicket-fs-logo">
                {team.logoUrl ? (
                  <img
                    src={team.logoUrl}
                    alt={teamLabel}
                    className="h-full w-full object-contain p-[calc(10px*var(--cs))]"
                  />
                ) : (
                  <span className="ctrl-t-name-fs-team-code font-bold uppercase text-white">
                    {team.code || "?"}
                  </span>
                )}
              </div>

              <span className="ctrl-t-name-fs-last uppercase text-white">
                {name}
              </span>

              {howOut ? (
                <span className="ctrl-t-last-wicket-fs-howout uppercase text-white/90">
                  {howOut}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
