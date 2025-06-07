import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export function Navbar() {
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="w-full py-4 px-6 border-b dark:border-gray-700 text-sm">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link to="/" className="font-semibold text-gray-800 dark:text-white">
          rickshf
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:underline">{t("nav.home")}</Link>
          <Link to="/about" className="hover:underline">{t("nav.about")}</Link>
          <Link to="/projects" className="hover:underline">{t("nav.projects")}</Link>
          <Link to="/blog" className="hover:underline">{t("nav.blog")}</Link>
          <Link to="/contact" className="hover:underline">{t("nav.contact")}</Link>
          <button
            onClick={toggleTheme}
            className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
}
