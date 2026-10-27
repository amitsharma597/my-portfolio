import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Amit Sharma. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
