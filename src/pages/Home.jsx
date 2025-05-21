export function Home() {
  return (
    <section className="pt-24 px-6 max-w-3xl mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
          Olá, eu sou [Seu Nome]
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Sou um desenvolvedor web focado em design minimalista, performance e conteúdo útil. Gosto de criar coisas simples, úteis e duráveis.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/projects"
          className="px-6 py-3 rounded border border-gray-300 dark:border-gray-700 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition"
        >
          Ver Projetos
        </a>
        <a
          href="/blog"
          className="px-6 py-3 rounded border border-gray-300 dark:border-gray-700 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition"
        >
          Blog Técnico
        </a>
        <a
          href="/about"
          className="px-6 py-3 rounded border border-gray-300 dark:border-gray-700 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition"
        >
          Sobre mim
        </a>
      </div>

      <footer className="text-sm text-gray-500 dark:text-gray-400 pt-16">
        <p>Esse site é um experimento de clareza, simplicidade e código limpo.</p>
      </footer>
    </section>
  );
}
