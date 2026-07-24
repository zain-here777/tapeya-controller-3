import { lazy } from "react";
import { createThemeModule } from "../contract.js";
import {
  controllerCatalog,
  controllerOutputPath,
  getController,
  getControllerEntry,
  getControllersByCategory,
  LOWER_THIRD_PANEL_ROW_SIZE,
} from "./controllers/registry.js";

const ControlPanelPage = lazy(() => import("./pages/ControlPanelPage.jsx"));
const OutputPage = lazy(() => import("./pages/OutputPage.jsx"));
const ControllerHost = lazy(() => import("./controllers/ControllerHost.jsx"));

async function loadStyles() {
  await import("./styles/index.css");
}

export default createThemeModule({
  id: "theme3",
  label: "Theme 3",
  loadStyles,
  ControlPanelPage,
  OutputPage,
  getController,
  getControllerEntry,
  getControllersByCategory,
  controllerOutputPath,
  ControllerHost,
  controllerCatalog,
  LOWER_THIRD_PANEL_ROW_SIZE,
});

export {
  loadStyles,
  ControlPanelPage,
  OutputPage,
  getController,
  getControllerEntry,
  getControllersByCategory,
  controllerOutputPath,
  controllerCatalog,
  LOWER_THIRD_PANEL_ROW_SIZE,
  ControllerHost,
};
