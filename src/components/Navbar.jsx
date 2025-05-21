import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
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
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="ml-4 bg-transparent border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm"
          >
            <option value="pt">PT</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
