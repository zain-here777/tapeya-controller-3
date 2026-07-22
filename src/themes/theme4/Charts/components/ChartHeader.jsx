import React from "react";

/** Chart page title + tournament subtitle. */
export default function ChartHeader({ title, subtitle }) {
  return (
    <header className="t4-chart-header t4-chart-header-anim">
      {title ? <h1 className="t4-chart-title m-0 uppercase">{title}</h1> : null}
      {subtitle ? (
        <p className="t4-chart-subtitle m-0 mt-[calc(10px*var(--t4-scale))] uppercase">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
