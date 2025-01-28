import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Cargando...");

  useEffect(() => {
    fetch("https://tu-dominio.onrender.com/")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch(() => setMessage("Error al conectar con el backend"));
  }, []);

  return <h1>{message}</h1>;
}

export default App;
