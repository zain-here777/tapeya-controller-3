import React from "react";
import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";
import BreakFabricBackground from "../../Breaks/components/BreakFabricBackground.jsx";

/**
 * MatchSummary — full-screen dual team innings summary with logos and result.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function MatchSummaryFsCore({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match?.teamA || !match?.teamB) return null;

  const config = mergeControllerConfig(baseConfig, configOverride);
  const title = match.title ?? config.title ?? "MATCH SUMMARY";
  const tournament = match.tournament ?? "";
  const result = match.result ?? "";

  return (
    <div className="ms-fs-page controller-scaled font-controller select-none">
      <BreakFabricBackground />

      <div className="ms-fs-inner">
        <div className="ms-fs-main">
          <div className="ms-fs-left">
            <header className="ms-fs-header">
              <h1 className="ctrl-t-ms-fs-title uppercase text-white">{title}</h1>
              {tournament ? (
                <p className="ctrl-t-ms-fs-tournament uppercase text-white">
                  {tournament}
                </p>
              ) : null}
            </header>

            <div className="ms-fs-teams">
              <TeamInningsBlock team={match.teamA} teamIndex={0} />
              <TeamInningsBlock team={match.teamB} teamIndex={1} />
            </div>

            {result ? (
              <div className="ms-fs-result">
                <span className="ctrl-t-ms-fs-result uppercase">{result}</span>
              </div>
            ) : null}
          </div>

          <aside className="ms-fs-logos" aria-label="Teams">
            <TeamLogoFrame team={match.teamA} />
            <div className="ms-fs-vs" aria-hidden="true">
              <span className="ctrl-t-ms-fs-vs uppercase text-white">VS</span>
            </div>
            <TeamLogoFrame team={match.teamB} />
          </aside>
        </div>
      </div>
    </div>
  );
}

/** @param {{ theme?: string }} team */
function panelClassForTeam(team) {
  return team?.theme === "bowler" ? "bg-bowler-panel" : "bg-panel-player";
}

function TeamInningsBlock({ team, teamIndex = 0 }) {
  const headBg = panelClassForTeam(team);
  const batters = Array.isArray(team.batters) ? team.batters : [];
  const bowlers = Array.isArray(team.bowlers) ? team.bowlers : [];
  const oversLabel = team.overs != null ? `${team.overs} OVERS` : "";
  const rowCount = Math.max(batters.length, bowlers.length, 1);
  const baseDelay = teamIndex * 220;

  return (
    <section className="ms-fs-innings">
      <div
        className={`ms-fs-team-head ms-fs-team-head-in ${headBg}`}
        style={{ "--ms-fs-delay": `${baseDelay}ms` }}
      >
        <span className="ctrl-t-ms-fs-team-name uppercase text-white">
          {team.name || team.code || ""}
        </span>
        {oversLabel ? (
          <span className="ctrl-t-ms-fs-overs uppercase text-white">
            {oversLabel}
          </span>
        ) : null}
        <span className="ctrl-t-ms-fs-score tabular-nums text-white">
          {team.score ?? "0-0"}
        </span>
      </div>

      <div className="ms-fs-players">
        {Array.from({ length: rowCount }, (_, index) => {
          const batter = batters[index];
          const bowler = bowlers[index];
          const mark = batter?.onStrike ? "*" : "";
          const rowDelay = baseDelay + 80 + index * 90;

          return (
            <div key={`row-${index}`} className="ms-fs-player-row">
              <div
                className={`ms-fs-batter-cell ${batter ? "ms-fs-cell-in" : ""}`}
                style={
                  batter ? { "--ms-fs-delay": `${rowDelay}ms` } : undefined
                }
              >
                {batter ? (
                  <>
                    <span className="ctrl-t-ms-fs-player uppercase text-white">
                      {batter.name ?? ""}
                      {mark ? (
                        <span className="ms-fs-strike">{mark}</span>
                      ) : null}
                    </span>
                    <span className="ctrl-t-ms-fs-runs tabular-nums text-white">
                      {batter.runs ?? 0}
                    </span>
                    <span className="ctrl-t-ms-fs-balls tabular-nums text-white">
                      {batter.balls ?? 0}
                    </span>
                  </>
                ) : (
                  <span className="ms-fs-cell-spacer" aria-hidden="true" />
                )}
              </div>

              <div
                className={`ms-fs-bowler-cell ${
                  bowler ? "ms-fs-cell-in ms-fs-cell-in--right" : ""
                }`}
                style={
                  bowler
                    ? { "--ms-fs-delay": `${rowDelay + 40}ms` }
                    : undefined
                }
              >
                {bowler ? (
                  <>
                    <span className="ctrl-t-ms-fs-player uppercase text-white">
                      {bowler.name ?? ""}
                    </span>
                    <span className="ctrl-t-ms-fs-figures tabular-nums text-white">
                      {bowler.wickets ?? 0}-{bowler.runs ?? 0}
                    </span>
                    <span className="ctrl-t-ms-fs-bowl-overs tabular-nums text-white">
                      {bowler.overs ?? "0.0"}
                    </span>
                  </>
                ) : (
                  <span className="ms-fs-cell-spacer" aria-hidden="true" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function TeamLogoFrame({ team }) {
  const frameBg = panelClassForTeam(team);
  const label = team.name || team.code || "";

  return (
    <div className={`ms-fs-logo-frame ${frameBg}`}>
      {team.logoUrl ? (
        <img src={team.logoUrl} alt={label} className="ms-fs-logo-img" />
      ) : (
        <span className="ctrl-t-ms-fs-logo-fallback uppercase text-white">
          {team.code || "?"}
        </span>
      )}
    </div>
  );
}
