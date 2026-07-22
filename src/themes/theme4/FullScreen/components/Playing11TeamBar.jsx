import React from "react";
import { T4_LOGO_TILE, resolveFullScreenTeamColor } from "../utils/fullScreenUi.js";
import { P11_CENTER_GUTTER, P11_SECTION_DIVIDER } from "../utils/playing11Layout.js";

function TeamSide({ team, align }) {
  const label = team?.name || team?.code || "";
  const isRight = align === "right";

  return (
    <div
      className={`flex min-w-0 flex-1 items-center gap-[calc(14px*var(--t4-scale))] px-[calc(28px*var(--t4-scale))] max-[900px]:px-[calc(16px*var(--t4-scale))] ${
        isRight ? "justify-end" : "justify-start"
      }`}
    >
      {!isRight ? (
        <div
          className={`${T4_LOGO_TILE} h-[calc(52px*var(--t4-scale))] w-[calc(52px*var(--t4-scale))] shrink-0 p-[calc(5px*var(--t4-scale))] max-[900px]:h-[calc(44px*var(--t4-scale))] max-[900px]:w-[calc(44px*var(--t4-scale))]`}
        >
          {team?.logoUrl ? (
            <img src={team.logoUrl} alt={label} className="h-full w-full object-contain" />
          ) : (
            <span className="text-[calc(14px*var(--t4-scale))] font-bold uppercase text-[#0f2847]">
              {team?.code || "?"}
            </span>
          )}
        </div>
      ) : null}

      <span className="min-w-0 truncate text-[calc(32px*var(--t4-scale))] font-black uppercase leading-[1.05] tracking-[calc(1px*var(--t4-scale))] text-[#f8fafc] max-[900px]:text-[calc(24px*var(--t4-scale))]">
        {label}
      </span>

      {isRight ? (
        <div
          className={`${T4_LOGO_TILE} h-[calc(52px*var(--t4-scale))] w-[calc(52px*var(--t4-scale))] shrink-0 p-[calc(5px*var(--t4-scale))] max-[900px]:h-[calc(44px*var(--t4-scale))] max-[900px]:w-[calc(44px*var(--t4-scale))]`}
        >
          {team?.logoUrl ? (
            <img src={team.logoUrl} alt={label} className="h-full w-full object-contain" />
          ) : (
            <span className="text-[calc(14px*var(--t4-scale))] font-bold uppercase text-[#0f2847]">
              {team?.code || "?"}
            </span>
          )}
        </div>
      ) : null}
    </div>
  );
}

/**
 * Team identity bar — solid halves, full-height V, sky divider below.
 */
export default function Playing11TeamBar({ teamA, teamB, toneA = "batsman", toneB = "bowler" }) {
  const colorA = resolveFullScreenTeamColor(teamA, toneA);
  const colorB = resolveFullScreenTeamColor(teamB, toneB);

  return (
    <div
      className={`relative flex min-h-[calc(76px*var(--t4-scale))] shrink-0 items-stretch border-b ${P11_SECTION_DIVIDER} max-[900px]:min-h-[calc(64px*var(--t4-scale))]`}
    >
      <div className="flex min-w-0 flex-1 items-stretch" style={{ backgroundColor: colorA }}>
        <TeamSide team={teamA} align="left" />
      </div>

      <div
        className={`relative z-[2] flex ${P11_CENTER_GUTTER} shrink-0 items-center justify-center self-stretch bg-white`}
        aria-hidden="true"
      >
        <span className="text-[calc(22px*var(--t4-scale))] font-black uppercase leading-none text-[#070E35]">
          V
        </span>
      </div>

      <div className="flex min-w-0 flex-1 items-stretch" style={{ backgroundColor: colorB }}>
        <TeamSide team={teamB} align="right" />
      </div>
    </div>
  );
}
