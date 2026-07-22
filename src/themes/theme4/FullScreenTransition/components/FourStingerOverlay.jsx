import React from "react";

/**
 * ECB-style chapter stinger — hard wipe plate + mega-type horizontal pass (Theme 4 FST Four).
 *
 * @param {Object} props
 * @param {string} props.label
 */
export default function FourStingerOverlay({ label = "FOUR" }) {
  const text = String(label || "FOUR").toUpperCase();
  if (!text) return null;

  return (
    <div className="t4-fst-four-stinger" aria-live="polite">
      <div className="t4-fst-four-plate" aria-hidden="true" />
      <p className="t4-fst-four-mega">{text}</p>
    </div>
  );
}
