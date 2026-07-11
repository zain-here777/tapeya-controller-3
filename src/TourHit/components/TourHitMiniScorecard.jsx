import React from "react";

/**
 * Compact Tour-Hit badge — logo, stacked labels, and a count value.
 * Structure only; uses project theme tokens (bg-panel-player, ctrl-t-*).
 *
 * @param {Object} props
 * @param {string} [props.logoText]
 * @param {string} [props.logoUrl]
 * @param {string} [props.eyebrow]
 * @param {string} [props.title]
 * @param {string|number} [props.value]
 */
export default function TourHitMiniScorecard({
  logoText = "",
  logoUrl,
  eyebrow = "TOURNAMENT",
  title = "",
  value,
}) {
  return (
    <div className="tour-hit-mini">
      <div className="tour-hit-mini-logo">
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={logoText || title || "Tournament"}
            className="h-full w-full object-contain"
          />
        ) : (
          <span className="ctrl-t-tour-hit-logo font-bold uppercase leading-none text-white">
            {logoText}
          </span>
        )}
      </div>

      <div className="ctrl-gap-4 flex min-w-0 flex-col justify-center leading-none">
        {eyebrow ? (
          <span className="ctrl-t-tour-hit-eyebrow uppercase text-white">
            {eyebrow}
          </span>
        ) : null}
        {title ? (
          <span className="ctrl-t-tour-hit-title uppercase text-white">
            {title}
          </span>
        ) : null}
      </div>

      <div
        className="ctrl-divider-w flex h-full shrink-0 items-center justify-center self-stretch"
        aria-hidden="true"
      >
        <div className="tour-hit-mini-divider h-[calc(56px*var(--cs))] w-px" />
      </div>

      <span className="ctrl-t-tour-hit-value shrink-0 tabular-nums text-white">
        {value ?? 0}
      </span>
    </div>
  );
}
