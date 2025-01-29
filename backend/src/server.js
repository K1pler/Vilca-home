import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 10000;  // ✅ Definir antes de usar
const app = express();
app.use(cors({ origin: "*" }));

console.log("Servidor en ejecución en el puerto:", PORT); // ✅ Ahora sí podemos imprimir PORT

// Configurar rutas absolutas para servir archivos estáticos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 📌 ✅ Definir primero las rutas de API antes de servir archivos estáticos
app.get("/api/departamentos", (req, res) => {
  console.log("Petición recibida en /api/departamentos");
  res.json([
    { titulo: "Estudio", descripcion: "Perfecto para solteros o parejas" },
    { titulo: "Un dormitorio", descripcion: "Ideal para parejas o pequeñas familias" },
    { titulo: "Dos dormitorios", descripcion: "Espacioso para familias" }
  ]);
});

// 📌 Después servir el frontend
app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => console.log(`Servidor en http://localhost:${PORT}`));
