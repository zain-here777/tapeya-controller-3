import React from "react";
import TournamentNameLowerThird from "../../LowerThird/core/TournamentNameLowerThird.jsx";
import { tournamentNameConfig } from "../../LowerThird/config/tournamentName.config.js";

/**
 * Theme 5 TournamentName lower-third controller.
 * Crest | tournament title + venue | crest.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} [props.config]
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
