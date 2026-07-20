import { tourHitMatchBase } from "./matchBase.sample.js";

/** Sample match data for Tour-Hit Wickets only. */
const tourHitWicketsSample = {
  ...tourHitMatchBase,
  tourHit: {
    eyebrow: "TOURNAMENT",
    title: "WICKETS",
    value: 8,
  },
};

export default tourHitWicketsSample;
