import React from "react";

/**
 * TeamCrest
 * Team logo badge for the scorecard.
 */
export default function TeamCrest({ code, name, logoUrl, theme = "gold", size = "md" }) {
  const sizeMap = {
    md: "ctrl-crest-md",
    lg: "ctrl-crest-lg",
  };

  const themeMap = {
    gold: {
      bg: "from-[#3a2f14] to-[#171106]",
      text: "text-amber-300",
      sub: "text-amber-200/70",
    },
    red: {
      bg: "from-[#4a0f1f] to-[#1c060d]",
      text: "text-rose-200",
      sub: "text-rose-200/70",
    },
  };
  const t = themeMap[theme] || themeMap.gold;

  return (
    <div className={`relative shrink-0 overflow-hidden ${sizeMap[size]}`}>
      {logoUrl ? (
        <img src={logoUrl} alt={name || code} className="h-full w-full object-contain" />
      ) : (
        <div className={`flex h-full w-full flex-col items-center justify-center bg-gradient-to-b ${t.bg}`}>
          <span className={`ctrl-t-crest font-black leading-none ${t.text}`}>
            {(code || name || "?").slice(0, 1)}
          </span>
          {name && (
            <span className={`ctrl-t-crest-sub ctrl-mt-2 font-bold uppercase tracking-[0.8px] ${t.sub}`}>
              {name}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
