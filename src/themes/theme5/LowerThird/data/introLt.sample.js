import { T4_TOURNAMENT, createIdentityMatch } from "../../data/matchIdentity.js";

/** Sample data for the Theme 5 IntroLT controller only. */
const introLtSample = {
  ...createIdentityMatch({
    teamA: { name: "England" },
    teamB: { name: "New Zealand" },
  }),
  tournament: T4_TOURNAMENT,
};

export default introLtSample;
