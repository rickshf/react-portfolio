export function Projects() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 space-y-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Projetos</h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">Portfolio</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Este próprio portfólio, construído com React, Tailwind e Vite. Código aberto e minimalista.
          </p>
          <a href="https://github.com/rickshf" target="_blank" className="text-sm underline text-blue-500 dark:text-blue-400">
            Ver no GitHub
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">Outros projetos</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Em breve: aplicativos, ferramentas e contribuições open source.
          </p>
        </div>
      </div>
    </section>
  );
}