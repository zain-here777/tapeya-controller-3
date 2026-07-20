import React from "react";
import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";
import BreakFabricBackground from "../../Breaks/components/BreakFabricBackground.jsx";

const BOWLING_COLUMNS = [
  { key: "overs", label: "OVERS" },
  { key: "dots", label: "DOTS" },
  { key: "runs", label: "RUNS" },
  { key: "wickets", label: "WICKETS" },
  { key: "eco", label: "ECO" },
];

/**
 * BowlingSummary — same shell as BattingSummary, bowling table + FOW.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function BowlingSummaryCore({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  const bowlers = Array.isArray(match?.bowlers) ? match.bowlers : [];
  if (!bowlers.length) return null;

  mergeControllerConfig(baseConfig, configOverride);

  const team = match.team ?? {};
  const tournament = match.tournament ?? "";
  const teamLabel = team.name || team.code || "";
  const summary = match.summary ?? {};
  const fallOfWickets = match.fallOfWickets ?? "";
  const panelBg = "bg-bowler-panel";

  return (
    <div className="bs-fs-page bs-fs-page--bowler controller-scaled font-controller select-none">
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
                  <span className="ctrl-t-bs-fs-code font-bold uppercase text-[#c4002b]">
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

            <div className="bowl-fs-table">
              <div className="bowl-fs-head">
                <span className="bowl-fs-head-spacer" aria-hidden="true" />
                {BOWLING_COLUMNS.map((col) => (
                  <span
                    key={col.key}
                    className="ctrl-t-bowl-fs-head uppercase text-white"
                  >
                    {col.label}
                  </span>
                ))}
              </div>

              <div className="bs-fs-list bowl-fs-list">
                {bowlers.map((bowler, index) => {
                  const name = bowler.name ?? "";

                  return (
                    <div
                      key={`${name}-${index}`}
                      className={`bs-fs-row bowl-fs-row bs-fs-row-in ${panelBg}`}
                      style={{ "--bs-fs-delay": `${index * 60}ms` }}
                    >
                      <span className="ctrl-t-bs-fs-name uppercase text-white">
                        {name}
                      </span>
                      <span className="ctrl-t-bowl-fs-stat tabular-nums text-white">
                        {bowler.overs ?? "0.0"}
                      </span>
                      <span className="ctrl-t-bowl-fs-stat tabular-nums text-white">
                        {bowler.dots ?? 0}
                      </span>
                      <span className="ctrl-t-bowl-fs-stat tabular-nums text-white">
                        {bowler.runs ?? 0}
                      </span>
                      <span className="ctrl-t-bowl-fs-stat tabular-nums text-white">
                        {bowler.wickets ?? 0}
                      </span>
                      <span className="ctrl-t-bowl-fs-stat tabular-nums text-white">
                        {bowler.eco ?? "0.0"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {fallOfWickets ? (
              <div className="bowl-fs-fow">
                <span className="ctrl-t-bowl-fs-fow uppercase">
                  FALL OF WICKETS : {fallOfWickets}
                </span>
              </div>
            ) : null}

            <div className={`bs-fs-footer ${panelBg}`}>
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

          <div className={`bs-fs-crest ${panelBg}`}>
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
