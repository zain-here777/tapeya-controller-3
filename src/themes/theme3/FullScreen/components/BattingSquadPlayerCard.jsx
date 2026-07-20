import React from "react";

/**
 * Single player card for squad grids — portrait | nameplate | role.
 *
 * @param {Object} props
 * @param {Object} props.player
 * @param {number} [props.index]
 * @param {string} [props.nameplateBg]
 */
export default function BattingSquadPlayerCard({
  player,
  index = 0,
  nameplateBg = "bg-panel-player",
}) {
  if (!player?.name) return null;

  const name = player.name;
  const role = player.role ?? "";
  const photoUrl = player.photoUrl ?? "";

  return (
    <article
      className="batting-squad-card batting-squad-card-in"
      style={{ "--batting-squad-delay": `${index * 70}ms` }}
    >
      <div className="batting-squad-portrait">
        {photoUrl ? (
          <img
            src={photoUrl}
            alt={name}
            className="batting-squad-portrait-img"
          />
        ) : (
          <span className="ctrl-t-batting-squad-fallback uppercase text-white/40">
            {name.slice(0, 1)}
          </span>
        )}
      </div>

      <div className={`batting-squad-nameplate ${nameplateBg}`}>
        <span className="ctrl-t-batting-squad-name uppercase text-white">
          {name}
        </span>
      </div>

      {role ? (
        <span className="ctrl-t-batting-squad-role uppercase text-white">
          {role}
        </span>
      ) : null}
    </article>
  );
}
