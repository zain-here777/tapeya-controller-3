import React from "react";

/**
 * Full-screen centered action message — Theme 4 slate + kinetic type (not Theme 3 glow/ring).
 *
 * @param {Object} props
 * @param {string} props.label
 * @param {string} [props.accent]
 * @param {string} [props.variant]
 */
export default function ActionMessageOverlay({
  label,
  accent = "#0ea5e9",
  variant = "four",
}) {
  if (!label) return null;

  const text = String(label);
  const isCompact = text.length > 8;
  const safeVariant = variant || "four";

  return (
    <div
      className={`t4-fst-action t4-fst-action--${safeVariant}`}
      style={{ "--t4-fst-accent": accent }}
      aria-live="polite"
    >
      <div className="t4-fst-action-stage">
        <div className="t4-fst-action-slate" aria-hidden="true">
          <span className="t4-fst-action-slate-shine" />
        </div>

        <div className="t4-fst-action-frame" aria-hidden="true">
          <span className="t4-fst-action-corner t4-fst-action-corner--tl" />
          <span className="t4-fst-action-corner t4-fst-action-corner--tr" />
          <span className="t4-fst-action-corner t4-fst-action-corner--bl" />
          <span className="t4-fst-action-corner t4-fst-action-corner--br" />
          <span className="t4-fst-action-rail t4-fst-action-rail--left" />
          <span className="t4-fst-action-rail t4-fst-action-rail--right" />
        </div>

        <div className="t4-fst-action-accent-bar" aria-hidden="true" />

        {isCompact ? (
          <p className="t4-fst-action-label t4-fst-action-label--compact uppercase">
            {text}
          </p>
        ) : (
          <p className="t4-fst-action-label uppercase" aria-label={text}>
            {text.split("").map((char, index) => (
              <span
                key={`${char}-${index}`}
                className="t4-fst-action-char"
                style={{ "--t4-fst-char-i": index }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}
