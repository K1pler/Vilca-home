import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/pages/Home";
import "./input.css"; // Importar TailwindCSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
