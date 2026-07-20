import React from "react";
import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";
import BreakFabricBackground from "../../Breaks/components/BreakFabricBackground.jsx";

/**
 * BattingSummary — full-screen batting card with logo and footer totals.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function BattingSummaryCore({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  const batters = Array.isArray(match?.batters) ? match.batters : [];
  if (!batters.length) return null;

  mergeControllerConfig(baseConfig, configOverride);

  const team = match.team ?? {};
  const tournament = match.tournament ?? "";
  const teamLabel = team.name || team.code || "";
  const summary = match.summary ?? {};

  return (
    <div className="bs-fs-page controller-scaled font-controller select-none">
      <BreakFabricBackground />

      <div className="bs-fs-inner">
        <div className="bs-fs-main">
          <div className="bs-fs-left">
            <header className="bs-fs-header">
              <div className="bs-fs-logo">
                {team.logoUrl ? (
                  <img
                    src={team.logoUrl}
                    alt={teamLabel}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span className="ctrl-t-bs-fs-code font-bold uppercase text-[#9c0028]">
                    {team.code || "?"}
                  </span>
                )}
              </div>
              <div className="bs-fs-header-text">
                {teamLabel ? (
                  <h1 className="ctrl-t-bs-fs-team uppercase text-white">
                    {teamLabel}
                  </h1>
                ) : null}
                {tournament ? (
                  <p className="ctrl-t-bs-fs-tournament uppercase text-white">
                    {tournament}
                  </p>
                ) : null}
              </div>
            </header>

            <div className="bs-fs-list">
              {batters.map((batter, index) => {
                const name = batter.name ?? "";
                const howOut = batter.howOut ?? "";
                const runs = batter.runs ?? 0;
                const balls = batter.balls ?? 0;
                const strikeMark = batter.onStrike ? "*" : "";

                return (
                  <div
                    key={`${name}-${index}`}
                    className="bs-fs-row bs-fs-row-in bg-panel-player"
                    style={{ "--bs-fs-delay": `${index * 60}ms` }}
                  >
                    <span className="ctrl-t-bs-fs-name uppercase text-white">
                      {name}
                      {strikeMark}
                    </span>
                    <span className="ctrl-t-bs-fs-howout uppercase text-white">
                      {howOut}
                    </span>
                    <span className="bs-fs-score">
                      <span className="ctrl-t-bs-fs-runs tabular-nums text-white">
                        {runs}
                      </span>
                      <span className="ctrl-t-bs-fs-balls tabular-nums text-white">
                        {balls}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="bs-fs-footer bg-panel-player">
              <div className="bs-fs-footer-meta">
                <div className="bs-fs-footer-cell">
                  <span className="ctrl-t-bs-fs-footer-label uppercase text-white">
                    EXTRAS
                  </span>
                  <span className="ctrl-t-bs-fs-footer-value tabular-nums text-white">
                    {summary.extras ?? 0}
                  </span>
                </div>

                <span className="bs-fs-footer-divider" aria-hidden="true" />

                <div className="bs-fs-footer-cell">
                  <span className="ctrl-t-bs-fs-footer-label uppercase text-white">
                    OVERS
                  </span>
                  <span className="ctrl-t-bs-fs-footer-value tabular-nums text-white">
                    {summary.overs ?? "0.0"}
                  </span>
                </div>
              </div>

              <span className="ctrl-t-bs-fs-footer-score tabular-nums text-white">
                {summary.score ?? "0-0"}
              </span>
            </div>
          </div>

          <div className="bs-fs-crest bg-panel-player">
            {team.logoUrl ? (
              <img
                src={team.logoUrl}
                alt={teamLabel}
                className="bs-fs-crest-img"
              />
            ) : (
              <span className="ctrl-t-bs-fs-crest-fallback uppercase text-white/40">
                {team.code || "?"}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
