import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import FullScreenPageShell from "../components/FullScreenPageShell.jsx";
import Playing11TeamPanel from "../components/Playing11TeamPanel.jsx";
import { t4Motion, t4StaggerStyle } from "../../utils/motion.js";

/**
 * Resolve panel tone the same way Theme 3 Playing11 does:
 * teamA defaults to batsman; teamB defaults to bowler.
 *
 * @param {Object} [team]
 * @param {"batsman"|"bowler"} fallback
 */
function resolvePanelTone(team, fallback) {
  if (team?.theme === "bowler") return "bowler";
  if (team?.theme === "batsman") return "batsman";
  return fallback;
}

/**
 * Playing11 — full-screen Playing XI for both teams.
 * Structure/data flow mirrors Theme 3; visuals stay Theme 4.
 *
 * @param {Object} props
 * @param {Object} props.match
 * @param {Object} props.baseConfig
 * @param {Object} [props.config]
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

  return (
    <FullScreenPageShell>
      <div className="mx-auto flex h-full w-full max-w-[calc(1400px*var(--t4-scale))] flex-col justify-center gap-[calc(32px*var(--t4-scale))] px-[calc(48px*var(--t4-scale))] py-[calc(40px*var(--t4-scale))] max-[900px]:gap-[calc(24px*var(--t4-scale))] max-[900px]:px-[calc(24px*var(--t4-scale))] max-[900px]:py-[calc(28px*var(--t4-scale))]">
        <header
          className={`${t4Motion("fadeUp")} flex flex-col gap-[calc(8px*var(--t4-scale))]`}
          style={t4StaggerStyle(0)}
        >
          {title ? (
            <h1 className="m-0 text-[calc(44px*var(--t4-scale))] font-black uppercase leading-[1.05] tracking-[calc(2px*var(--t4-scale))] text-[#f8fafc] max-[900px]:text-[calc(34px*var(--t4-scale))]">
              {title}
            </h1>
          ) : null}
          {tournament ? (
            <p className="m-0 text-[calc(22px*var(--t4-scale))] font-semibold uppercase leading-[1.15] tracking-[calc(1.2px*var(--t4-scale))] text-[#7dd3fc] max-[900px]:text-[calc(18px*var(--t4-scale))]">
              {tournament}
            </p>
          ) : null}
        </header>

        <div className="flex w-full items-start gap-[calc(28px*var(--t4-scale))] max-[1100px]:flex-col max-[1100px]:gap-[calc(20px*var(--t4-scale))]">
          <Playing11TeamPanel
            team={match.teamA}
            tone={resolvePanelTone(match.teamA, "batsman")}
            className={t4Motion("slideLeft")}
            style={t4StaggerStyle(1, 120)}
          />
          <Playing11TeamPanel
            team={match.teamB}
            tone={resolvePanelTone(match.teamB, "bowler")}
            className={t4Motion("slideRight")}
            style={t4StaggerStyle(2, 120)}
          />
        </div>
      </div>
    </FullScreenPageShell>
  );
}
