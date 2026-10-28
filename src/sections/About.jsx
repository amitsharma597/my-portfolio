const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">GET TO KNOW ME</p>

        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">
              Turning Ideas Into <span className="accent">Reality.</span>
            </h2>

            <p>
              I'm Amit, an aspiring full-stack developer passionate about
              building modern, responsive, and user-friendly web applications. I
              enjoy creating clean interfaces and turning ideas into practical
              digital experiences.
            </p>

            <p>
              Currently, I'm strengthening my skills in the MERN stack through
              hands-on projects, exploring new technologies, and solving
              real-world problems. My goal is to build applications that are not
              just visually appealing, but also reliable and easy to use.
            </p>

            <a href="#projects" className="btn-primary about-button">
              Explore My Work <span>↗</span>
            </a>
          </div>

          <div className="about-details">
            <div className="detail-card">
              <span className="detail-number">01</span>
              <div>
                <h3>Frontend Development</h3>
                <p>
                  Building responsive interfaces with React, JavaScript, and
                  CSS.
                </p>
              </div>
            </div>

            <div className="detail-card">
              <span className="detail-number">02</span>
              <div>
                <h3>Backend Development</h3>
                <p>Working with Node.js, Express, REST APIs, and databases.</p>
              </div>
            </div>

            <div className="detail-card">
              <span className="detail-number">03</span>
              <div>
                <h3>Building & Learning</h3>
                <p>
                  Turning concepts into projects while continuously improving my
                  skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
