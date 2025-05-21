export function Home() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
        <span className="text-blue-600 dark:text-blue-400">Henrique Almeida</span>
      </h1>

      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed mb-8">
        Desenvolvedor web focado em performance, acessibilidade e minimalismo. Gosto de criar experiências digitais simples e elegantes usando tecnologias modernas como React, Tailwind, e Vite.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/projects"
          className="px-6 py-2 text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Meus Projetos
        </a>
        <a
          href="/about"
          className="px-6 py-2 text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Sobre mim
        </a>
        <a
          href="/contact"
          className="px-6 py-2 text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Contato
        </a>
      </div>
    </section>
  );
}
