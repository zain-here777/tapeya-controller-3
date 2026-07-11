import React from "react";
import { mergeControllerConfig } from "../config/mergeControllerConfig.js";

/**
 * Commentators lower third — same shell as Umpires; label text only.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function CommentatorsLowerThird({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  mergeControllerConfig(baseConfig, configOverride);

  const label = match?.label || "Commentators";

  return (
    <div className="controller-scaled relative w-full shrink-0 overflow-hidden font-controller select-none">
      <div className="flex h-bar w-full items-stretch">
        <div className="mini-scorecard-panel">
          <span className="ctrl-t-team-code ctrl-tracking-tight shrink-0 font-bold uppercase text-white">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
