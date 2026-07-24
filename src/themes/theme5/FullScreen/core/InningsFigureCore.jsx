import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import FullScreenPageShell from "../components/FullScreenPageShell.jsx";
import { panelStyle } from "../utils/fullScreenUi.js";
import {
  NEED_FS_CARD_MAX_W,
  NEED_FS_CARD_MIN_H,
  NEED_FS_PAGE_MAX_W,
} from "../utils/needFsLayout.js";
import { t4Motion, t4StaggerStyle } from "../../utils/motion.js";

/** Innings figures — 2×2 grid on NeedTarget shell (Theme 3 height, Theme 5 look). */
export default function InningsFigureCore({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  const figures = Array.isArray(match?.figures) ? match.figures : [];
  if (!figures.length) return null;

  mergeConfig(baseConfig, configOverride);

  const tournament = match.tournament ?? "";
  const matchup = match.matchup ?? "";
  const cardStyle = panelStyle(match.team ?? {}, "batsman");

  return (
    <FullScreenPageShell>
      <div
        className={`mx-auto flex h-full w-full ${NEED_FS_PAGE_MAX_W} flex-col gap-[calc(28px*var(--t5-scale))] px-[calc(48px*var(--t5-scale))] py-[calc(36px*var(--t5-scale))]`}
      >
        <header
          className={`${t4Motion("fadeUp")} flex shrink-0 flex-col gap-[calc(4px*var(--t5-scale))]`}
          style={t4StaggerStyle(0)}
        >
          {matchup ? (
            <h1 className="text-[calc(40px*var(--t5-scale))] font-black uppercase text-[#f8fafc]">
              {matchup}
            </h1>
          ) : null}
          {tournament ? (
            <p className="text-[calc(20px*var(--t5-scale))] font-semibold uppercase text-[#7dd3fc]">
              {tournament}
            </p>
          ) : null}
        </header>

        <div
          className={`${t4Motion("riseSoft")} relative mx-auto my-auto flex w-full ${NEED_FS_CARD_MAX_W} flex-col items-center`}
          style={t4StaggerStyle(1, 120)}
        >
          <div
            className={`relative flex ${NEED_FS_CARD_MIN_H} w-full flex-col items-center justify-center rounded-[calc(14px*var(--t5-scale))] border border-white/20 px-[calc(64px*var(--t5-scale))] py-[calc(48px*var(--t5-scale))] shadow-[0_0_calc(40px*var(--t5-scale))_rgba(0,0,0,0.35)]`}
            style={cardStyle}
          >
            <div className="grid w-full grid-cols-2 gap-x-[calc(64px*var(--t5-scale))] gap-y-[calc(40px*var(--t5-scale))]">
              {figures.map((figure, index) => (
                <div
                  key={figure.label}
                  className={`${t4Motion("scaleIn")} flex min-w-0 flex-col items-center gap-[calc(14px*var(--t5-scale))]`}
                  style={t4StaggerStyle(index, 180, 80)}
                >
                  <span className="flex min-w-[calc(88px*var(--t5-scale))] items-center justify-center rounded-[calc(6px*var(--t5-scale))] border border-white/20 bg-black/35 px-[calc(16px*var(--t5-scale))] py-[calc(8px*var(--t5-scale))]">
                    <span className="text-[calc(16px*var(--t5-scale))] font-bold uppercase tracking-[calc(1.5px*var(--t5-scale))] text-[#f8fafc]">
                      {figure.label}
                    </span>
                  </span>
                  <span className="text-center text-[calc(96px*var(--t5-scale))] font-black uppercase tabular-nums leading-[0.9] text-[#f8fafc]">
                    {figure.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FullScreenPageShell>
  );
}
