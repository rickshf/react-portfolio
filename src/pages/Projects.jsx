import { useLanguage } from "../context/LanguageContext";

const projetos = [
  {
    slug: "portfolio",
    title: "Portfolio",
    desc: {
      pt: "Este próprio portfólio, construído com React, Tailwind e Vite.",
      en: "This very portfolio, built with React, Tailwind and Vite."
    },
    link: "https://github.com/rickshf"
  },
  {
    slug: "soon",
    title: "Em breve",
    desc: {
      pt: "Aplicativos, ferramentas e contribuições open source.",
      en: "Apps, tools and open source contributions."
    },
    link: "#"
  }
];

export function Projects() {
  const { t, lang } = useLanguage();
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        {t("projects.heading")}
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        {t("projects.description", projetos.length)} {/* optional */}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projetos.map((proj) => (
          <div key={proj.slug} className="border rounded p-4 dark:border-gray-700 hover:shadow transition">
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              {proj.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              {proj.desc[lang]}
            </p>
            {proj.link !== "#" && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline text-blue-500 dark:text-blue-400"
              >
                {t("projects.viewGithub")}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
