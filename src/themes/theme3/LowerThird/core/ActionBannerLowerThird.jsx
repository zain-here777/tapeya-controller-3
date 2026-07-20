import React from "react";
import { mergeControllerConfig } from "../config/mergeControllerConfig.js";

const ANIMATION_DELAYS = ["0ms", "240ms", "480ms", "720ms"];

/**
 * Shared action banner — four balanced labels with chromatic text-shadow animation.
 * Full-bleed bar flush to the bottom, same height as Default (h-bar).
 * Used by Four, Six, Wide, Out, etc.
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
  mergeControllerConfig(baseConfig, configOverride);

  const labels = match?.labels?.length
    ? match.labels
    : [fallbackLabel, fallbackLabel, fallbackLabel, fallbackLabel];

  const isCompact = labels.some((label) => String(label).length > 8);
  const labelClass = isCompact ? "ctrl-t-four-label-sm" : "ctrl-t-four-label";

  return (
    <div className="controller-scaled relative w-full shrink-0 overflow-hidden font-controller select-none">
      <div className="relative flex h-bar w-full items-center overflow-hidden bg-panel-player">
        <div className="grid h-full w-full grid-cols-4 items-center">
          {labels.slice(0, 4).map((label, index) => (
            <div
              key={`${label}-${index}`}
              className="flex h-full min-w-0 items-center justify-center overflow-hidden px-[calc(8px*var(--cs))]"
            >
              <span
                className={`${labelClass} animate-action-text-shadow motion-reduce:animate-none inline-block text-center uppercase leading-none text-white hover:[animation-play-state:paused]`}
                style={{ animationDelay: ANIMATION_DELAYS[index] ?? "0ms" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
