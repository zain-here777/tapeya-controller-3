import React from "react";

/**
 * Full-screen centered action message with Theme 4 transition motion.
 *
 * @param {Object} props
 * @param {string} props.label
 * @param {string} [props.accent]
 * @param {string} [props.variant] - Animation identity (four, six, out, …)
 */
export default function ActionMessageOverlay({
  label,
  accent = "#0ea5e9",
  variant = "four",
}) {
  if (!label) return null;

  const isCompact = String(label).length > 8;
  const safeVariant = variant || "four";

  return (
    <div
      className={`t4-fst-action t4-fst-action--${safeVariant}`}
      style={{ "--t4-fst-accent": accent }}
      aria-live="polite"
    >
      <div className="t4-fst-action-mesh" aria-hidden="true" />
      <div className="t4-fst-action-fx" aria-hidden="true">
        <span className="t4-fst-action-orbit" />
        <span className="t4-fst-action-beam t4-fst-action-beam--a" />
        <span className="t4-fst-action-beam t4-fst-action-beam--b" />
        <span className="t4-fst-action-ripple t4-fst-action-ripple--1" />
        <span className="t4-fst-action-ripple t4-fst-action-ripple--2" />
      </div>

      <p
        className={`t4-fst-action-label uppercase text-white${
          isCompact ? " t4-fst-action-label--compact" : ""
        }`}
      >
        {label}
      </p>
    </div>
  );
}
