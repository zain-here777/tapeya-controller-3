import React from "react";
import { Link } from "react-router-dom";

/** Theme 4 output page shell — lower third flush to viewport bottom (matches theme 3 output-page). */
export default function OutputLayout({ children, title, panelLink = "/" }) {
  return (
    <div className="t4-output-page">
      <div className="t4-output-toolbar">
        <div className="t4-output-toolbar-breadcrumb">
          <Link to={panelLink} className="t4-output-toolbar-link">
            Control panel
          </Link>
          {title ? (
            <>
              <span className="t4-output-toolbar-sep">/</span>
              <span className="t4-output-toolbar-title">{title}</span>
            </>
          ) : null}
        </div>
      </div>
      {children}
    </div>
  );
}
