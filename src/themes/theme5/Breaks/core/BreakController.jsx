import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import BreakBackground from "../components/BreakBackground.jsx";
import BreakCenterBadge from "../components/BreakCenterBadge.jsx";
import BreakTeamCard from "../components/BreakTeamCard.jsx";
import { t4Motion, t4StaggerStyle } from "../../utils/motion.js";

/**
 * Shared Theme 5 full-page Break shell.
 * Static layout: Tailwind. Ambient motion: BreakBackground CSS.
 */
export default function BreakController({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match?.teamA || !match?.teamB) return null;

  const config = mergeConfig(baseConfig, configOverride);
  const tournament = match.tournament ?? "";
  const venue = match.venue ?? "";
  const statusLabel = match.statusLabel ?? config.statusLabel ?? "BREAK";
  const showTimer = Boolean(match.showTimer ?? config.showTimer);
  const timerSeconds = match.timerSeconds ?? config.timerSeconds ?? 300;

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[var(--t5-surface)] select-none font-montserrat">
      <BreakBackground />

      <div className="relative z-[1] flex w-full max-w-[calc(1280px*var(--t5-scale))] flex-col items-center gap-[calc(56px*var(--t5-scale))] box-border px-[calc(48px*var(--t5-scale))] py-[calc(64px*var(--t5-scale))]">
        <header
          className={`${t4Motion("fadeUp")} flex flex-col items-center gap-[calc(12px*var(--t5-scale))] text-center`}
          style={t4StaggerStyle(0, 40, 0)}
        >
          {tournament ? (
            <h1 className="m-0 text-[calc(36px*var(--t5-scale))] font-extrabold uppercase leading-[1.05] tracking-[calc(1.5px*var(--t5-scale))] text-[#f8fafc]">
              {tournament}
            </h1>
          ) : null}
          {venue ? (
            <p className="m-0 text-[calc(18px*var(--t5-scale))] font-semibold uppercase leading-[1.15] tracking-[calc(1.5px*var(--t5-scale))] text-[#f8fafc]/80">
              {venue}
            </p>
          ) : null}
        </header>

        <div className="flex w-full flex-wrap items-center justify-center gap-[calc(48px*var(--t5-scale))] max-[900px]:gap-[calc(32px*var(--t5-scale))]">
          <div className={t4Motion("slideLeft")} style={t4StaggerStyle(1, 100, 0)}>
            <BreakTeamCard team={match.teamA} />
          </div>
          <div className={t4Motion("scaleIn")} style={t4StaggerStyle(2, 160, 0)}>
            <BreakCenterBadge showTimer={showTimer} timerSeconds={timerSeconds} />
          </div>
          <div className={t4Motion("slideRight")} style={t4StaggerStyle(3, 100, 0)}>
            <BreakTeamCard team={match.teamB} />
          </div>
        </div>

        <div
          className={`${t4Motion("riseSoft")} flex min-w-[calc(280px*var(--t5-scale))] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#0369a1] px-[calc(40px*var(--t5-scale))] py-[calc(18px*var(--t5-scale))] shadow-[0_calc(8px*var(--t5-scale))_calc(28px*var(--t5-scale))_rgba(14,165,233,0.35),inset_0_1px_0_rgba(255,255,255,0.25)]`}
          style={t4StaggerStyle(4, 220, 0)}
        >
          <span className="text-[calc(28px*var(--t5-scale))] font-bold uppercase leading-none tracking-[calc(2px*var(--t5-scale))] text-[#f8fafc]">
            {statusLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
