import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{
      background: "#0f172a",
      color: "white",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "32px",
      fontFamily: "sans-serif"
    }}>
      Focus Flow AI
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);