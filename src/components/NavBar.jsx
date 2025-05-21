import { Link } from "react-router-dom";

export function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="py-4 border-b dark:border-gray-700">
      <div className="flex justify-between items-center max-w-4xl mx-auto px-4">
        <h1 className="text-xl font-semibold">
          <Link to="/">Meu Portfólio</Link>
        </h1>
        <nav className="space-x-4">
          <Link to="/">Início</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contato</Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 text-sm border px-2 py-1 rounded"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </nav>
      </div>
    </header>
  );
}