import React from "react";
import AtStageLowerThird from "../../LowerThird/core/AtStageLowerThird.jsx";
import { atStageConfig } from "../../LowerThird/config/atStage.config.js";

/**
 * Theme 4 AtStage lower-third controller.
 * Default shell with At This Stage comparison on the right panel.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
 */
export default function AtStage({ match, config }) {
  return (
    <AtStageLowerThird match={match} baseConfig={atStageConfig} config={config} />
  );
}
