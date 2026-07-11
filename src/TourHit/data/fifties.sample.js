import { tourHitMatchBase } from "./matchBase.sample.js";

/** Sample match data for Tour-Hit Fifties only. */
const tourHitFiftiesSample = {
  ...tourHitMatchBase,
  tourHit: {
    eyebrow: "TOURNAMENT",
    title: "FIFTIES",
    value: 1,
  },
};

export default tourHitFiftiesSample;
