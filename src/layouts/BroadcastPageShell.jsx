import React from "react";

/** Full-screen broadcast page background used by control panel and output. */
export default function BroadcastPageShell({ children, className = "" }) {
  return (
    <div className={`broadcast-page ${className}`.trim()}>{children}</div>
  );
}
