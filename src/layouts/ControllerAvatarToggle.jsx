import React from "react";
import { useAvatarVisibility } from "../LowerThird/core/AvatarVisibilityContext.jsx";

/**
 * Global player-avatar visibility switch for all lower-third controllers.
 */
export default function ControllerAvatarToggle() {
  const { showAvatars, setShowAvatars } = useAvatarVisibility();

  return (
    <div className="flex select-none items-center gap-2.5 rounded border border-white/15 bg-black/70 px-3 py-1.5 font-sans text-[13px] text-white/90 backdrop-blur-sm">
      <span className="whitespace-nowrap">Player avatars</span>
      <button
        type="button"
        role="switch"
        aria-checked={showAvatars}
        aria-label="Toggle player avatars"
        onClick={() => setShowAvatars(!showAvatars)}
        className={`flex h-5 w-9 shrink-0 items-center overflow-hidden rounded-full p-0.5 transition-colors duration-300 ${
          showAvatars ? "bg-emerald-500" : "bg-white/30"
        }`}
      >
        <span
          className={`h-3.5 w-3.5 shrink-0 rounded-full bg-white shadow-sm transition-transform duration-300 ${
            showAvatars ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
