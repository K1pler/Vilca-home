import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 10000;  // ✅ Definir antes de usar
const app = express();
app.use(cors());

console.log("Servidor en ejecución en el puerto:", PORT); // ✅ Ahora sí podemos imprimir PORT

// Configurar rutas absolutas para servir archivos estáticos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist", "index.html"));
});

// Endpoint para obtener los departamentos
app.get("/api/departamentos", (req, res) => {
  console.log("Petición recibida en /api/departamentos");
  res.json([
    { titulo: "Estudio", descripcion: "Perfecto para solteros o parejas" },
    { titulo: "Un dormitorio", descripcion: "Ideal para parejas o pequeñas familias" },
    { titulo: "Dos dormitorios", descripcion: "Espacioso para familias" }
  ]);
});

app.listen(PORT, "0.0.0.0", () => console.log(`Servidor en http://localhost:${PORT}`));
