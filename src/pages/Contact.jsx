import { useLanguage } from "../context/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">{t("contact.heading")}</h2>
      <p className="text-gray-700 dark:text-gray-300">
        {t("contact.findMe")}
        <a href="https://linkedin.com" className="underline text-blue-600 dark:text-blue-400">
          {t("contact.linkedin")}
        </a>
        {t("contact.orEmail")}
        <strong>{t("contact.email")}</strong>.
      </p>
    </section>
  );
}
