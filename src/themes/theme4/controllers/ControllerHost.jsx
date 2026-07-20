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

  if (category === "lower-third") {
    return (
      <LowerThirdEnter animKey={`${category}/${id}`}>
        <Controller {...props} />
      </LowerThirdEnter>
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
