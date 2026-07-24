import React from "react";

export const DEFAULT_TAPEYA_LOGO_URL =
  "https://d1nmw2vhka3zp0.cloudfront.net/app/images/logos/tapeya-logo-white.svg";

/**
 * Tapeya wordmark / logo for promo lower thirds.
 *
 * @param {Object} props
 * @param {string} [props.src]
 */
export default function TapeyaLogo({ src = DEFAULT_TAPEYA_LOGO_URL }) {
  return (
    <div className="flex h-full w-[var(--t5-bar-height)] shrink-0 items-center justify-center px-[calc(16px*var(--t5-scale))] py-[calc(12px*var(--t5-scale))]">
      <img
        src={src}
        alt="Tapeya"
        className="h-full w-full object-contain"
      />
    </div>
  );
}
