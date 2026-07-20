import React from "react";
import ScorecardLowerThird from "../../LowerThird/core/ScorecardLowerThird.jsx";
import { mergeControllerConfig } from "../../LowerThird/config/mergeControllerConfig.js";
import ActionMessageOverlay from "../components/ActionMessageOverlay.jsx";

/**
 * Shared Full Screen Transition shell.
 * Default-identical scorecard at the bottom + centered animated action message.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
 */
export default function FullScreenTransitionController({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match) return null;

  const config = mergeControllerConfig(baseConfig, configOverride);
  const actionLabel = match.actionLabel ?? config.actionLabel ?? "";
  const actionAccent = match.actionAccent ?? config.actionAccent;

  return (
    <div className="fst-page controller-scaled font-controller select-none">
      <ActionMessageOverlay label={actionLabel} accent={actionAccent} />

      <div className="fst-scorecard">
        <ScorecardLowerThird
          match={match}
          baseConfig={baseConfig}
          config={configOverride}
        />
      </div>
    </div>
  );
}
