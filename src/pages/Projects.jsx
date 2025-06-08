
// Static list of projects shown on the Projects page
const projects = [
  {
    slug: "portfolio",
    title: "Portfolio",
    desc: {
      en: "This very portfolio, built with React, Tailwind and Vite."
    },
    link: "https://github.com/rickshf"
  },
  {
    slug: "soon",
    title: "Em breve",
    desc: {
      en: "Apps, tools and open source contributions."
    },
    link: "#"
  }
];

export function Projects() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Projects
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        You have {projects.length} projects.
      </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Render a simple card for each project */}
          {projects.map((proj) => (
          <div key={proj.slug} className="border rounded p-4 dark:border-gray-700 hover:shadow transition">
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              {proj.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              {proj.desc.en}
            </p>
            {proj.link !== "#" && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline text-blue-500 dark:text-blue-400"
              >
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
