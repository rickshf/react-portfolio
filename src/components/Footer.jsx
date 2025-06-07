export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t dark:border-gray-700">
      © {year} Henrique Almeida. All rights reserved.
    </footer>
  );
}
