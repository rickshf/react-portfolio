const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL ||
  "https://linkedin.com/in/rickshf";
const EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "rickshf@example.com";

export function Contact() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-gray-700 dark:text-gray-300">
        You can find me on
        <a
          href={LINKEDIN_URL}
          className="underline text-blue-600 dark:text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        {" "}
        or send an email to
        <a
          href={`mailto:${EMAIL}`}
          className="underline text-blue-600 dark:text-blue-400"
        >
          {EMAIL}
        </a>
        .
      </p>
    </section>
  );
}
