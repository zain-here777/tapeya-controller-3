import React from "react";
import { Link } from "react-router-dom";

/** Theme 4 output page shell — isolated from theme 3 ControllerLayout. */
export default function OutputLayout({ children, title, panelLink = "/" }) {
  return (
    <div className="t4-broadcast-page flex flex-col">
      <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-2">
        <div className="flex items-center gap-2 text-sm">
          <Link to={panelLink} className="text-sky-400 hover:text-sky-300">
            Control panel
          </Link>
          {title ? (
            <>
              <span className="text-white/30">/</span>
              <span className="text-white/90">{title}</span>
            </>
          ) : null}
        </div>
      </div>
      <div className="flex min-h-0 flex-1 flex-col justify-end">{children}</div>
    </div>
  );
}
