import React from "react";
import ActionStingerOverlay from "./ActionStingerOverlay.jsx";

/**
 * Full-screen action overlay — wipe stinger → dock badge (Theme 4).
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

  return (
    <div
      className={`t4-fst-action t4-fst-action--stinger t4-fst-action--${safeVariant}`}
      style={{ "--t4-fst-accent": accent, "--t4-fst-stinger-plate": accent }}
      aria-live="polite"
    >
      <ActionStingerOverlay label={label} variant={safeVariant} />
    </div>
  );
}
