import { createLowerThirdConfig } from "./shared.config.js";
import { DEFAULT_TAPEYA_LOGO_URL } from "../components/tapeya/TapeyaLogo.jsx";

/**
 * DownloadTapeya — isolated config.
 * Same UI as FollowTapeya; download CTA copy.
 */
export const downloadTapeyaConfig = createLowerThirdConfig({
  id: "download-tapeya",
  defaultTeamColorKey: "teamA",
  fallbackHeadline: "FOR BALL BY BALL UPDATES DOWNLOAD",
  fallbackSite: "Tapeya App",
  defaultTapeyaLogoUrl: DEFAULT_TAPEYA_LOGO_URL,
});
