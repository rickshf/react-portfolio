export function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-6xl font-extrabold tracking-tight text-blue-500 mb-6">
        <a
          href="https://github.com/rickshf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          rickshf
        </a>
      </h1>

      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed mb-10">
        Desenvolvedor web com foco em minimalismo, código limpo e boas práticas. 
        Crio aplicações modernas com React, Tailwind e tecnologias open source.
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