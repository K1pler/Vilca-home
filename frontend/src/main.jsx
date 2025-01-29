import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import "./styles/output.css"; // Importar TailwindCSS
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
