import React from "react";

/**
 * ECB-style stinger → dock: wipe plate, mega-type pass, settle above lower third.
 * Shared by all Theme 4 Full Screen Transition controllers.
 *
 * @param {Object} props
 * @param {string} props.label
 * @param {string} [props.variant]
 */
export default function ActionStingerOverlay({ label = "FOUR", variant = "four" }) {
  const text = String(label || "FOUR").toUpperCase();
  if (!text) return null;

  const length = text.length;
  const sizeClass =
    length > 14 || text.includes(" ") && length > 8
      ? " t4-fst-stinger--long"
      : length > 6 || text.includes(" ")
        ? " t4-fst-stinger--phrase"
        : "";

  const safeVariant = variant || "four";

  return (
    <div
      className={`t4-fst-stinger t4-fst-stinger--${safeVariant}${sizeClass}`}
      aria-live="polite"
    >
      <div className="t4-fst-stinger-plate-clip" aria-hidden="true">
        <div className="t4-fst-stinger-plate">
          <div className="t4-fst-stinger-plate-base motion-reduce:hidden" />
          <div className="t4-fst-stinger-plate-shift motion-reduce:hidden" />
          <div className="t4-fst-stinger-diagonal motion-reduce:hidden" />
          <div className="t4-fst-stinger-diagonal t4-fst-stinger-diagonal--2 motion-reduce:hidden" />
          <div className="t4-fst-stinger-diagonal t4-fst-stinger-diagonal--3 motion-reduce:hidden" />
          <div className="t4-fst-stinger-plate-shimmer motion-reduce:hidden" />
        </div>
      </div>
      <div className="t4-fst-stinger-morph">
        <span className="t4-fst-stinger-morph-text">{text}</span>
      </div>
    </div>
  );
}
