import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 text-center space-y-4">
      <h1 className="text-2xl font-bold">Page not found</h1>
      <Link to="/" className="text-blue-500 hover:underline">
        Go back home
      </Link>
    </section>
  );
}
