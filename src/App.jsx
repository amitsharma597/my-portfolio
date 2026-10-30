import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Project from "./sections/Project";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Amit Sharma. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
