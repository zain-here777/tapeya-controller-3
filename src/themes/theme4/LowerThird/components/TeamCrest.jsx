import React from "react";

const CREST_THEMES = {
  gold: "t4-crest-gold",
  red: "t4-crest-red",
};

/**
 * Theme 4 team crest — isolated from theme 3 TeamCrest.
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
    size === "sm" ? "t4-crest-sm" : size === "lg" ? "t4-crest-lg" : "t4-crest-md";
  const extra = className.trim();

  if (logoUrl) {
    return (
      <img
        src={logoUrl}
        alt={name || code || "Team"}
        className={`t4-crest t4-crest-img ${sizeClass}${extra ? ` ${extra}` : ""} object-contain`}
      />
    );
  }

  return (
    <div className={`t4-crest ${crestClass} ${sizeClass}${extra ? ` ${extra}` : ""}`} aria-hidden>
      {initials}
    </div>
  );
}
