import React from "react";

/** Theme 4 full-screen page shell. */
export default function BroadcastPageShell({ children, className = "" }) {
  return (
    <div className={`t4-broadcast-page ${className}`.trim()}>{children}</div>
  );
}
