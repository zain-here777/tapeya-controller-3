import { createLowerThirdConfig } from "./shared.config.js";

/**
 * DownloadTapeya — isolated config.
 * Same UI as FollowTapeya; do not import other controller configs.
 */
export const downloadTapeyaConfig = createLowerThirdConfig({
  id: "download-tapeya",
});
