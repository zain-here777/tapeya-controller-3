import { AVATAR_CONFIG_B } from "../../theme/layout.js";
import { createLowerThirdConfig } from "./shared.config.js";

/**
 * MatchScorecardB — isolated config.
 * Only overrides that differ from {@link lowerThirdSharedConfig}.
 * Do not import other controller configs here.
 *
 * Adjust `avatar` to tune head pop-out:
 * - pop:      extra height above the bar (px)
 * - scale:    image size from bottom
 * - width:    avatar slot width (px)
 * - offsetX:  shift avatar left (−) or right (+) (px)
 * - gap:      space between avatar and player name (px)
 * - padStart: padding left of avatar, away from divider (px)
 * - padEnd:   padding right of avatar slot (px)
 */
export const matchScorecardBConfig = createLowerThirdConfig({
  id: "match-scorecard-b",
  avatar: { ...AVATAR_CONFIG_B },
  columns: {
    batterColumn: {
      foregroundBg: "",
      className:
        "col-batter-overflow relative flex h-full min-w-0 items-center overflow-visible",
    },
  },
});
