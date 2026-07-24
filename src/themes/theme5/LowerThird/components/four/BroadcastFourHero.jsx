import React from "react";

/** Max staggered letter slots supported by Theme 5 broadcast CSS. */
export const BROADCAST_ACTION_MAX_LETTERS = 16;

/**
 * Oversized action word — letters reveal sequentially, then scale down via CSS.
 *
 * @param {Object} props
 * @param {string} props.label
 * @param {string} props.textSizeClass
 */
export default function BroadcastFourHero({ label, textSizeClass }) {
  const letters = Array.from(String(label || "FOUR").toUpperCase()).slice(
    0,
    BROADCAST_ACTION_MAX_LETTERS
  );

  return (
    <div className="t5-broadcast-four-hero motion-reduce:hidden" aria-hidden="true">
      <span className={`t5-broadcast-four-word ${textSizeClass}`}>
        {letters.map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            className={`t5-broadcast-four-letter t5-broadcast-four-letter--${index}`}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </span>
    </div>
  );
}
