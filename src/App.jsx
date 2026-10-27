import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main id="home" className="container section">
        <h1 className="section-title">
          My <span className="accent">Portfolio</span>
        </h1>

        <p className="section-description">
          Building something awesome. Stay tuned!
        </p>
      </main>
    </>
  );
}

export default App;
