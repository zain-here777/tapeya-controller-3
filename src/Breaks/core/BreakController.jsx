import React from "react";
import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";
import BreakCenterBadge from "../components/BreakCenterBadge.jsx";
import BreakFabricBackground from "../components/BreakFabricBackground.jsx";
import BreakTeamCard from "../components/BreakTeamCard.jsx";

/**
 * Shared full-page Break shell.
 * Centered stack: tournament → venue → team vs team → status pill.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function BreakController({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match?.teamA || !match?.teamB) return null;

  const config = mergeControllerConfig(baseConfig, configOverride);
  const tournament = match.tournament ?? "";
  const venue = match.venue ?? "";
  const statusLabel = match.statusLabel ?? config.statusLabel ?? "BREAK";
  const showTimer = Boolean(match.showTimer ?? config.showTimer);
  const timerSeconds = match.timerSeconds ?? config.timerSeconds ?? 300;

  return (
    <div className="break-page controller-scaled font-controller select-none">
      <BreakFabricBackground />

      <div className="break-page-inner">
        <header className="break-header">
          {tournament ? (
            <h1 className="ctrl-t-break-tournament uppercase text-white">
              {tournament}
            </h1>
          ) : null}
          {venue ? (
            <p className="ctrl-t-break-venue uppercase text-white">{venue}</p>
          ) : null}
        </header>

        <div className="break-matchup">
          <BreakTeamCard team={match.teamA} />

          <BreakCenterBadge showTimer={showTimer} timerSeconds={timerSeconds} />

          <BreakTeamCard team={match.teamB} />
        </div>

        <div className="break-status-pill">
          <span className="ctrl-t-break-status uppercase text-white">
            {statusLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
