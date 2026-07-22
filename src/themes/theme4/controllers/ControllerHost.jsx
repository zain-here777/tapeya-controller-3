import React, { useEffect, useState } from "react";
import { getController } from "./registry.js";

/**
 * Theme 4 controller host — isolated from theme 3 ControllerHost.
 */
export default function ControllerHost({ category, id, ...props }) {
  const Controller = getController(category, id);

  if (!Controller) {
    if (import.meta.env.DEV) {
      console.warn(`[Theme4 ControllerHost] Unknown controller: ${category}/${id}`);
    }
    return null;
  }

  if (category === "lower-third" || category === "tour-hit") {
    return (
      <LowerThirdEnter animKey={`${category}/${id}`}>
        <Controller {...props} />
      </LowerThirdEnter>
    );
  }

  if (category === "full-screen-transition" || category === "breaks") {
    return (
      <FullScreenTransitionEnter animKey={`${category}/${id}`}>
        <Controller {...props} />
      </FullScreenTransitionEnter>
    );
  }

  if (category === "full-screen") {
    if (id === "top-batter" || id === "top-bowler") {
      return (
        <TournamentEnter animKey={`${category}/${id}`}>
          <Controller {...props} />
        </TournamentEnter>
      );
    }
    return (
      <FullScreenTransitionEnter animKey={`${category}/${id}`}>
        <Controller {...props} />
      </FullScreenTransitionEnter>
    );
  }

  if (category === "tournaments") {
    return (
      <TournamentEnter animKey={`${category}/${id}`}>
        <Controller {...props} />
      </TournamentEnter>
    );
  }

  if (category === "charts") {
    return (
      <ChartEnter animKey={`${category}/${id}`}>
        <Controller {...props} />
      </ChartEnter>
    );
  }

  if (category === "player-stats") {
    if (String(id).endsWith("-lt")) {
      return (
        <LowerThirdEnter animKey={`${category}/${id}`}>
          <Controller {...props} />
        </LowerThirdEnter>
      );
    }
    return (
      <FullScreenTransitionEnter animKey={`${category}/${id}`}>
        <Controller {...props} />
      </FullScreenTransitionEnter>
    );
  }

  return <Controller {...props} />;
}

function LowerThirdEnter({ animKey, children }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDone(false);
  }, [animKey]);

  return (
    <div className={`t4-lt-enter-shell${done ? " t4-lt-enter-shell--done" : ""}`}>
      <div key={animKey} className="t4-lt-enter-from-bottom" onAnimationEnd={() => setDone(true)}>
        {children}
      </div>
    </div>
  );
}

/** Fade the full-screen transition shell when switching controllers. */
function FullScreenTransitionEnter({ animKey, children }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDone(false);
  }, [animKey]);

  return (
    <div
      className={`t4-fst-enter-shell${done ? " t4-fst-enter-shell--done" : ""}`}
    >
      <div key={animKey} className="t4-fst-enter" onAnimationEnd={() => setDone(true)}>
        {children}
      </div>
    </div>
  );
}

/** Cascade reveal for tournament boards — distinct from FST/Breaks fade. */
function TournamentEnter({ animKey, children }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDone(false);
  }, [animKey]);

  return (
    <div className={`t4-tlb-enter-shell${done ? " t4-tlb-enter-shell--done" : ""}`}>
      <div
        key={animKey}
        className="t4-tlb-enter"
        onAnimationEnd={(event) => {
          if (event.target === event.currentTarget) setDone(true);
        }}
      >
        {children}
      </div>
    </div>
  );
}

/** Page fade + internal stagger handled in charts.css */
function ChartEnter({ animKey, children }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDone(false);
  }, [animKey]);

  return (
    <div className={`t4-chart-enter-shell${done ? " t4-chart-enter-shell--done" : ""}`}>
      <div
        key={animKey}
        className="t4-chart-enter"
        onAnimationEnd={(event) => {
          if (event.target === event.currentTarget) setDone(true);
        }}
      >
        {children}
      </div>
    </div>
  );
}
