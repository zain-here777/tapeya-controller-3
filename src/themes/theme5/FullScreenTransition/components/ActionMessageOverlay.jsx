import React from "react";
import ActionStingerOverlay from "./ActionStingerOverlay.jsx";
import { actionPlateBroadcastPalette } from "../../LowerThird/utils/teamBroadcastPalette.js";

/**
 * Full-screen action overlay — wipe stinger → dock badge (Theme 5).
 *
 * @param {Object} props
 * @param {string} props.label
 * @param {string} [props.accent]
 * @param {string} [props.variant]
 */
export default function ActionMessageOverlay({
  label,
  accent = "#98b9d9",
  variant = "four",
}) {
  if (!label) return null;

  const safeVariant = variant || "four";
  const motionVars = actionPlateBroadcastPalette(accent);

  return (
    <div
      className={`t5-fst-action t5-fst-action--stinger t5-fst-action--${safeVariant}`}
      style={{
        "--t5-fst-accent": accent,
        "--t5-fst-stinger-plate": accent,
        ...motionVars,
      }}
      aria-live="polite"
    >
      <ActionStingerOverlay label={label} variant={safeVariant} />
    </div>
  );
}
