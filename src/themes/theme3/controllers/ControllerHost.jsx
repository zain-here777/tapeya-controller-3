import React, { Suspense, useEffect, useState } from "react";
import { getController } from "./registry.js";

/**
 * Renders a registered controller by category + id.
 * Controllers are React.lazy() boundaries so only the active graphic loads.
 *
 * @param {string} category
 * @param {string} id
 * @param {Object} [props] - Forwarded to the controller (e.g. match, config)
 */
export default function ControllerHost({ category, id, ...props }) {
  const Controller = getController(category, id);

  if (!Controller) {
    if (import.meta.env.DEV) {
      console.warn(`[ControllerHost] Unknown controller: ${category}/${id}`);
    }
    return null;
  }

  const graphic = (
    <Suspense fallback={null}>
      <Controller {...props} />
    </Suspense>
  );

  if (category === "lower-third" || category === "tour-hit") {
    return (
      <LowerThirdEnter animKey={`${category}/${id}`}>
        {graphic}
      </LowerThirdEnter>
    );
  }

  return graphic;
}

/**
 * Clips during entrance so the slide does not create page scroll,
 * then unlocks overflow for avatar pop-outs.
 */
function LowerThirdEnter({ animKey, children }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDone(false);
  }, [animKey]);

  return (
    <div
      className={`lt-enter-shell w-full shrink-0${done ? " lt-enter-shell--done" : ""}`}
    >
      <div
        key={animKey}
        className="lt-enter-from-bottom"
        onAnimationEnd={() => setDone(true)}
      >
        {children}
      </div>
    </div>
  );
}
