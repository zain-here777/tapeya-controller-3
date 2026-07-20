import React from "react";
import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";
import BreakFabricBackground from "../../Breaks/components/BreakFabricBackground.jsx";

const DEFAULT_COLUMNS = ["PLD", "WON", "LOST", "NR", "PTS", "NRR"];

/**
 * PointsTable — full-screen tournament standings board.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function PointsTableCore({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match) return null;

  const config = mergeControllerConfig(baseConfig, configOverride);
  const title = match.title ?? config.title ?? "POINTS TABLE";
  const tournament = match.tournament ?? "";
  const columns = match.columns?.length ? match.columns : DEFAULT_COLUMNS;
  const teams = Array.isArray(match.teams) ? match.teams : [];
  const footer = match.footer ?? "";

  return (
    <div className="tournament-lb-page tournament-lb-page--top controller-scaled font-controller select-none">
      <BreakFabricBackground />

      <div className="points-table-inner">
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

        <div className="points-table-board">
          <div className="points-table-cols-header" aria-hidden="true">
            <div className="points-table-rank points-table-rank--ghost" />
            <div className="points-table-team-spacer" />
            <div className="points-table-stats">
              {columns.map((col) => (
                <span
                  key={col}
                  className="ctrl-t-points-table-col uppercase text-white/70"
                >
                  {col}
                </span>
              ))}
            </div>
          </div>

          <div className="points-table-rows">
            {teams.map((team) => {
              const values = [
                team.pld ?? "0",
                team.won ?? "0",
                team.lost ?? "0",
                team.nr ?? "0",
                team.pts ?? "0",
                team.nrr ?? "—",
              ];

              return (
                <div key={`${team.rank}-${team.name}`} className="points-table-row">
                  <div
                    className={`points-table-rank${
                      team.rank === 1 ? " points-table-rank--lead" : ""
                    }`}
                  >
                    <span className="ctrl-t-tournament-lb-rank tabular-nums text-white">
                      {team.rank}
                    </span>
                  </div>
                  <span className="ctrl-t-points-table-team min-w-0 truncate uppercase text-white">
                    {team.name}
                  </span>
                  <div className="points-table-stats">
                    {values.map((value, index) => (
                      <span
                        key={`${team.name}-${columns[index] ?? index}`}
                        className="ctrl-t-points-table-value tabular-nums text-white"
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {footer ? (
          <div className="points-table-footer">
            <span className="ctrl-t-points-table-footer uppercase text-white">
              {footer}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
