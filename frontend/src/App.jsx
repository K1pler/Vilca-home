import { useEffect, useState } from "react";
import Home from "./pages/Home";

function App() {
  const [departamentos, setDepartamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://vilca-home.onrender.com/api/departamentos")
      .then((res) => {
        if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error("Datos inválidos recibidos");
        setDepartamentos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setDepartamentos([]); // Prevenir que sea undefined
        setLoading(false);
      });
  }, []);
  

  if (loading) return <h1>Cargando departamentos...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return <Home departamentos={departamentos} />;
}

export default App;