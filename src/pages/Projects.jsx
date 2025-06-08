
// Project data is defined in ../data/projects.json
import projects from "../data/projects.json";

export function Projects() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Projetos
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Você tem {projects.length} projetos.
      </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Render a simple card for each project */}
          {projects.map((proj) => (
          <div key={proj.slug} className="border rounded p-4 dark:border-gray-700 hover:shadow transition">
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              {proj.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              {proj.desc.pt}
            </p>
            {proj.link !== "#" && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline text-blue-500 dark:text-blue-400"
              >
                Ver no GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
