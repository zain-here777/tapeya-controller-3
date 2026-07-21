import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import { resolveTeamColor } from "../../config/teamColors.js";
import LastWicketHeader from "../components/last-wicket/LastWicketHeader.jsx";
import LastWicketStats from "../components/last-wicket/LastWicketStats.jsx";

/**
 * Theme 4 Last Wicket lower third — short top / tall bottom; dismissed batter + breakdown.
 * Padding/margin match Match Summary / Intro LT (210px / 45px).
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function LastWicketLowerThird({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  const lastWicket = match?.lastWicket;
  if (!lastWicket) return null;

  const config = mergeConfig(baseConfig, configOverride);
  const colorFallback = config.defaultTeamColorKey ?? "teamA";
  const backgroundColor = resolveTeamColor(
    lastWicket.colorKey,
    colorFallback
  );

  const {
    name = "",
    howOut = "",
    runs = 0,
    balls = 0,
    stats = [],
  } = lastWicket;

  return (
    <div className="w-full shrink-0 select-none font-montserrat">
      <div className="mb-[calc(45px*var(--t4-scale))] w-full px-[calc(210px*var(--t4-scale))]">
        <div
          className="relative flex h-[var(--t4-bar-height)] w-full items-stretch overflow-hidden shadow-[0_-2px_10px_rgba(0,0,0,0.12)]"
          style={{ backgroundColor }}
        >
          <div className="relative z-[1] flex min-w-0 flex-1 flex-col">
            <LastWicketHeader
              name={name}
              howOut={howOut}
              runs={runs}
              balls={balls}
            />
            <LastWicketStats stats={stats} />
          </div>
        </div>
      </div>
    </div>
  );
}
