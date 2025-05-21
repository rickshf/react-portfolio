import { useLanguage } from "../context/LanguageContext";

export function About() {
  const { t } = useLanguage();
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 space-y-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        {t("about.heading")}
      </h1>
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        {t("about.desc1")}
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        {t("about.desc2")}
      </p>
    </section>
  );
}
