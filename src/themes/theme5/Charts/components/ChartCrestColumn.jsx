import React from "react";

/** Right-side stacked team crests with VS badge. */
export default function ChartCrestColumn({ top, bottom }) {
  return (
    <aside className="t5-chart-crests t5-chart-crests-anim" aria-label="Teams">
      <CrestFrame team={top} />
      <div className="t5-chart-vs-badge">
        <span className="t5-chart-vs uppercase">VS</span>
      </div>
      <CrestFrame team={bottom} />
    </aside>
  );
}

function CrestFrame({ team }) {
  const label = team?.name || team?.code || "";

  return (
    <div className="t5-chart-crest-frame">
      {team?.logoUrl ? (
        <img
          src={team.logoUrl}
          alt={label}
          className="h-full w-full object-contain p-[calc(16px*var(--t5-scale))]"
        />
      ) : (
        <span className="t5-chart-crest-fallback uppercase">{team?.code || "?"}</span>
      )}
    </div>
  );
}
