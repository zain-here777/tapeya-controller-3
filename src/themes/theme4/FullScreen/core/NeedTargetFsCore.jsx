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

function StatCol({ topLabel, bottomLabel, value }) {
  return (
    <div
      className={`${t4Motion("scaleIn")} flex min-w-[calc(180px*var(--t4-scale))] flex-col items-center gap-[calc(18px*var(--t4-scale))]`}
    >
      <span className="flex min-w-[calc(88px*var(--t4-scale))] items-center justify-center rounded-[calc(6px*var(--t4-scale))] border border-white/20 bg-black/35 px-[calc(16px*var(--t4-scale))] py-[calc(8px*var(--t4-scale))]">
        <span className="text-[calc(16px*var(--t4-scale))] font-bold uppercase tracking-[calc(1.5px*var(--t4-scale))] text-[#f8fafc]">
          {topLabel}
        </span>
      </span>
      <span className="text-[calc(120px*var(--t4-scale))] font-black tabular-nums leading-[0.9] tracking-[calc(-2px*var(--t4-scale))] text-[#f8fafc]">
        {value}
      </span>
      <span className="flex min-w-[calc(88px*var(--t4-scale))] items-center justify-center rounded-[calc(6px*var(--t4-scale))] border border-white/20 bg-black/35 px-[calc(16px*var(--t4-scale))] py-[calc(8px*var(--t4-scale))]">
        <span className="text-[calc(16px*var(--t4-scale))] font-bold uppercase tracking-[calc(1.5px*var(--t4-scale))] text-[#f8fafc]">
          {bottomLabel}
        </span>
      </span>
    </div>
  );
}

/** Need target — chase graphic (Theme 3 height / proportions, Theme 4 look). */
export default function NeedTargetFsCore({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  if (!match) return null;

  mergeConfig(baseConfig, configOverride);

  const tournament = match.tournament ?? "";
  const matchup = match.matchup ?? "";
  const title = match.title ?? "";
  const need = match.need ?? {};
  const runs = need.runs ?? 0;
  const balls = need.balls ?? 0;
  const wicketsLeft = match.wicketsLeft;
  const wicketsLabel =
    wicketsLeft == null
      ? ""
      : `WITH ${wicketsLeft} WICKET${Number(wicketsLeft) === 1 ? "" : "S"}`;
  const cardStyle = panelStyle(match.team ?? {}, "batsman");

  return (
    <FullScreenPageShell>
      <div
        className={`mx-auto flex h-full w-full ${NEED_FS_PAGE_MAX_W} flex-col gap-[calc(28px*var(--t4-scale))] px-[calc(48px*var(--t4-scale))] py-[calc(36px*var(--t4-scale))]`}
      >
        <header
          className={`${t4Motion("fadeUp")} flex shrink-0 flex-col gap-[calc(4px*var(--t4-scale))]`}
          style={t4StaggerStyle(0)}
        >
          {matchup ? (
            <h1 className="text-[calc(40px*var(--t4-scale))] font-black uppercase text-[#f8fafc]">
              {matchup}
            </h1>
          ) : null}
          {tournament ? (
            <p className="text-[calc(20px*var(--t4-scale))] font-semibold uppercase text-[#7dd3fc]">
              {tournament}
            </p>
          ) : null}
        </header>

        <div
          className={`${t4Motion("riseSoft")} relative mx-auto my-auto flex w-full ${NEED_FS_CARD_MAX_W} flex-col items-center pb-[calc(28px*var(--t4-scale))]`}
          style={t4StaggerStyle(1, 120)}
        >
          <div
            className={`relative flex ${NEED_FS_CARD_MIN_H} w-full flex-col items-center justify-center gap-[calc(48px*var(--t4-scale))] rounded-[calc(14px*var(--t4-scale))] border border-white/20 px-[calc(56px*var(--t4-scale))] pb-[calc(72px*var(--t4-scale))] pt-[calc(56px*var(--t4-scale))] shadow-[0_0_calc(40px*var(--t4-scale))_rgba(0,0,0,0.35)]`}
            style={cardStyle}
          >
            {title ? (
              <h2 className="relative z-[1] text-center text-[calc(28px*var(--t4-scale))] font-bold uppercase tracking-[calc(1.5px*var(--t4-scale))] text-[#f8fafc]">
                {title}
              </h2>
            ) : null}
            <div className="relative z-[1] flex w-full items-start justify-center gap-[calc(72px*var(--t4-scale))]">
              <StatCol topLabel="NEED" bottomLabel="RUNS" value={runs} />
              <StatCol topLabel="FROM" bottomLabel="BALLS" value={balls} />
            </div>
          </div>

          {wicketsLabel ? (
            <div className="absolute bottom-0 left-1/2 z-[2] flex min-w-[calc(280px*var(--t4-scale))] -translate-x-1/2 items-center justify-center rounded-[calc(10px*var(--t4-scale))] bg-gradient-to-b from-[#7dd3fc] to-[#0ea5e9] px-[calc(28px*var(--t4-scale))] py-[calc(14px*var(--t4-scale))] shadow-[0_calc(6px*var(--t4-scale))_calc(16px*var(--t4-scale))_rgba(0,0,0,0.35)]">
              <span className="text-[calc(22px*var(--t4-scale))] font-bold uppercase tracking-[calc(1.5px*var(--t4-scale))] text-[#0b1220]">
                {wicketsLabel}
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </FullScreenPageShell>
  );
}
