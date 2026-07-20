import React from "react";
import TournamentNameLowerThird from "../../LowerThird/core/TournamentNameLowerThird.jsx";
import { tournamentNameConfig } from "../../LowerThird/config/tournamentName.config.js";

/**
 * TournamentName — isolated lower-third controller.
 * IntroLT shell with tournament title + venue line.
 *
 * @param {Object} match
 * @param {Object} [config] - Runtime overrides merged onto tournamentNameConfig
 */
export default function TournamentName({ match, config }) {
  return (
    <TournamentNameLowerThird
      match={match}
      baseConfig={tournamentNameConfig}
      config={config}
    />
  );
}
