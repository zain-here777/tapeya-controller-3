import { createIdentityMatch } from "../../data/matchIdentity.js";

/** Sample data for Theme 5 Next Match full-screen controller. */
const nextMatchSample = {
  ...createIdentityMatch({
    venue: "LIVE FROM OLD TRAFFORD",
  }),
  statusLabel: "NEXT MATCH",
};

export default nextMatchSample;
