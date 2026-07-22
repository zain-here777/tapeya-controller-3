import React from "react";

/**
 * Single player card for squad grids — portrait | nameplate | role.
 * Optional captain (C) / wicket-keeper (WK) badges on the portrait.
 *
 * @param {Object} props
 * @param {Object} props.player
 * @param {number} [props.index]
 * @param {Object} [props.panelStyle]
 */
export default function BattingSquadPlayerCard({
  player,
  index = 0,
  panelStyle = {},
}) {
  if (!player?.name) return null;

  const name = player.name;
  const role = player.role ?? "";
  const photoUrl = player.photoUrl ?? "";
  const isCaptain = Boolean(player.isCaptain || player.captain);
  const isWicketKeeper = Boolean(
    player.isWicketKeeper || player.wicketKeeper || player.isKeeper
  );
  const badges = [
    isCaptain ? "C" : null,
    isWicketKeeper ? "WK" : null,
  ].filter(Boolean);

  return (
    <article
      className="t4-squad-card flex w-[calc(220px*var(--t4-scale))] flex-col items-center gap-[calc(10px*var(--t4-scale))] motion-safe:animate-soft-in motion-reduce:animate-none"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div className="relative flex aspect-square w-full items-end justify-center overflow-hidden rounded-[calc(6px*var(--t4-scale))] border border-[var(--t4-divider)] bg-[#0b1220]">
        {badges.length ? (
          <div className="absolute right-[calc(8px*var(--t4-scale))] top-[calc(8px*var(--t4-scale))] z-[2] flex gap-[calc(4px*var(--t4-scale))]">
            {badges.map((badge) => (
              <span
                key={badge}
                className="flex min-w-[calc(28px*var(--t4-scale))] items-center justify-center rounded-[calc(4px*var(--t4-scale))] bg-[#f8fafc] px-[calc(6px*var(--t4-scale))] py-[calc(3px*var(--t4-scale))] text-[calc(11px*var(--t4-scale))] font-extrabold uppercase leading-none tracking-[calc(0.4px*var(--t4-scale))] text-[#0b1220] shadow-[0_calc(2px*var(--t4-scale))_calc(6px*var(--t4-scale))_rgba(0,0,0,0.35)]"
              >
                {badge}
              </span>
            ))}
          </div>
        ) : null}

        {photoUrl ? (
          <img
            src={photoUrl}
            alt={name}
            className="relative z-[1] h-[92%] w-auto max-w-[95%] object-contain object-bottom drop-shadow-[0_calc(6px*var(--t4-scale))_calc(14px*var(--t4-scale))_rgba(0,0,0,0.4)]"
          />
        ) : (
          <span className="text-[calc(64px*var(--t4-scale))] font-bold uppercase text-white/40">
            {name.slice(0, 1)}
          </span>
        )}
      </div>

      <div
        className="flex min-h-[calc(44px*var(--t4-scale))] w-full items-center justify-center rounded-[calc(8px*var(--t4-scale))] border border-[var(--t4-divider)] px-[calc(10px*var(--t4-scale))] py-[calc(10px*var(--t4-scale))] text-center"
        style={panelStyle}
      >
        <span className="text-[calc(15px*var(--t4-scale))] font-bold uppercase leading-[1.15] tracking-[calc(0.4px*var(--t4-scale))] text-[#f8fafc]">
          {name}
        </span>
      </div>

      {role ? (
        <span className="text-[calc(14px*var(--t4-scale))] font-semibold uppercase leading-[1.1] tracking-[calc(0.8px*var(--t4-scale))] text-[#f8fafc]">
          {role}
        </span>
      ) : null}
    </article>
  );
}
