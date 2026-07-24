import React from "react";

/**
 * ECB-style stinger → dock: wipe plate, mega-type pass, settle above lower third.
 * Shared by all Theme 5 Full Screen Transition controllers.
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
      ? " t5-fst-stinger--long"
      : length > 6 || text.includes(" ")
        ? " t5-fst-stinger--phrase"
        : "";

  const safeVariant = variant || "four";

  return (
    <div
      className={`t5-fst-stinger t5-fst-stinger--${safeVariant}${sizeClass}`}
      aria-live="polite"
    >
      <div className="t5-fst-stinger-plate-clip" aria-hidden="true">
        <div className="t5-fst-stinger-plate t5-fst-stinger-plate--trail motion-reduce:hidden">
          <div className="t5-fst-stinger-plate-trail-fill" />
        </div>
        <div className="t5-fst-stinger-plate">
          <div className="t5-fst-stinger-plate-base motion-reduce:hidden" />
          <div className="t5-fst-stinger-plate-shift motion-reduce:hidden" />
          <div className="t5-fst-stinger-diagonal motion-reduce:hidden" />
          <div className="t5-fst-stinger-diagonal t5-fst-stinger-diagonal--2 motion-reduce:hidden" />
          <div className="t5-fst-stinger-diagonal t5-fst-stinger-diagonal--3 motion-reduce:hidden" />
          <div className="t5-fst-stinger-plate-shimmer motion-reduce:hidden" />
          <div className="t5-fst-stinger-plate-shimmer t5-fst-stinger-plate-shimmer--b motion-reduce:hidden" />
          <div className="t5-fst-stinger-plate-energy motion-reduce:hidden" />
          <div className="t5-fst-stinger-plate-grain motion-reduce:hidden" />
          <div className="t5-fst-stinger-plate-flash motion-reduce:hidden" />
          <div className="t5-fst-stinger-plate-wipe-edge motion-reduce:hidden" />
          <div className="t5-fst-stinger-plate-scan motion-reduce:hidden" />
          <div className="t5-fst-stinger-plate-vignette motion-reduce:hidden" />
        </div>
      </div>
      <div className="t5-fst-stinger-morph">
        <span className="t5-fst-stinger-morph-text">{text}</span>
      </div>
    </div>
  );
}
