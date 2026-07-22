import React from "react";

const ANIMATION_DELAYS = ["0ms", "240ms", "480ms", "720ms"];

/**
 * One action-banner label cell — Theme 4 type + staggered pulse.
 *
 * @param {Object} props
 * @param {string} props.label
 * @param {number} props.index
 * @param {boolean} props.compact
 */
export default function ActionBannerLabel({ label, index, compact }) {
  const textSize = compact
    ? "text-[calc(36px*var(--t4-scale))] tracking-[calc(1px*var(--t4-scale))]"
    : "text-[calc(72px*var(--t4-scale))] tracking-[calc(2px*var(--t4-scale))]";

  return (
    <div className="relative z-[2] flex h-full min-w-0 items-center justify-center overflow-hidden px-[calc(8px*var(--t4-scale))]">
      <span
        className={`t4-action-banner-label motion-reduce:animate-none inline-block text-center font-bold uppercase leading-none ${textSize}`}
        style={{
          animationDelay: ANIMATION_DELAYS[index] ?? "0ms",
          color: "currentColor",
        }}
      >
        {label}
      </span>
    </div>
  );
}
