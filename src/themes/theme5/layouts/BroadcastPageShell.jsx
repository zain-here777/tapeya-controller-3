import React from "react";

/** Theme 5 full-screen page shell. */
export default function BroadcastPageShell({ children, className = "" }) {
  return (
    <div className={`t5-broadcast-page ${className}`.trim()}>{children}</div>
  );
}
