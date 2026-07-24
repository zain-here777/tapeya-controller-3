import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import FullScreenPageShell from "../components/FullScreenPageShell.jsx";
import PartnershipListRow from "../components/PartnershipListRow.jsx";
import { T4_LOGO_TILE, panelStyle, resolveFullScreenTeamColor } from "../utils/fullScreenUi.js";
import { t4Motion, t4StaggerStyle } from "../../utils/motion.js";

/** Partnership list — runs contributed bars. */
export default function PartnershipListCore({
  match,
  baseConfig,
  config: configOverride = {},
}) {
  const partnerships = Array.isArray(match?.partnerships) ? match.partnerships : [];
  if (!partnerships.length) return null;

  mergeConfig(baseConfig, configOverride);

  const team = match.team ?? {};
  const tournament = match.tournament ?? "";
  const teamLabel = team.name || team.code || "";
  const summary = match.summary ?? {};
  const cardStyle = panelStyle(team, "batsman");
  const teamAccent = resolveFullScreenTeamColor(team, "batsman");

  return (
    <FullScreenPageShell>
      <div className="mx-auto flex h-full w-full max-w-[calc(1480px*var(--t5-scale))] flex-col gap-[calc(28px*var(--t5-scale))] px-[calc(48px*var(--t5-scale))] py-[calc(36px*var(--t5-scale))]">
        <header
          className={`${t4Motion("fadeUp")} flex shrink-0 items-center gap-[calc(18px*var(--t5-scale))]`}
          style={t4StaggerStyle(0)}
        >
          <div className={`${T4_LOGO_TILE} h-[calc(72px*var(--t5-scale))] w-[calc(72px*var(--t5-scale))] p-[calc(6px*var(--t5-scale))]`}>
            {team.logoUrl ? (
              <img src={team.logoUrl} alt={teamLabel} className="h-full w-full object-contain" />
            ) : (
              <span className="text-[calc(18px*var(--t5-scale))] font-bold uppercase" style={{ color: teamAccent }}>
                {team.code || "?"}
              </span>
            )}
          </div>
          <div className="flex min-w-0 flex-col gap-[calc(2px*var(--t5-scale))]">
            {teamLabel ? (
              <h1 className="text-[calc(40px*var(--t5-scale))] font-black uppercase text-[#f8fafc]">
                {teamLabel}
              </h1>
            ) : null}
            {tournament ? (
              <p className="text-[calc(20px*var(--t5-scale))] font-semibold uppercase text-[#7dd3fc]">
                {tournament}
              </p>
            ) : null}
          </div>
        </header>

        <div
          className={`${t4Motion("riseSoft")} relative my-auto flex h-[calc(620px*var(--t5-scale))] w-full flex-col gap-[calc(28px*var(--t5-scale))] rounded-[calc(12px*var(--t5-scale))] border border-[var(--t5-divider)] px-[calc(40px*var(--t5-scale))] py-[calc(36px*var(--t5-scale))] shadow-[0_0_calc(40px*var(--t5-scale))_rgba(0,0,0,0.35)]`}
          style={{ ...cardStyle, ...t4StaggerStyle(1, 100) }}
        >
          <div className="flex w-full flex-col gap-[calc(28px*var(--t5-scale))] overflow-hidden">
            {partnerships.map((partnership, index) => (
              <div
                key={partnership.id ?? `${partnership.left?.name}-${partnership.right?.name}`}
                className={t4Motion("fadeUp")}
                style={t4StaggerStyle(index, 160, 70)}
              >
                <PartnershipListRow partnership={partnership} />
              </div>
            ))}
          </div>
          <p className="shrink-0 text-center text-[calc(16px*var(--t5-scale))] font-semibold uppercase tracking-[calc(2px*var(--t5-scale))] text-[#f8fafc]/80">
            RUNS CONTRIBUTED
          </p>
        </div>

        {(summary.extras != null || summary.overs != null || summary.score) && (
          <div
            className="ml-auto flex shrink-0 items-center gap-[calc(18px*var(--t5-scale))] rounded-[calc(10px*var(--t5-scale))] border border-[var(--t5-divider)] px-[calc(22px*var(--t5-scale))] py-[calc(14px*var(--t5-scale))] shadow-[0_0_calc(24px*var(--t5-scale))_rgba(0,0,0,0.3)]"
            style={cardStyle}
          >
            {summary.extras != null ? (
              <span className="text-[calc(18px*var(--t5-scale))] font-semibold uppercase text-[#f8fafc]">
                EXTRAS {summary.extras}
              </span>
            ) : null}
            {summary.overs != null ? (
              <>
                <span className="w-px shrink-0 self-stretch bg-white/25" aria-hidden="true" />
                <span className="text-[calc(18px*var(--t5-scale))] font-semibold uppercase text-[#f8fafc]">
                  OVERS {summary.overs}
                </span>
              </>
            ) : null}
            {summary.score ? (
              <>
                <span className="w-px shrink-0 self-stretch bg-white/25" aria-hidden="true" />
                <span className="text-[calc(40px*var(--t5-scale))] font-black tabular-nums text-[#f8fafc]">
                  {summary.score}
                </span>
              </>
            ) : null}
          </div>
        )}
      </div>
    </FullScreenPageShell>
  );
}
