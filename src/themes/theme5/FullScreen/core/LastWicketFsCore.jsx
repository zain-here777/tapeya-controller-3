import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import BreakBackground from "../../Breaks/components/BreakBackground.jsx";
import { T4_LOGO_TILE, panelStyle, resolveFullScreenTeamColor } from "../utils/fullScreenUi.js";

/** Last wicket — full-screen dismissed batter (MatchFS-style + how out). */
export default function LastWicketFsCore({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  const player = match?.player;
  if (!player?.name && !player?.lastName) return null;

  mergeConfig(baseConfig, configOverride);

  const team = match.team ?? {};
  const tournament = match.tournament ?? "";
  const name = player.name || player.lastName || "";
  const howOut = player.howOut ?? "";
  const photoUrl = player.photoUrl ?? "";
  const stats = player.stats ?? [];
  const teamLabel = team.name || team.code || "Team";
  const teamColor = resolveFullScreenTeamColor(team, "batsman");
  const cardStyle = panelStyle(team, "batsman");

  return (
    <div className="absolute inset-0 overflow-hidden select-none font-montserrat bg-[var(--t5-surface)] text-[var(--t5-text)]">
      <BreakBackground />

      <div className="relative z-[1] flex h-full w-full flex-col items-center gap-[calc(20px*var(--t5-scale))] py-[calc(28px*var(--t5-scale))]">
        {tournament ? (
          <h1 className="shrink-0 text-center text-[calc(28px*var(--t5-scale))] font-bold uppercase tracking-[calc(1.5px*var(--t5-scale))] text-[#f8fafc]">
            {tournament}
          </h1>
        ) : null}

        <div className="flex min-h-0 w-full flex-1 items-center justify-center gap-[calc(16px*var(--t5-scale))] px-[calc(48px*var(--t5-scale))]">
          <div className="relative flex h-full min-h-0 w-[min(42%,calc(620px*var(--t5-scale)))] shrink-0 items-center justify-center overflow-hidden">
            {photoUrl ? (
              <img
                src={photoUrl}
                alt={name}
                className="h-full max-h-full w-full object-contain object-center drop-shadow-[0_calc(12px*var(--t5-scale))_calc(28px*var(--t5-scale))_rgba(0,0,0,0.45)]"
              />
            ) : (
              <span className="text-[calc(80px*var(--t5-scale))] font-extrabold uppercase text-white/40">
                {(name || "?").slice(0, 1)}
              </span>
            )}
          </div>

          {stats.length ? (
            <div className="flex h-full max-h-[calc(720px*var(--t5-scale))] w-[calc(168px*var(--t5-scale))] shrink-0 flex-col gap-[calc(8px*var(--t5-scale))]">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="flex min-h-0 flex-[1_1_0%] flex-col items-center justify-center gap-[calc(6px*var(--t5-scale))] rounded-[calc(6px*var(--t5-scale))] border border-[var(--t5-divider)] px-[calc(12px*var(--t5-scale))] py-[calc(8px*var(--t5-scale))] motion-safe:animate-soft-in motion-reduce:animate-none"
                  style={{
                    backgroundColor: teamColor,
                    animationDelay: `${120 + index * 60}ms`,
                  }}
                >
                  <span className="whitespace-nowrap text-[calc(18px*var(--t5-scale))] font-bold uppercase text-[#f8fafc]">
                    {stat.label}
                  </span>
                  <span className="text-[calc(36px*var(--t5-scale))] font-extrabold tabular-nums text-[#f8fafc]">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          ) : null}

          <div className="flex w-[min(40%,calc(480px*var(--t5-scale)))] min-w-0 shrink-0 flex-col items-start gap-[calc(28px*var(--t5-scale))]">
            <div className={`${T4_LOGO_TILE} h-[calc(88px*var(--t5-scale))] w-[calc(88px*var(--t5-scale))]`}>
              {team.logoUrl ? (
                <img
                  src={team.logoUrl}
                  alt={teamLabel}
                  className="h-full w-full object-contain p-[calc(10px*var(--t5-scale))]"
                />
              ) : (
                <span className="text-[calc(28px*var(--t5-scale))] font-bold uppercase text-[#0f2847]">
                  {team.code || "?"}
                </span>
              )}
            </div>

            <div
              className="flex w-full min-h-[calc(280px*var(--t5-scale))] flex-col items-start justify-start gap-[calc(18px*var(--t5-scale))] rounded-[calc(8px*var(--t5-scale))] border border-[var(--t5-divider)] px-[calc(32px*var(--t5-scale))] py-[calc(28px*var(--t5-scale))]"
              style={cardStyle}
            >
              <span className="text-[calc(80px*var(--t5-scale))] font-extrabold uppercase leading-[0.95] tracking-[calc(1.5px*var(--t5-scale))] text-[#f8fafc]">
                {name}
              </span>
              {howOut ? (
                <span className="text-[calc(28px*var(--t5-scale))] font-semibold uppercase tracking-[calc(1.5px*var(--t5-scale))] text-[#f8fafc]/90">
                  {howOut}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
