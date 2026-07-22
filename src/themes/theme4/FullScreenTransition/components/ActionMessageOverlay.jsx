import React from "react";

/**
 * Full-screen action overlay — velocity burst + typographic reveal (Theme 4).
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
  const useBlockLabel = text.length > 8 || text.includes(" ");
  const safeVariant = variant || "four";

  return (
    <div
      className={`t4-fst-action t4-fst-action--${safeVariant}`}
      style={{ "--t4-fst-accent": accent }}
      aria-live="polite"
    >
      <div className="t4-fst-stack">
        <div className="t4-fst-burst" aria-hidden="true">
          <span className="t4-fst-ring t4-fst-ring--1" />
          <span className="t4-fst-ring t4-fst-ring--2" />
          <span className="t4-fst-ring t4-fst-ring--3" />
          <span className="t4-fst-streak t4-fst-streak--a" />
          <span className="t4-fst-streak t4-fst-streak--b" />
        </div>

        <div className="t4-fst-copy">
          {useBlockLabel ? (
            <p
              className={`t4-fst-label uppercase${
                text.length > 8
                  ? " t4-fst-label--compact"
                  : " t4-fst-label--phrase"
              }`}
            >
              {text}
            </p>
          ) : (
            <p className="t4-fst-label t4-fst-label--chars uppercase" aria-label={text}>
              {text.split("").map((char, index) => (
                <span
                  key={`${char}-${index}`}
                  className="t4-fst-label-char"
                  style={{ "--t4-fst-char-i": index }}
                >
                  {char}
                </span>
              ))}
            </p>
          )}
          <span className="t4-fst-underline" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
