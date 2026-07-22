import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import FullScreenPageShell from "../components/FullScreenPageShell.jsx";
import Playing11TeamPanel from "../components/Playing11TeamPanel.jsx";
import { t4Motion, t4StaggerStyle } from "../../utils/motion.js";

/** Playing XI — full-screen dual team squads. */
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
      <div className="mx-auto flex h-full w-full max-w-[calc(1400px*var(--t4-scale))] flex-col justify-center gap-[calc(32px*var(--t4-scale))] px-[calc(48px*var(--t4-scale))] py-[calc(40px*var(--t4-scale))]">
        <header
          className={`${t4Motion("fadeUp")} flex flex-col gap-[calc(8px*var(--t4-scale))]`}
          style={t4StaggerStyle(0)}
        >
          {title ? (
            <h1 className="text-[calc(44px*var(--t4-scale))] font-black uppercase leading-[1.05] tracking-[calc(2px*var(--t4-scale))] text-[#f8fafc]">
              {title}
            </h1>
          ) : null}
          {tournament ? (
            <p className="text-[calc(22px*var(--t4-scale))] font-semibold uppercase leading-[1.15] tracking-[calc(1.2px*var(--t4-scale))] text-[#7dd3fc]">
              {tournament}
            </p>
          ) : null}
        </header>

        <div className="flex w-full items-start gap-[calc(28px*var(--t4-scale))]">
          <div className={t4Motion("slideLeft")} style={t4StaggerStyle(1, 120)}>
            <Playing11TeamPanel
              team={match.teamA}
              tone={match.teamA.theme === "bowler" ? "bowler" : "batsman"}
            />
          </div>
          <div className={t4Motion("slideRight")} style={t4StaggerStyle(2, 120)}>
            <Playing11TeamPanel
              team={match.teamB}
              tone={match.teamB.theme === "batsman" ? "batsman" : "bowler"}
            />
          </div>
        </div>
      </div>
    </FullScreenPageShell>
  );
}
