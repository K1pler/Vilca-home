import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Configurar rutas absolutas para servir archivos estáticos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir la carpeta `frontend/dist` generada por Vite
app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist", "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
