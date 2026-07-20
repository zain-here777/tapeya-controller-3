import React from "react";
import TeamScore from "../components/TeamScore";
import FallOfWicketsRow from "../components/FallOfWicketsRow";
import Divider from "./Divider";
import { mergeControllerConfig } from "../config/mergeControllerConfig.js";

/**
 * FOW lower third — team left, title right, wicket stacks centered on the full bar.
 */
export default function FowLowerThird({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match?.teamA) return null;

  mergeControllerConfig(baseConfig, configOverride);

  const wickets = match.fallOfWickets || [];
  const title = match.fowTitle || "Fall of Wickets";

  return (
    <div className="controller-scaled relative w-full shrink-0 overflow-hidden font-controller select-none">
      <div className="relative flex h-bar w-full items-stretch bg-panel-player">
        {/* Centered on the full bar width (team + title sit above in z-order) */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
          <FallOfWicketsRow wickets={wickets} showTitle={false} />
        </div>

        <div className="relative z-10 flex h-full shrink-0 items-center ctrl-pl-20">
          <TeamScore
            team={{ ...match.teamA, theme: match.teamA.theme || "gold" }}
          />
          <Divider />
        </div>

        <div className="relative z-10 ml-auto flex h-full shrink-0 items-center ctrl-pr-48">
          <span className="ctrl-t-fow-title ctrl-tracking whitespace-nowrap text-white">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}
