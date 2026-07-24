import React from "react";
import { resolveFullScreenTeamColor } from "../utils/fullScreenUi.js";
import { t4Motion, t4StaggerStyle } from "../../utils/motion.js";
import { P11_COLUMN_GAP, P11_SECTION_DIVIDER } from "../utils/playing11Layout.js";

const ROW_COUNT = 11;

/** @param {string|{ name?: string }} player */
function playerName(player) {
  if (typeof player === "string") return player;
  return player?.name ?? "";
}

function PlayerColumn({ players, team, tone, side }) {
  const tint = resolveFullScreenTeamColor(team, tone);
  const staggerBase = side === "left" ? 140 : 160;

  return (
    <div
      className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden backdrop-blur-[3px]"
      style={{
        backgroundColor: `${tint}bf`,
        boxShadow: "inset 0 0 0 1px rgba(125,211,252,0.12)",
      }}
    >
      {Array.from({ length: ROW_COUNT }, (_, index) => {
        const name = playerName(players[index]);
        const rowTint = index % 2 === 0 ? "bg-white/[0.04]" : "bg-black/[0.06]";

        return (
          <div
            key={`${side}-row-${index}`}
            className={`${t4Motion("fadeUp")} ${rowTint} flex min-h-0 flex-1 items-center justify-start border-b ${P11_SECTION_DIVIDER} px-[calc(20px*var(--t5-scale))] last:border-b-0 max-[900px]:px-[calc(12px*var(--t5-scale))]`}
            style={t4StaggerStyle(index, staggerBase, 28)}
          >
            {name ? (
              <span className="min-w-0 truncate text-left text-[calc(26px*var(--t5-scale))] font-semibold uppercase leading-[1.15] tracking-[calc(0.6px*var(--t5-scale))] text-[#f8fafc] max-[900px]:text-[calc(20px*var(--t5-scale))]">
                {name}
              </span>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

/**
 * Two translucent team columns with a center gutter (stadium shows through).
 */
export default function Playing11PlayerGrid({
  teamA,
  teamB,
  toneA = "batsman",
  toneB = "bowler",
}) {
  const playersA = Array.isArray(teamA?.players) ? teamA.players : [];
  const playersB = Array.isArray(teamB?.players) ? teamB.players : [];

  return (
    <div
      className={`flex min-h-0 flex-1 ${P11_COLUMN_GAP} px-[calc(16px*var(--t5-scale))] pb-[calc(16px*var(--t5-scale))] pt-[calc(12px*var(--t5-scale))] max-[900px]:px-[calc(10px*var(--t5-scale))] max-[900px]:pb-[calc(10px*var(--t5-scale))] max-[900px]:pt-[calc(8px*var(--t5-scale))]`}
    >
      <PlayerColumn players={playersA} team={teamA} tone={toneA} side="left" />
      <PlayerColumn players={playersB} team={teamB} tone={toneB} side="right" />
    </div>
  );
}
