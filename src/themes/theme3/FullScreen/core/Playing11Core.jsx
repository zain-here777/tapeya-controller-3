import React from "react";
import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";
import BreakFabricBackground from "../../Breaks/components/BreakFabricBackground.jsx";
import Playing11TeamPanel from "../components/Playing11TeamPanel.jsx";

/**
 * Playing11 — full-screen Playing XI for both teams.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function Playing11Core({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match?.teamA || !match?.teamB) return null;

  const config = mergeControllerConfig(baseConfig, configOverride);
  const title = match.title ?? config.title ?? "PLAYING XI";
  const tournament = match.tournament ?? "";

  return (
    <div className="playing11-page controller-scaled font-controller select-none">
      <BreakFabricBackground />

      <div className="playing11-inner">
        <header className="playing11-header">
          {title ? (
            <h1 className="ctrl-t-playing11-title uppercase text-white">
              {title}
            </h1>
          ) : null}
          {tournament ? (
            <p className="ctrl-t-playing11-subtitle uppercase text-white/85">
              {tournament}
            </p>
          ) : null}
        </header>

        <div className="playing11-panels">
          <Playing11TeamPanel
            team={match.teamA}
            tone={match.teamA.theme === "bowler" ? "bowler" : "batsman"}
          />
          <Playing11TeamPanel
            team={match.teamB}
            tone={match.teamB.theme === "batsman" ? "batsman" : "bowler"}
          />
        </div>
      </div>
    </div>
  );
}
