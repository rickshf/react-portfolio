import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Blog } from "./pages/Blog";
import { Post } from "./pages/Post";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
// Provides theme state (light/dark) to the rest of the app
import ThemeProvider from "./context/ThemeProvider.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
          <Navbar />
          <main className="max-w-4xl mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<Post />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>

  );
}
