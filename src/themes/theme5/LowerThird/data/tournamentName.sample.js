import {
  T4_TOURNAMENT,
  T4_VENUE,
  createIdentityMatch,
} from "../../data/matchIdentity.js";

/** Sample data for the Theme 5 TournamentName controller only. */
const tournamentNameSample = {
  ...createIdentityMatch({
    teamA: { name: "England" },
    teamB: { name: "New Zealand" },
  }),
  tournament: T4_TOURNAMENT,
  venue: T4_VENUE,
};

export default tournamentNameSample;
