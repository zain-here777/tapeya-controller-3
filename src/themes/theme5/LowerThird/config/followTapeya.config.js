import { createLowerThirdConfig } from "./shared.config.js";
import { DEFAULT_TAPEYA_LOGO_URL } from "../components/tapeya/TapeyaLogo.jsx";

/**
 * FollowTapeya — isolated config.
 * Tapeya logo + follow CTA on batting-side team color.
 */
export const followTapeyaConfig = createLowerThirdConfig({
  id: "follow-tapeya",
  defaultTeamColorKey: "teamA",
  fallbackHeadline: "FOR BALL BY BALL UPDATES FOLLOW",
  fallbackSite: "tapeya.com",
  defaultTapeyaLogoUrl: DEFAULT_TAPEYA_LOGO_URL,
});
