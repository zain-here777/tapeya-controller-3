import React from "react";

/**
 * ECB-style stinger → dock: wipe plate, mega-type pass, settle above lower third (Theme 4 FST Four).
 *
 * @param {Object} props
 * @param {string} props.label
 */
export default function FourStingerOverlay({ label = "FOUR" }) {
  const text = String(label || "FOUR").toUpperCase();
  if (!text) return null;

  return (
    <div className="t4-fst-four-stinger" aria-live="polite">
      <div className="t4-fst-four-plate-clip" aria-hidden="true">
        <div className="t4-fst-four-plate" />
      </div>
      <div className="t4-fst-four-morph" aria-hidden="false">
        <span className="t4-fst-four-morph-text">{text}</span>
      </div>
    </div>
  );
}
