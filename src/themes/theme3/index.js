import { createThemeModule } from "../contract.js";
import ControlPanelPage from "./pages/ControlPanelPage.jsx";
import OutputPage from "./pages/OutputPage.jsx";
import ControllerHost from "./controllers/ControllerHost.jsx";
import {
  controllerCatalog,
  controllerOutputPath,
  getController,
  getControllerEntry,
  getControllersByCategory,
  LOWER_THIRD_PANEL_ROW_SIZE,
} from "./controllers/registry.js";

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
