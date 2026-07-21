import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import { resolveTeamColor } from "../../config/teamColors.js";
import CompactLabelText from "../components/compact-label/CompactLabelText.jsx";

/**
 * Theme 4 compact label bar — MiniScorecard shell with text only.
 * Shared by Umpires, Scorers, and Commentators.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {string} [props.match.label]
 * @param {string} [props.match.colorKey]
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 * @param {string} [props.fallbackLabel]
 */
export default function CompactLabelLowerThird({
  match,
  baseConfig,
  config: configOverride = {},
  fallbackLabel = "Label",
}) {
  const config = mergeConfig(baseConfig, configOverride);
  const colorFallback = config.defaultTeamColorKey ?? "teamA";
  const backgroundColor = resolveTeamColor(match?.colorKey, colorFallback);
  const label =
    match?.label || config.fallbackLabel || fallbackLabel;

  return (
    <div className="w-full shrink-0 select-none font-montserrat">
      <div className="flex h-[var(--t4-bar-height)] w-full items-stretch">
        <div
          className="flex h-full shrink-0 items-center pl-[calc(20px*var(--t4-scale))] pr-[calc(48px*var(--t4-scale))] shadow-[0_-2px_10px_rgba(0,0,0,0.12)]"
          style={{ backgroundColor }}
        >
          <CompactLabelText label={label} />
        </div>
      </div>
    </div>
  );
}
