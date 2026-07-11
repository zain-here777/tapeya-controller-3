import React from "react";
import PlayerCardRow from "./PlayerCardRow";
import { useAvatarVisibility } from "../core/AvatarVisibilityContext.jsx";
import batIcon from "../../cricket-bat-1.png";

function BatIcon() {
  return (
    <img
      src={batIcon}
      alt=""
      aria-hidden="true"
      className="ctrl-icon-22 shrink-0 object-contain"
    />
  );
}

/**
 * At-crease batter — photo, on-strike icon, name, runs/balls.
 * With avatars: name stacked above score.
 * Without avatars: name and score inline with a fixed gap, centered in the column.
 * Striker bat is absolutely positioned left of the name so both player
 * columns keep identical name/score spacing.
 */
export default function BatterCard({ batter }) {
  if (!batter) return null;
  const { name, photoUrl, runs = 0, balls = 0, onStrike } = batter;
  const { showAvatars } = useAvatarVisibility();

  const score = (
    <div className="ctrl-gap-4 flex shrink-0 items-baseline tabular-nums text-white">
      <span key={runs} className="ctrl-t-batter-runs animate-score-pop">
        {runs}
      </span>
      <span key={balls} className="ctrl-t-batter-balls font-medium text-white">
        ({balls})
      </span>
    </div>
  );

  const nameBlock = (
    <div className="relative min-w-0 max-w-full leading-tight">
      {onStrike ? (
        <span
          className="ctrl-icon-22 pointer-events-none absolute top-1/2 right-full flex -translate-y-1/2 items-center justify-center"
          style={{ marginRight: "calc(6px * var(--cs))" }}
          aria-hidden="true"
        >
          <BatIcon />
        </span>
      ) : null}
      <span className="ctrl-t-batter-name ctrl-tracking block min-w-0 truncate text-white">
        {name}
      </span>
    </div>
  );

  return (
    <PlayerCardRow
      cardClassName="ctrl-batter-card"
      fallbackClassName="ctrl-gap-26 ctrl-px-20"
      textClassName="justify-center"
      photoUrl={photoUrl}
      name={name}
    >
      {showAvatars ? (
        <div className="relative flex w-max max-w-full min-w-0 flex-col leading-none">
          {nameBlock}
          {score}
        </div>
      ) : (
        <div className="ctrl-gap-64 flex w-max max-w-full min-w-0 items-baseline leading-none">
          {nameBlock}
          {score}
        </div>
      )}
    </PlayerCardRow>
  );
}
