import { Header } from "../components/Header";
import { DepartamentoCard } from "../components/DepartamentoCard";
import { Footer } from "../components/Footer";

export default function Home({ departamentos = [] }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Nuestros Departamentos</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.isArray(departamentos) && departamentos.length > 0 ? (
            departamentos.map((dep, index) => <DepartamentoCard key={index} {...dep} />)
          ) : (
            <p className="text-gray-500">No hay departamentos disponibles.</p>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
