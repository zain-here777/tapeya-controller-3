import React from "react";

/**
 * Headline + site rows for Follow / Download Tapeya promo bars.
 *
 * @param {Object} props
 * @param {string} props.headline
 * @param {string} [props.site]
 * @param {boolean} [props.siteLowercase]
 */
export default function TapeyaPromoCopy({
  headline,
  site,
  siteLowercase = false,
}) {
  return (
    <div className="relative z-[1] flex min-w-0 flex-1 flex-col">
      <div className="flex h-[var(--t4-bar-row-short)] shrink-0 items-center px-[calc(28px*var(--t4-scale))]">
        <span className="text-[calc(22px*var(--t4-scale))] font-bold uppercase leading-tight tracking-[calc(2px*var(--t4-scale))] text-white">
          {headline}
        </span>
      </div>

      {site ? (
        <div className="flex h-[var(--t4-bar-row-tall)] min-h-0 shrink-0 items-center border-t border-[var(--t4-divider)] px-[calc(28px*var(--t4-scale))]">
          <span
            className={`text-[calc(32px*var(--t4-scale))] font-bold leading-none tracking-[calc(1px*var(--t4-scale))] text-white ${
              siteLowercase ? "lowercase" : ""
            }`}
          >
            {site}
          </span>
        </div>
      ) : null}
    </div>
  );
}
