import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="w-full py-4 px-6 border-b dark:border-gray-700 text-sm">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link to="/" className="font-semibold text-gray-800 dark:text-white">
          rickshf
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
