import React from "react";
import { Link } from "react-router-dom";
import { AvatarVisibilityProvider } from "../LowerThird/core/AvatarVisibilityContext.jsx";
import ControllerAvatarToggle from "./ControllerAvatarToggle.jsx";

/** Full-screen broadcast shell for controller output. */
export default function ControllerLayout({ children, title, panelLink = "/" }) {
  return (
    <AvatarVisibilityProvider>
      <div className="output-page">
        <div className="output-toolbar">
          <div className="output-toolbar-breadcrumb output-toolbar-breadcrumb-light">
            <Link to={panelLink} className="output-page-link">
              Control panel
            </Link>
            {title ? (
              <>
                <span className="text-black/30">/</span>
                <span className="text-black/90">{title}</span>
              </>
            ) : null}
          </div>
          <ControllerAvatarToggle />
        </div>
        {children}
      </div>
    </AvatarVisibilityProvider>
  );
}
