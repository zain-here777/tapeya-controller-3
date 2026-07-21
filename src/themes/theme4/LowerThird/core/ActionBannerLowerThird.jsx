import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import { resolveTeamColor } from "../../config/teamColors.js";
import { teamBroadcastPalette } from "../utils/teamBroadcastPalette.js";
import ActionBannerBroadcast from "../components/four/ActionBannerBroadcast.jsx";
import ActionBannerConfetti from "../components/four/ActionBannerConfetti.jsx";
import ActionBannerLabel from "../components/four/ActionBannerLabel.jsx";

/**
 * Theme 4 shared action banner — broadcast cricket layout or classic 4-column grid.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {string[]} [props.match.labels]
 * @param {string} [props.match.colorKey]
 * @param {Object} [props.match.team]
 * @param {string} [props.fallbackLabel]
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function ActionBannerLowerThird({
  match,
  baseConfig,
  config: configOverride = {},
  fallbackLabel = "Four",
}) {
  const config = mergeConfig(baseConfig, configOverride);
  const colorFallback = config.defaultTeamColorKey ?? "teamA";
  const secondaryFallback = config.defaultBowlingColorKey ?? "teamB";
  const resolvedFallback =
    config.fallbackLabel ?? fallbackLabel ?? "Four";
  const layout = config.actionBannerLayout ?? "grid";

  const labels = match?.labels?.length
    ? match.labels
    : [resolvedFallback, resolvedFallback, resolvedFallback, resolvedFallback];

  const primaryColor = resolveTeamColor(
    match?.colorKey ?? match?.teamA?.colorKey,
    colorFallback
  );
  const secondaryColor = resolveTeamColor(
    match?.secondaryColorKey ?? match?.teamB?.colorKey,
    secondaryFallback
  );
  const broadcastVars = teamBroadcastPalette(primaryColor, secondaryColor);
  const primaryLabel = labels[0] ?? resolvedFallback;
  const isCompact =
    layout === "broadcast"
      ? String(primaryLabel).length > 6
      : labels.some((label) => String(label).length > 8);

  if (layout === "broadcast") {
    return (
      <div className="w-full shrink-0 select-none font-montserrat">
        <div className="relative flex h-[var(--t4-bar-height)] w-full items-stretch overflow-visible shadow-[0_-2px_10px_rgba(0,0,0,0.25)]">
          <ActionBannerBroadcast
            label={primaryLabel}
            broadcastVars={broadcastVars}
            compact={isCompact}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full shrink-0 select-none font-montserrat">
      <div
        className="relative flex h-[var(--t4-bar-height)] w-full items-center overflow-hidden shadow-[0_-2px_10px_rgba(0,0,0,0.12)]"
        style={{ backgroundColor: primaryColor }}
      >
        <ActionBannerConfetti />

        <div className="relative z-[2] grid h-full w-full grid-cols-4 items-center">
          {labels.slice(0, 4).map((label, index) => (
            <ActionBannerLabel
              key={`${label}-${index}`}
              label={label}
              index={index}
              compact={isCompact}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
