import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import BreakBackground from "../../Breaks/components/BreakBackground.jsx";
import { resolvePlayerStatsTeamColor } from "../utils/resolvePlayerStatsTeamColor.js";

const LOGO_TILE =
  "flex h-[calc(120px*var(--t4-scale))] w-[calc(120px*var(--t4-scale))] shrink-0 items-center justify-center overflow-hidden rounded-[calc(6px*var(--t4-scale))] bg-[linear-gradient(165deg,#ffffff_0%,#ffffff_58%,#f4f8fd_82%,#e3eef9_100%)] shadow-[0_calc(8px*var(--t4-scale))_calc(24px*var(--t4-scale))_rgba(0,0,0,0.3),inset_0_0_0_1px_rgba(255,255,255,0.15)]";

/**
 * NameFS — full-screen player name graphic.
 * Portrait left, team logo + identity card right (team colors throughout).
 *
 * @param {"batsman"|"bowler"} [props.variant]
 */
export default function NameFSCore({
  match,
  baseConfig,
  config: configOverride = {},
  variant = "batsman",
}) {
  const player = match?.player;
  if (!player?.lastName && !player?.name) return null;

  const config = mergeConfig(baseConfig, configOverride);
  const team = match.team ?? {};
  const teamColor = resolvePlayerStatsTeamColor(match, variant, config);

  const firstName = player.firstName ?? "";
  const derivedLast = String(player.name || "")
    .trim()
    .split(/\s+/)
    .slice(1)
    .join(" ");
  const lastName =
    player.lastName || derivedLast || String(player.name || "").trim();
  const role = player.role ?? "";
  const subtitle = player.subtitle ?? "";
  const photoUrl = player.photoUrl ?? "";
  const teamCode = team.code ?? "";
  const teamLabel = team.name || team.code || "Team";

  return (
    <div
      className={`absolute inset-0 overflow-hidden select-none font-montserrat ${
        variant === "bowler" ? "bg-[#071018]" : "bg-[var(--t4-surface)]"
      } text-[var(--t4-text)]`}
    >
      <BreakBackground />

      <div className="relative z-[1] flex h-full w-full items-center justify-center gap-[calc(12px*var(--t4-scale))] box-border px-[calc(48px*var(--t4-scale))] py-[calc(40px*var(--t4-scale))] motion-safe:animate-soft-in motion-reduce:animate-none">
        <div className="relative flex h-full min-h-0 w-[min(42%,calc(620px*var(--t4-scale)))] shrink-0 items-center justify-center overflow-hidden">
          {photoUrl ? (
            <img
              src={photoUrl}
              alt={`${firstName} ${lastName}`.trim() || lastName}
              className="h-full max-h-full w-full object-contain object-center drop-shadow-[0_calc(12px*var(--t4-scale))_calc(28px*var(--t4-scale))_rgba(0,0,0,0.45)]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-[calc(68px*var(--t4-scale))] font-extrabold uppercase leading-[0.95] tracking-[calc(1.5px*var(--t4-scale))] text-white/40">
                {(lastName || "?").slice(0, 1)}
              </span>
            </div>
          )}
        </div>

        <div className="flex w-[min(48%,calc(520px*var(--t4-scale)))] min-w-0 shrink-0 flex-col items-start justify-center gap-[calc(28px*var(--t4-scale))]">
          <div className={LOGO_TILE}>
            {team.logoUrl ? (
              <img
                src={team.logoUrl}
                alt={teamLabel}
                className="h-full w-full object-contain p-[calc(14px*var(--t4-scale))]"
              />
            ) : (
              <span className="text-[calc(28px*var(--t4-scale))] font-bold uppercase text-[#0f2847]">
                {teamCode || "?"}
              </span>
            )}
          </div>

          <div
            className="flex w-full flex-col gap-[calc(20px*var(--t4-scale))] overflow-hidden rounded-[calc(8px*var(--t4-scale))] border border-[var(--t4-divider)] px-[calc(32px*var(--t4-scale))] py-[calc(28px*var(--t4-scale))]"
            style={{ backgroundColor: teamColor }}
          >
            <div className="flex flex-col gap-[calc(8px*var(--t4-scale))] leading-none">
              {firstName ? (
                <span className="text-[calc(28px*var(--t4-scale))] font-semibold uppercase leading-[1.05] tracking-[calc(2px*var(--t4-scale))] text-[#f8fafc]">
                  {firstName}
                </span>
              ) : null}
              <span className="text-[calc(68px*var(--t4-scale))] font-extrabold uppercase leading-[0.95] tracking-[calc(1.5px*var(--t4-scale))] text-[#f8fafc]">
                {lastName}
              </span>
            </div>

            <div
              className="h-px w-full shrink-0 bg-[var(--t4-divider)]"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-[calc(10px*var(--t4-scale))]">
              {teamCode ? (
                <span className="text-[calc(18px*var(--t4-scale))] font-bold uppercase leading-[1.1] tracking-[calc(2px*var(--t4-scale))] text-[#7dd3fc]">
                  {teamCode}
                </span>
              ) : null}
              {role ? (
                <span className="text-[calc(24px*var(--t4-scale))] font-bold uppercase leading-[1.15] tracking-[calc(1.2px*var(--t4-scale))] text-[#f8fafc]">
                  {role}
                </span>
              ) : null}
              {subtitle ? (
                <span className="text-[calc(18px*var(--t4-scale))] font-medium leading-[1.2] tracking-[calc(0.4px*var(--t4-scale))] text-[#f8fafc]/[0.72]">
                  {subtitle}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
