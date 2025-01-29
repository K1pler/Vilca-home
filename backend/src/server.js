import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());

// Configurar rutas absolutas para servir archivos estáticos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist", "index.html"));
});

// Endpoint para obtener los departamentos
app.get("/api/departamentos", (req, res) => {
  const departamentos = [
    { titulo: "Estudio", descripcion: "Perfecto para solteros o parejas" },
    { titulo: "Un dormitorio", descripcion: "Ideal para parejas o pequeñas familias" },
    { titulo: "Dos dormitorios", descripcion: "Espacioso para familias" }
  ];
  res.json(departamentos);
});

const PORT = process.env.PORT || 4000;