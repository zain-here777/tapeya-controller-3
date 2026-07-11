import React, { useState } from "react";
import playerPlaceholder from "../../player-placeholder-theme1.png";
import { useAvatarConfig } from "./AvatarPopContext.jsx";
import { hasAvatarPop } from "../../theme/avatarConfig.js";

const sizeClassMap = {
  sm: "h-avatar-sm w-avatar-sm",
  md: "h-avatar-md w-avatar-md",
  lg: "h-avatar-lg w-avatar-lg",
};

/**
 * Broadcast player cutout — pops above the bar when the controller enables it.
 */
export default function PlayerAvatar({
  photoUrl,
  name = "",
  size = "lg",
  className = "",
}) {
  const [errored, setErrored] = useState(false);
  const avatar = useAvatarConfig();
  const popsOut = hasAvatarPop(avatar);

  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`player-avatar relative shrink-0 ${popsOut ? "player-avatar-pop overflow-visible" : `overflow-hidden ${sizeClassMap[size]}`} ${className}`}
    >
      {!errored ? (
        <img
          src={photoUrl || playerPlaceholder}
          alt={name}
          onError={() => setErrored(true)}
          className={
            popsOut
              ? "player-avatar-pop-img"
              : "h-full w-full origin-bottom scale-[1.05] object-contain object-bottom"
          }
        />
      ) : (
        <div className="ctrl-t-avatar-fallback ctrl-pb-8 flex h-full w-full items-end justify-center font-medium text-white">
          {initials || "?"}
        </div>
      )}
    </div>
  );
}
