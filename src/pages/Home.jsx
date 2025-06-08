import { Link } from "react-router-dom";

export function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-6xl font-extrabold tracking-tight text-blue-500 mb-6">
        <a href="https://github.com/rickshf" className="hover:underline">
          rickshf
        </a>
      </h1>

      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed mb-10">
        Desenvolvedor web focado em minimalismo, código limpo e boas práticas.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/projects"
          className="px-6 py-2 text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Projetos
        </Link>
        <Link
          to="/about"
          className="px-6 py-2 text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Sobre mim
        </Link>
        <Link
          to="/contact"
          className="px-6 py-2 text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Contato
        </Link>
      </div>
    </section>
  );
}
