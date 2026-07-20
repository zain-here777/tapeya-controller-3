import React from "react";
import TeamScore from "../components/TeamScore.jsx";
import BatterCard from "../components/BatterCard.jsx";
import StatBlock from "../components/StatBlock.jsx";
import BowlerPanel from "../components/BowlerPanel.jsx";
import { BOWLER_PANEL_WIDTH_PERCENT } from "../../config/layout.js";

/**
 * Theme 4 lower-third bar shell — fully isolated layout.
 */
export default function LowerThirdBar({
  match,
  config,
  rightPanel = null,
}) {
  const stats = match.stats?.length
    ? match.stats
    : match.stat
      ? [match.stat]
      : [];

  const bowlerPanelStyle = {
    width: `${config.bowlerPanelWidthPercent ?? BOWLER_PANEL_WIDTH_PERCENT}%`,
    maxWidth: config.bowlerPanelMaxWidth
      ? `${config.bowlerPanelMaxWidth}px`
      : undefined,
  };

  return (
    <div className="t4-controller-scaled">
      <div className="t4-bar">
        <div className={`t4-bar-section t4-bg-panel-primary`}>
          <TeamScore team={match.teamA} />
        </div>

        {(match.batters || []).map((batter) => (
          <div
            key={batter.id}
            className={`t4-bar-section t4-bar-divider ${config.columns?.playerBg || "t4-bg-panel-primary"}`}
          >
            <BatterCard batter={batter} />
          </div>
        ))}

        {stats.map((stat, index) => (
          <div
            key={`${stat.label}-${index}`}
            className={`t4-bar-section t4-bar-divider ${config.columns?.statBg || "t4-bg-panel-stat"}`}
          >
            <StatBlock stat={stat} />
          </div>
        ))}

        {config.showRightPanel !== false && (
          <div className="t4-bar-section t4-bowler-section" style={bowlerPanelStyle}>
            {rightPanel ?? (
              <BowlerPanel featuredPlayer={match.featuredPlayer} team={match.teamB} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
