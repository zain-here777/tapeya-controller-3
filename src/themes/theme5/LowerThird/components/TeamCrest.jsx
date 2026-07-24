import React from "react";

const CREST_THEMES = {
  gold: "t5-crest-gold",
  red: "t5-crest-red",
};

/**
 * Theme 5 team crest — isolated from theme 3 TeamCrest.
 */
export default function TeamCrest({
  code,
  name,
  logoUrl,
  theme = "gold",
  size = "md",
  className = "",
}) {
  const initials = (code || name || "?").slice(0, 3).toUpperCase();
  const crestClass = CREST_THEMES[theme] || CREST_THEMES.gold;
  const sizeClass =
    size === "sm" ? "t5-crest-sm" : size === "lg" ? "t5-crest-lg" : "t5-crest-md";
  const extra = className.trim();

  if (logoUrl) {
    return (
      <img
        src={logoUrl}
        alt={name || code || "Team"}
        className={`t5-crest t5-crest-img ${sizeClass}${extra ? ` ${extra}` : ""} object-contain`}
      />
    );
  }

  return (
    <div className={`t5-crest ${crestClass} ${sizeClass}${extra ? ` ${extra}` : ""}`} aria-hidden>
      {initials}
    </div>
  );
}
