import React from "react";

/** Right-side stacked team crests with VS badge. */
export default function ChartCrestColumn({ top, bottom }) {
  return (
    <aside className="t4-chart-crests t4-chart-crests-anim" aria-label="Teams">
      <CrestFrame team={top} />
      <div className="t4-chart-vs-badge">
        <span className="t4-chart-vs uppercase">VS</span>
      </div>
      <CrestFrame team={bottom} />
    </aside>
  );
}

function CrestFrame({ team }) {
  const label = team?.name || team?.code || "";

  return (
    <div className="t4-chart-crest-frame">
      {team?.logoUrl ? (
        <img
          src={team.logoUrl}
          alt={label}
          className="h-full w-full object-contain p-[calc(16px*var(--t4-scale))]"
        />
      ) : (
        <span className="t4-chart-crest-fallback uppercase">{team?.code || "?"}</span>
      )}
    </div>
  );
}
