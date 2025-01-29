
import express from "express"; //Crea servidor http
import path from "path"; //Pata mejorar la acccesibilidad
import { fileURLToPath } from "url"; //Pata mejorar la acccesibilidad
import cors from "cors"; //Para que el frontend se comunique con el backend sin bloqueos
import dotenv from "dotenv"; //Carga variables de entorno desde .env.

dotenv.config();

const PORT = process.env.PORT || 10000;  // ✅ Definir antes de usar
const app = express();
app.use(cors({ origin: "https://vilca-home.onrender.com" })); //Solo este origen puede acceder a los recursos del backend

// Configurar rutas absolutas para servir archivos estáticos
const __filename = fileURLToPath(import.meta.url); //Obtiene la ruta absoluta de server.js
const __dirname = path.dirname(__filename); //Obtiene el directorio de server.js

// 📌 ✅ Definir primero las rutas de API antes de servir archivos estáticos
app.get("/api/departamentos", (req, res) => {
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
