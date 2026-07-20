import React from "react";
import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";
import BreakFabricBackground from "../../Breaks/components/BreakFabricBackground.jsx";

/**
 * InningsFigure — full-screen innings figures (NeedTarget shell, 2x2 stats).
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function InningsFigureCore({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  const figures = Array.isArray(match?.figures) ? match.figures : [];
  if (!figures.length) return null;

  mergeControllerConfig(baseConfig, configOverride);

  const tournament = match.tournament ?? "";
  const matchup = match.matchup ?? "";

  return (
    <div className="need-fs-page controller-scaled font-controller select-none">
      <BreakFabricBackground />

      <div className="need-fs-inner">
        <header className="need-fs-header">
          {matchup ? (
            <h1 className="ctrl-t-need-fs-matchup uppercase text-white">
              {matchup}
            </h1>
          ) : null}
          {tournament ? (
            <p className="ctrl-t-need-fs-tournament uppercase text-white">
              {tournament}
            </p>
          ) : null}
        </header>

        <div className="need-fs-card-wrap innings-fs-card-wrap">
          <div className="need-fs-card bg-panel-player innings-fs-card">
            <div className="innings-fs-grid">
              {figures.map((figure) => (
                <div key={figure.label} className="need-fs-col innings-fs-cell">
                  <span className="need-fs-chip">
                    <span className="ctrl-t-need-fs-chip uppercase text-white">
                      {figure.label}
                    </span>
                  </span>
                  <span className="ctrl-t-need-fs-value ctrl-t-innings-fs-value tabular-nums uppercase text-white">
                    {figure.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
