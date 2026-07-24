import React from "react";
import TeamCrest from "../../LowerThird/components/TeamCrest.jsx";
import { T4_LOGO_TILE } from "../../utils/ui.js";

/**
 * Break team column — logo tile + name (Tailwind).
 */
export default function BreakTeamCard({ team }) {
  if (!team) return null;

  const label = team.name || team.code || "";

  return (
    <div className="flex w-[calc(280px*var(--t5-scale))] min-w-0 flex-col items-center gap-[calc(20px*var(--t5-scale))] max-[900px]:w-[calc(220px*var(--t5-scale))]">
      <div
        className={`${T4_LOGO_TILE} h-[calc(220px*var(--t5-scale))] w-[calc(220px*var(--t5-scale))] shadow-[0_calc(12px*var(--t5-scale))_calc(40px*var(--t5-scale))_rgba(0,0,0,0.35),inset_0_0_0_1px_rgba(255,255,255,0.15)] max-[900px]:h-[calc(180px*var(--t5-scale))] max-[900px]:w-[calc(180px*var(--t5-scale))]`}
      >
        {team.logoUrl ? (
          <img
            src={team.logoUrl}
            alt={label}
            className="h-full w-full object-contain p-[calc(16px*var(--t5-scale))]"
          />
        ) : (
          <TeamCrest
            code={team.code}
            name={team.name}
            theme={team.theme || "gold"}
            size="lg"
          />
        )}
      </div>

      {label ? (
        <span className="text-center text-[calc(28px*var(--t5-scale))] font-bold uppercase leading-[1.2] tracking-[calc(1.5px*var(--t5-scale))] text-[#f8fafc]">
          {label}
        </span>
      ) : null}
    </div>
  );
}
