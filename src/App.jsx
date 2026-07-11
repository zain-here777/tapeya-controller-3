import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ControlPanelPage from "./pages/ControlPanelPage.jsx";
import OutputPage from "./pages/OutputPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ControlPanelPage />} />
        <Route path="/output" element={<OutputPage />} />
        <Route path="/output/:category/:id" element={<OutputPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
