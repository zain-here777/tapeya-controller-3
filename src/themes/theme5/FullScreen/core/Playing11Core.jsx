import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import FullScreenPageShell from "../components/FullScreenPageShell.jsx";
import Playing11TeamBar from "../components/Playing11TeamBar.jsx";
import Playing11PlayerGrid from "../components/Playing11PlayerGrid.jsx";
import { P11_SECTION_DIVIDER } from "../utils/playing11Layout.js";
import { T4_LOGO_TILE } from "../utils/fullScreenUi.js";
import { t4Motion, t4StaggerStyle } from "../../utils/motion.js";

/**
 * @param {Object} [team]
 * @param {"batsman"|"bowler"} fallback
 */
function resolvePanelTone(team, fallback) {
  if (team?.theme === "bowler") return "bowler";
  if (team?.theme === "batsman") return "batsman";
  return fallback;
}

/**
 * Playing11 — broadcast board layout (reference hierarchy) with Theme 5 styling.
 */
export default function Playing11Core({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match?.teamA || !match?.teamB) return null;

  const config = mergeConfig(baseConfig, configOverride);
  const title = match.title ?? config.title ?? "PLAYING XI";
  const tournament = match.tournament ?? "";
  const tournamentLogoUrl = match.tournamentLogoUrl ?? config.tournamentLogoUrl;

  const toneA = resolvePanelTone(match.teamA, "batsman");
  const toneB = resolvePanelTone(match.teamB, "bowler");

  return (
    <FullScreenPageShell>
      <div className="mx-auto flex h-full w-full max-w-[calc(1400px*var(--t5-scale))] flex-col justify-center px-[calc(48px*var(--t5-scale))] py-[calc(40px*var(--t5-scale))] max-[900px]:px-[calc(24px*var(--t5-scale))] max-[900px]:py-[calc(28px*var(--t5-scale))]">
        <div
          className={`${t4Motion("fadeIn")} flex min-h-0 flex-1 flex-col overflow-hidden rounded-[calc(8px*var(--t5-scale))] border border-[var(--t5-divider)] shadow-[0_calc(24px*var(--t5-scale))_calc(80px*var(--t5-scale))_rgba(0,0,0,0.45)]`}
          style={t4StaggerStyle(0, 40)}
        >
          <header
            className={`${t4Motion("fadeUp")} flex shrink-0 items-center justify-between gap-[calc(24px*var(--t5-scale))] border-b ${P11_SECTION_DIVIDER} bg-[#070E35] px-[calc(28px*var(--t5-scale))] py-[calc(24px*var(--t5-scale))] max-[900px]:flex-col max-[900px]:items-start max-[900px]:px-[calc(20px*var(--t5-scale))] max-[900px]:py-[calc(18px*var(--t5-scale))]`}
            style={t4StaggerStyle(0)}
          >
            <div className="flex min-w-0 flex-col gap-[calc(8px*var(--t5-scale))]">
              {title ? (
                <h1 className="m-0 text-[calc(40px*var(--t5-scale))] font-black uppercase leading-[1.05] tracking-[calc(2px*var(--t5-scale))] text-[#f8fafc] max-[900px]:text-[calc(30px*var(--t5-scale))]">
                  {title}
                </h1>
              ) : null}
              {tournament ? (
                <p className="m-0 text-[calc(20px*var(--t5-scale))] font-normal uppercase leading-[1.2] tracking-[calc(0.8px*var(--t5-scale))] text-[#f8fafc]/92 max-[900px]:text-[calc(16px*var(--t5-scale))]">
                  {tournament}
                </p>
              ) : null}
            </div>

            {tournamentLogoUrl ? (
              <div
                className={`${T4_LOGO_TILE} h-[calc(56px*var(--t5-scale))] max-w-[calc(200px*var(--t5-scale))] shrink-0 px-[calc(12px*var(--t5-scale))] py-[calc(6px*var(--t5-scale))]`}
              >
                <img
                  src={tournamentLogoUrl}
                  alt={tournament || "Tournament"}
                  className="h-full w-full object-contain"
                />
              </div>
            ) : tournament ? (
              <div
                className={`${T4_LOGO_TILE} flex h-[calc(52px*var(--t5-scale))] shrink-0 items-center justify-center px-[calc(16px*var(--t5-scale))]`}
                aria-hidden="true"
              >
                <span className="text-[calc(13px*var(--t5-scale))] font-bold uppercase tracking-[calc(1px*var(--t5-scale))] text-[#0f2847]">
                  {tournament.split(" ").slice(0, 2).join(" ")}
                </span>
              </div>
            ) : null}
          </header>

          <div className={t4Motion("fadeUp")} style={t4StaggerStyle(1, 80)}>
            <Playing11TeamBar
              teamA={match.teamA}
              teamB={match.teamB}
              toneA={toneA}
              toneB={toneB}
            />
          </div>

          <Playing11PlayerGrid
            teamA={match.teamA}
            teamB={match.teamB}
            toneA={toneA}
            toneB={toneB}
          />
        </div>
      </div>
    </FullScreenPageShell>
  );
}
