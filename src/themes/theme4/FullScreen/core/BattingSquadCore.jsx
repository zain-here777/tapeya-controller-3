import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import FullScreenPageShell from "../components/FullScreenPageShell.jsx";
import BattingSquadPlayerCard from "../components/BattingSquadPlayerCard.jsx";
import { T4_LOGO_TILE, panelStyle, resolveFullScreenTeamColor } from "../utils/fullScreenUi.js";

/** Squad grid — batting or bowling XI (6 + 5 cards). */
export default function BattingSquadCore({
  match,
  baseConfig,
  config: configOverride = {},
  tone = "batsman",
}) {
  const team = match?.team;
  const players = Array.isArray(match?.players) ? match.players : [];
  if (!team?.name && !players.length) return null;

  mergeConfig(baseConfig, configOverride);

  const tournament = match.tournament ?? "";
  const teamLabel = team?.name || team?.code || "";
  const row1 = players.slice(0, 6);
  const row2 = players.slice(6, 11);
  const isBowler = tone === "bowler";
  const fill = panelStyle(team, isBowler ? "bowler" : "batsman");

  return (
    <FullScreenPageShell>
      <div className="mx-auto flex h-full w-full max-w-[calc(1680px*var(--t4-scale))] flex-col gap-[calc(36px*var(--t4-scale))] px-[calc(48px*var(--t4-scale))] py-[calc(40px*var(--t4-scale))]">
        <header className="flex shrink-0 items-center gap-[calc(20px*var(--t4-scale))]">
          <div
            className={`${T4_LOGO_TILE} h-[calc(88px*var(--t4-scale))] w-[calc(88px*var(--t4-scale))] p-[calc(8px*var(--t4-scale))]`}
          >
            {team?.logoUrl ? (
              <img src={team.logoUrl} alt={teamLabel} className="h-full w-full object-contain" />
            ) : (
              <span
                className="text-[calc(22px*var(--t4-scale))] font-bold uppercase"
                style={{ color: resolveFullScreenTeamColor(team, tone) }}
              >
                {team?.code || "?"}
              </span>
            )}
          </div>
          <div className="flex min-w-0 flex-col gap-[calc(4px*var(--t4-scale))]">
            {teamLabel ? (
              <h1 className="text-[calc(40px*var(--t4-scale))] font-black uppercase leading-[1.05] tracking-[calc(1.5px*var(--t4-scale))] text-[#f8fafc]">
                {teamLabel}
              </h1>
            ) : null}
            {tournament ? (
              <p className="text-[calc(20px*var(--t4-scale))] font-semibold uppercase tracking-[calc(1px*var(--t4-scale))] text-[#7dd3fc]">
                {tournament}
              </p>
            ) : null}
          </div>
        </header>

        <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-[calc(28px*var(--t4-scale))]">
          {row1.length ? (
            <div className="flex w-full items-start justify-center gap-[calc(18px*var(--t4-scale))]">
              {row1.map((player, index) => (
                <BattingSquadPlayerCard
                  key={`${player.name}-${index}`}
                  player={player}
                  index={index}
                  panelStyle={fill}
                />
              ))}
            </div>
          ) : null}
          {row2.length ? (
            <div className="flex items-start justify-center gap-[calc(18px*var(--t4-scale))]">
              {row2.map((player, index) => (
                <BattingSquadPlayerCard
                  key={`${player.name}-${index + 6}`}
                  player={player}
                  index={index + 6}
                  panelStyle={fill}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </FullScreenPageShell>
  );
}
