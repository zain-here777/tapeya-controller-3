import React from "react";

/**
 * Compact Tour-Hit badge — logo, stacked labels, and a count value.
 *
 * @param {Object} props
 * @param {string} [props.logoText]
 * @param {string} [props.logoUrl]
 * @param {string} [props.eyebrow]
 * @param {string} [props.title]
 * @param {string|number} [props.value]
 * @param {string} [props.backgroundColor]
 */
export default function TourHitMiniScorecard({
  logoText = "",
  logoUrl,
  eyebrow = "TOURNAMENT",
  title = "",
  value,
  backgroundColor,
}) {
  return (
    <div
      className="t5-tour-hit-mini"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className="t5-tour-hit-mini-logo">
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={logoText || title || "Tournament"}
            className="h-full w-full object-contain"
          />
        ) : (
          <span className="t5-tour-hit-mini-logo-text">
            {logoText}
          </span>
        )}
      </div>

      <div className="t5-tour-hit-mini-copy">
        {eyebrow ? (
          <span className="t5-tour-hit-mini-eyebrow">{eyebrow}</span>
        ) : null}
        {title ? (
          <span className="t5-tour-hit-mini-title">{title}</span>
        ) : null}
      </div>

      <div className="t5-lt-vrule" aria-hidden="true" />

      <span className="t5-tour-hit-mini-value">{value ?? 0}</span>
    </div>
  );
}
