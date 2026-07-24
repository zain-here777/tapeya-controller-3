import React from "react";
import { Link } from "react-router-dom";

/** Theme 5 output page shell — lower third flush to viewport bottom (matches theme 3 output-page). */
export default function OutputLayout({ children, title, panelLink = "/" }) {
  return (
    <div className="t5-output-page">
      <div className="t5-output-toolbar">
        <div className="t5-output-toolbar-breadcrumb">
          <Link to={panelLink} className="t5-output-toolbar-link">
            Control panel
          </Link>
          {title ? (
            <>
              <span className="t5-output-toolbar-sep">/</span>
              <span className="t5-output-toolbar-title">{title}</span>
            </>
          ) : null}
        </div>
      </div>
      {children}
    </div>
  );
}
