/** Minimal theme-agnostic loading shell — no theme-specific styles. */
export default function AppLoadingShell({ message = "Loading…" }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#111",
        color: "#aaa",
        fontFamily: "system-ui, sans-serif",
        fontSize: "14px",
      }}
    >
      {message}
    </div>
  );
}
