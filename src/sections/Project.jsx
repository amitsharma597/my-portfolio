const projects = [
  {
    number: "01",
    title: "Todo App",
    description:
      "A task management application with task creation, deletion, completion tracking, a theme toggle, and Local Storage persistence.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
    github: "https://github.com/amitsharma597/DailyFlow",
    demo: "https://dailyflow100.netlify.app/",
  },
  {
    number: "02",
    title: "Movie Search App",
    description:
      "A modern movie search application built with React and powered by the OMDb API. Search for movies and TV shows, explore detailed information, and save your favorite movies with a clean, responsive user interface.",
    technologies: [
      "React",
      "JavaScript",
      "CSS3",
      "OMDb API",
      "Vite",
      "Local Storage",
    ],
    github: "https://github.com/amitsharma597/Movie-search-app",
    demo: "https://movie-search-app-psi-ochre.vercel.app/",
  },
  {
    number: "03",
    title: "Expense Tracker (MERN)",
    description:
      "A full-stack expense management application built with the MERN stack. The application allows users to securely manage their expenses, track spending activity, view analytics, and interact with an integrated AI assistant.",
    technologies: [
      "CSS3",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Gemini API",
    ],

    github: "https://github.com/amitsharma597/mern-expense-tracker",
    demo: "https://mern-expense-tracker-kappa.vercel.app/",
  },
];

function Project() {
  return (
    <section id="projects" className="section projects-section">
      {" "}
      <div className="container">
        {" "}
        <p className="section-label">SOME THINGS I'VE BUILT</p>
        <div className="projects-heading">
          <div>
            <h2 className="section-title">
              Featured <span className="accent">Projects.</span>
            </h2>

            <p className="section-description">
              A selection of projects I've built while learning and improving my
              development skills.
            </p>
          </div>

          <a
            href="https://github.com/amitsharma597"
            target="_blank"
            rel="noreferrer"
            className="projects-github"
          >
            More on GitHub <span>↗</span>
          </a>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">{project.number}</span>

                {/* <a
                  href={project.github || "https://github.com/amitsharma597"}
                  target="_blank"
                  rel="noreferrer"
                  className="project-github"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  ↗
                </a> */}
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-links">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live Demo ↗
                  </a>
                )}

                <a
                  href={project.github || "https://github.com/amitsharma597"}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
