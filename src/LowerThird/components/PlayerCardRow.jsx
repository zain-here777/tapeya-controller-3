import React from "react";
import PlayerAvatar from "../core/PlayerAvatar";
import { useAvatarConfig } from "../core/AvatarPopContext.jsx";
import { useAvatarVisibility } from "../core/AvatarVisibilityContext.jsx";
import { hasAvatarPop } from "../../theme/avatarConfig.js";

/**
 * Shared row layout: avatar slot + broadcast text block.
 * Used by batter and bowler player cards.
 *
 * - `noAvatarAlign="center"` (default): avatar stays left; stats are centered
 *   in the remaining space (or full column when avatars are off) — batters.
 * - `noAvatarAlign="start"`: left-aligned fill layout — bowler panel.
 */
export default function PlayerCardRow({
  cardClassName,
  fallbackClassName = "",
  textClassName = "",
  noAvatarAlign = "center",
  photoUrl,
  name,
  children,
}) {
  const avatar = useAvatarConfig();
  const { showAvatars } = useAvatarVisibility();
  const popsOut = showAvatars && hasAvatarPop(avatar);
  const alignStart = noAvatarAlign === "start";

  if (alignStart) {
    const rowClassName = [
      cardClassName,
      "flex h-full w-full min-w-0 items-center",
      showAvatars && !popsOut ? fallbackClassName : "",
      !showAvatars ? "ctrl-pl-28 ctrl-pr-12 justify-start" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        className={rowClassName}
        style={
          popsOut
            ? {
                gap: "var(--avatar-gap)",
                paddingLeft: "var(--avatar-pad-start)",
                paddingRight: "var(--avatar-pad-end)",
              }
            : undefined
        }
      >
        {showAvatars ? (
          <div
            className="ctrl-avatar-slot shrink-0"
            style={
              !popsOut
                ? { width: "var(--avatar-width)", height: "var(--avatar-bar-height)" }
                : undefined
            }
          >
            <PlayerAvatar photoUrl={photoUrl} name={name} size="lg" />
          </div>
        ) : null}

        <div
          className={[
            "flex min-w-0 flex-1 flex-col justify-center overflow-visible",
            textClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {children}
        </div>
      </div>
    );
  }

  // Batter columns: avatar fixed on the left; stats centered in remaining space
  return (
    <div
      className={[
        cardClassName,
        "flex h-full w-full min-w-0 items-center",
        showAvatars && !popsOut ? fallbackClassName : "",
        !showAvatars ? "ctrl-px-28" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={
        popsOut
          ? {
              gap: "var(--avatar-gap)",
              paddingLeft: "var(--avatar-pad-start)",
              paddingRight: "var(--avatar-pad-end)",
            }
          : undefined
      }
    >
      {showAvatars ? (
        <div
          className="ctrl-avatar-slot shrink-0"
          style={
            !popsOut
              ? { width: "var(--avatar-width)", height: "var(--avatar-bar-height)" }
              : undefined
          }
        >
          <PlayerAvatar photoUrl={photoUrl} name={name} size="lg" />
        </div>
      ) : null}

      <div
        className={[
          "flex min-w-0 flex-1 flex-col items-center justify-center overflow-visible",
          textClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </div>
    </div>
  );
}
