import React from "react";

/**
 * Centered full-screen action message overlay (e.g. FOUR / SIX / OUT).
 * Accent color drives glow, ring, and text shadow for the action type.
 *
 * @param {Object} props
 * @param {string} props.label
 * @param {string} [props.accent] - CSS color for the action status
 */
export default function ActionMessageOverlay({ label, accent = "#3dcc4a" }) {
  if (!label) return null;

  const isCompact = String(label).length > 8;

  return (
    <div
      className="fst-action"
      style={{ "--fst-accent": accent }}
      aria-live="polite"
    >
      <div className="fst-action-glow" aria-hidden="true" />
      <div className="fst-action-ring" aria-hidden="true" />
      <span
        className={`fst-action-label uppercase text-white ${
          isCompact ? "ctrl-t-fst-action-sm" : "ctrl-t-fst-action"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
