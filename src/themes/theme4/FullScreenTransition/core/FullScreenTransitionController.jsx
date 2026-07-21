import React from "react";
import DefaultLowerThird from "../../LowerThird/core/DefaultLowerThird.jsx";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import ActionMessageOverlay from "../components/ActionMessageOverlay.jsx";

/**
 * Theme 4 Full Screen Transition — Default lower third + centered action overlay.
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

  const config = mergeConfig(baseConfig, configOverride);
  const actionLabel = match.actionLabel ?? config.actionLabel ?? "";
  const actionAccent = match.actionAccent ?? config.actionAccent;
  const animationVariant =
    match.animationVariant ??
    config.animationVariant ??
    config.id?.replace(/^fst-/, "") ??
    "four";

  return (
    <div className="t4-fst-page select-none font-montserrat">
      <ActionMessageOverlay
        label={actionLabel}
        accent={actionAccent}
        variant={animationVariant}
      />

      <div className="t4-fst-scorecard">
        <DefaultLowerThird
          match={match}
          baseConfig={baseConfig}
          config={configOverride}
        />
      </div>
    </div>
  );
}
