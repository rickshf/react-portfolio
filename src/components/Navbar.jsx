import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="w-full py-4 px-6 border-b dark:border-gray-700 text-sm">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link to="/" className="font-semibold text-gray-800 dark:text-white">
          rickshf
        </Link>
        <div className="space-x-4">
          <Link to="/projects" className="hover:underline">
            Projetos
          </Link>
          <Link to="/about" className="hover:underline">
            Sobre
          </Link>
          <Link to="/contact" className="hover:underline">
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
}