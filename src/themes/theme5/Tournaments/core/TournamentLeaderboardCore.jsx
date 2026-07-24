import React from "react";
import { mergeConfig } from "../../../../shared/utils/mergeConfig.js";
import BreakBackground from "../../Breaks/components/BreakBackground.jsx";
import TournamentLeaderboardRow from "../components/TournamentLeaderboardRow.jsx";
import { t4Motion } from "../../utils/motion.js";

/**
 * Theme 5 full-screen tournament leaderboard shell.
 * Static layout: Tailwind. Enter cascades: motion.css classes.
 *
 * @param {"center"|"top"} [props.layout="center"]
 */
export default function TournamentLeaderboardCore({
  match,
  baseConfig,
  config: configOverride = {},
  layout = "center",
}) {
  if (!match) return null;

  const config = mergeConfig(baseConfig, configOverride);
  const title = match.title ?? config.title ?? "";
  const tournament = match.tournament ?? "";
  const entries = Array.isArray(match.entries) ? match.entries : [];
  const featured = match.featured ?? entries[0] ?? null;

  const innerClass =
    layout === "top"
      ? "relative z-[1] mx-auto flex h-full w-full max-w-[calc(1480px*var(--t5-scale))] items-stretch justify-start gap-[calc(48px*var(--t5-scale))] box-border px-[calc(48px*var(--t5-scale))] py-[calc(36px*var(--t5-scale))]"
      : "relative z-[1] flex h-full w-full items-center justify-center gap-[calc(48px*var(--t5-scale))] box-border px-[calc(56px*var(--t5-scale))] py-[calc(48px*var(--t5-scale))]";

  const leftClass =
    layout === "top"
      ? "flex min-h-0 min-w-0 flex-1 flex-col justify-start gap-[calc(32px*var(--t5-scale))]"
      : "flex w-[min(52%,calc(780px*var(--t5-scale)))] min-w-0 flex-col justify-center gap-[calc(36px*var(--t5-scale))]";

  return (
    <div className="absolute inset-0 overflow-hidden bg-[var(--t5-surface)] select-none font-montserrat">
      <BreakBackground />

      <div className={innerClass}>
        <div className={leftClass}>
          <header className="t5-tlb-header-anim flex shrink-0 flex-col gap-[calc(4px*var(--t5-scale))]">
            {title ? (
              <h1 className="m-0 text-[calc(36px*var(--t5-scale))] font-extrabold uppercase leading-[1.05] tracking-[calc(1.5px*var(--t5-scale))] text-[#f8fafc]">
                {title}
              </h1>
            ) : null}
            {tournament ? (
              <p className="m-0 text-[calc(18px*var(--t5-scale))] font-semibold uppercase leading-[1.15] tracking-[calc(1.5px*var(--t5-scale))] text-[#f8fafc]/80">
                {tournament}
              </p>
            ) : null}
          </header>

          <div className="flex flex-col gap-[calc(14px*var(--t5-scale))]">
            {entries.map((entry, index) => (
              <TournamentLeaderboardRow
                key={`${entry.rank}-${entry.name}-${index}`}
                rank={entry.rank ?? index + 1}
                name={entry.name ?? ""}
                value={entry.value ?? "—"}
                index={index}
                active={Boolean(
                  featured &&
                    (featured.rank ?? 1) === (entry.rank ?? index + 1)
                )}
              />
            ))}
          </div>
        </div>

        {featured ? (
          <aside
            className={`t5-tlb-featured-anim flex w-[min(28%,calc(340px*var(--t5-scale)))] shrink-0 flex-col ${
              layout === "top" ? "self-center" : ""
            }`}
          >
            <div className="relative flex aspect-[3/4] max-h-[calc(420px*var(--t5-scale))] w-full items-end justify-center overflow-hidden rounded-t-[calc(6px*var(--t5-scale))] bg-[var(--t5-panel-primary)]">
              {featured.photoUrl ? (
                <img
                  src={featured.photoUrl}
                  alt={featured.name || "Featured player"}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-[calc(36px*var(--t5-scale))] font-extrabold uppercase text-white/35">
                    {(featured.name || "?").slice(0, 1)}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <div className="flex items-center justify-center bg-[var(--t5-panel-primary)] px-[calc(16px*var(--t5-scale))] py-[calc(14px*var(--t5-scale))]">
                <span className="text-center text-[calc(22px*var(--t5-scale))] font-bold uppercase leading-[1.1] tracking-[calc(1px*var(--t5-scale))] text-[#f8fafc]">
                  {featured.name}
                </span>
              </div>
              <div className="flex items-center justify-center rounded-b-[calc(6px*var(--t5-scale))] bg-gradient-to-br from-[#0ea5e9] to-[#0369a1] px-[calc(16px*var(--t5-scale))] py-[calc(18px*var(--t5-scale))]">
                <span className={`${t4Motion("softIn")} text-[calc(48px*var(--t5-scale))] font-extrabold tabular-nums leading-none text-white`}>
                  {featured.value ?? "—"}
                </span>
              </div>
            </div>
          </aside>
        ) : null}
      </div>
    </div>
  );
}
