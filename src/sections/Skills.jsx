const skillGroups = [
  {
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["MongoDB"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "Vite"],
  },
];

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <p className="section-label">TECHNOLOGIES & EXPERTISE</p>

        <div className="skills-heading">
          <div>
            <h2 className="section-title">
              My Technical <span className="accent">Toolkit.</span>
            </h2>

            <p className="section-description">
              The technologies and tools I'm learning and using to build modern,
              responsive web applications.
            </p>
          </div>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <span className="skill-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
