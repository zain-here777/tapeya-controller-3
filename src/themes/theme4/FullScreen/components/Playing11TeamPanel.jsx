import React from "react";
import {
  T4_LOGO_TILE,
  resolveFullScreenTeamColor,
} from "../utils/fullScreenUi.js";
import { t4Motion, t4StaggerStyle } from "../../utils/motion.js";

/**
 * One team's Playing XI panel — header (name + logo) + player list.
 * Layout hierarchy matches Theme 3; Theme 4 colors / tiles / motion.
 *
 * @param {Object} props
 * @param {Object} props.team
 * @param {"batsman"|"bowler"} [props.tone]
 * @param {string} [props.className]
 * @param {React.CSSProperties} [props.style]
 */
export default function Playing11TeamPanel({
  team,
  tone = "batsman",
  className = "",
  style,
}) {
  if (!team?.name && !team?.players?.length) return null;

  const players = Array.isArray(team.players) ? team.players : [];
  const label = team.name || team.code || "";
  const panelColor = resolveFullScreenTeamColor(team, tone);
  const accentClass =
    tone === "bowler"
      ? "bg-[#7dd3fc] shadow-[0_0_calc(6px*var(--t4-scale))_rgba(125,211,252,0.45)]"
      : "bg-[#f8fafc] shadow-[0_0_calc(6px*var(--t4-scale))_rgba(248,250,252,0.25)]";

  return (
    <section
      className={`flex min-w-0 flex-1 flex-col overflow-hidden rounded-[calc(6px*var(--t4-scale))] border border-[var(--t4-divider)] h-fit ${className}`.trim()}
      style={{
        backgroundColor: `${panelColor}e8`,
        ...style,
      }}
    >
      <header
        className="flex min-h-[calc(72px*var(--t4-scale))] shrink-0 items-center justify-between gap-[calc(16px*var(--t4-scale))] border-b border-white/25 px-[calc(22px*var(--t4-scale))]"
        style={{ backgroundColor: panelColor }}
      >
        <span className="min-w-0 truncate text-[calc(30px*var(--t4-scale))] font-black uppercase leading-[1.1] tracking-[calc(1.5px*var(--t4-scale))] text-[#f8fafc]">
          {label}
        </span>
        <div
          className={`${T4_LOGO_TILE} h-[calc(48px*var(--t4-scale))] w-[calc(48px*var(--t4-scale))] p-[calc(4px*var(--t4-scale))]`}
        >
          {team.logoUrl ? (
            <img
              src={team.logoUrl}
              alt={label}
              className="h-full w-full object-contain"
            />
          ) : (
            <span className="text-[calc(16px*var(--t4-scale))] font-bold uppercase text-[#0f2847]">
              {team.code || "?"}
            </span>
          )}
        </div>
      </header>

      <ul className="m-0 flex list-none flex-col p-0">
        {players.map((player, index) => {
          const name = typeof player === "string" ? player : player?.name ?? "";
          return (
            <li
              key={`${name}-${index}`}
              className={`${t4Motion("fadeUp")} flex min-h-[calc(46px*var(--t4-scale))] items-center gap-[calc(14px*var(--t4-scale))] border-b border-white/15 px-[calc(22px*var(--t4-scale))] last:border-b-0`}
              style={t4StaggerStyle(index, 180, 35)}
            >
              <span
                className={`h-[calc(18px*var(--t4-scale))] w-[calc(3px*var(--t4-scale))] shrink-0 rounded-[calc(2px*var(--t4-scale))] ${accentClass}`}
                aria-hidden="true"
              />
              <span className="flex min-w-0 flex-1 items-center">
                <span className="min-w-0 truncate text-[calc(20px*var(--t4-scale))] font-semibold uppercase leading-[1.15] tracking-[calc(1px*var(--t4-scale))] text-[#f8fafc]">
                  {name}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
