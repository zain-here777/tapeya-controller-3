import React from "react";

/**
 * Chart page title + tournament subtitle.
 */
export default function ChartHeader({ title, subtitle }) {
  return (
    <header className="absolute left-[calc(70px*var(--cs))] right-[calc(520px*var(--cs))] top-[calc(56px*var(--cs))] z-[3]">
      {title ? (
        <h1 className="ctrl-t-chart-title m-0 uppercase text-white">{title}</h1>
      ) : null}
      {subtitle ? (
        <p className="ctrl-t-chart-subtitle mt-[calc(10px*var(--cs))] mb-0 uppercase text-white">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
