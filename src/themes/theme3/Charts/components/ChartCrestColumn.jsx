import React from "react";

/**
 * Right-side stacked team crests with VS badge.
 */
export default function ChartCrestColumn({ top, bottom }) {
  return (
    <aside
      className="absolute bottom-0 right-[calc(70px*var(--cs))] top-0 z-[3] flex w-[calc(280px*var(--cs))] flex-col items-center justify-center gap-[calc(26px*var(--cs))]"
      aria-label="Teams"
    >
      <CrestFrame team={top} tone="batsman" />
      <div className="flex h-[calc(72px*var(--cs))] w-[calc(72px*var(--cs))] shrink-0 items-center justify-center rounded-full bg-bowler-panel shadow-lg">
        <span className="ctrl-t-chart-vs uppercase text-white">VS</span>
      </div>
      <CrestFrame team={bottom} tone="bowler" />
    </aside>
  );
}

function CrestFrame({ team, tone }) {
  const label = team?.name || team?.code || "";
  const frameBg = tone === "bowler" ? "bg-bowler-panel" : "bg-panel-player";

  return (
    <div
      className={`flex h-[calc(220px*var(--cs))] w-[calc(220px*var(--cs))] shrink-0 items-center justify-center overflow-hidden rounded-[calc(18px*var(--cs))] border border-white/20 ${frameBg}`}
    >
      {team?.logoUrl ? (
        <img
          src={team.logoUrl}
          alt={label}
          className="h-full w-full object-contain p-[calc(20px*var(--cs))]"
        />
      ) : (
        <span className="ctrl-t-chart-crest-fallback uppercase text-white/50">
          {team?.code || "?"}
        </span>
      )}
    </div>
  );
}
