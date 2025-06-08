import { Link } from "react-router-dom";
// Custom hook that exposes the current theme and a toggle helper
// The hook is defined in src/context/useTheme.js
import useTheme from "../context/useTheme";


export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full py-4 px-6 border-b dark:border-gray-700 text-sm">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link to="/" className="font-semibold text-gray-800 dark:text-white">
          rickshf
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:underline">Início</Link>
          <Link to="/about" className="hover:underline">Sobre</Link>
          <Link to="/projects" className="hover:underline">Projetos</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/contact" className="hover:underline">Contato</Link>
          {/* Toggle between light and dark mode */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-lg"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

        </div>
      </div>
    </nav>
  );
}
