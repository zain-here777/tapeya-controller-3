import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import {
  T4_ACTION_INK,
  resolveActionPlateColor,
} from "../../config/actionAccents.js";
import { actionPlateBroadcastPalette } from "../utils/teamBroadcastPalette.js";
import ActionBannerBroadcast from "../components/four/ActionBannerBroadcast.jsx";
import ActionBannerConfetti from "../components/four/ActionBannerConfetti.jsx";
import ActionBannerLabel from "../components/four/ActionBannerLabel.jsx";

/**
 * Theme 4 shared action banner — broadcast celebration layout on FST plate color.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {string[]} [props.match.labels]
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
  const resolvedFallback =
    config.fallbackLabel ?? fallbackLabel ?? "Four";
  const layout = config.actionBannerLayout ?? "broadcast";

  const labels = match?.labels?.length
    ? match.labels
    : [resolvedFallback, resolvedFallback, resolvedFallback, resolvedFallback];

  const plate =
    match?.actionAccent ??
    config.actionAccent ??
    resolveActionPlateColor(config.actionPlateKey ?? config.id);
  const ink = match?.actionInk ?? config.actionInk ?? T4_ACTION_INK;
  const broadcastVars = actionPlateBroadcastPalette(plate, ink);

  const primaryLabel = labels[0] ?? resolvedFallback;
  const showConfetti = Boolean(config.showConfetti);
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
            showConfetti={showConfetti}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full shrink-0 select-none font-montserrat">
      <div
        className="relative flex h-[var(--t4-bar-height)] w-full items-center overflow-hidden shadow-[0_-2px_10px_rgba(0,0,0,0.12)]"
        style={{ backgroundColor: plate, color: ink }}
      >
        {showConfetti ? <ActionBannerConfetti /> : null}

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
