import { tourHitMatchBase } from "./matchBase.sample.js";

/** Sample match data for Tour-Hit Sixes only. */
const tourHitSixesSample = {
  ...tourHitMatchBase,
  tourHit: {
    eyebrow: "TOURNAMENT",
    title: "SIXES",
    value: 2,
  },
};

export default tourHitSixesSample;
