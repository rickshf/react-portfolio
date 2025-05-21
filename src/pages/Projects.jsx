const projetos = [
  {
    titulo: "Portfolio",
    descricao: "Este próprio portfólio, construído com React, Tailwind e Vite.",
    link: "https://github.com/rickshf"
  },
  {
    titulo: "Em breve",
    descricao: "Aplicativos, ferramentas e contribuições open source.",
    link: "#"
  }
];

export function Projects() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Projetos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projetos.map((proj, idx) => (
          <div key={idx} className="border rounded p-4 dark:border-gray-700 hover:shadow transition">
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{proj.titulo}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{proj.descricao}</p>
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