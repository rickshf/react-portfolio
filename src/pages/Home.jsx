import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export function Home() {
  const { t } = useLanguage();
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-6xl font-extrabold tracking-tight text-blue-500 mb-6">
        <a href="https://github.com/rickshf" className="hover:underline">
          {t("home.heading")}
        </a>
      </h1>

      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed mb-10">
        {t("home.tagline")}
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/projects"
          className="px-6 py-2 text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {t("home.btnProjects")}
        </Link>
        <Link
          to="/about"
          className="px-6 py-2 text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {t("home.btnAbout")}
        </Link>
        <Link
          to="/contact"
          className="px-6 py-2 text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {t("home.btnContact")}
        </Link>
      </div>
    </section>
  );
}
