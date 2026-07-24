import React from "react";

/** Chart page title + tournament subtitle. */
export default function ChartHeader({ title, subtitle }) {
  return (
    <header className="t5-chart-header t5-chart-header-anim">
      {title ? <h1 className="t5-chart-title m-0 uppercase">{title}</h1> : null}
      {subtitle ? (
        <p className="t5-chart-subtitle m-0 mt-[calc(10px*var(--t5-scale))] uppercase">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
