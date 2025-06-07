import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  return (
    <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t dark:border-gray-700">
      {t("footer.copyright").replace("{year}", year)}
    </footer>
  );
}
