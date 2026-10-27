function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-label">
            <span></span> AVAILABLE FOR OPPORTUNITIES
          </p>

          <h1>
            Hi, I'm <span className="accent">Amit Sharma.</span>
            <br />I build things for the web.
          </h1>

          <h2>Aspiring Full Stack Developer</h2>

          <p className="hero-description">
            I build responsive, user-friendly web applications with modern
            technologies. I enjoy turning ideas into practical digital
            experiences through clean code and thoughtful design.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View My Projects <span>↗</span>
            </a>

            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/YOUR-USERNAME"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-card">
            <div className="code-header">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>developer.js</p>
            </div>

            <div className="code-content">
              <p>
                <span className="code-muted">01</span>{" "}
                <span className="code-purple">const</span> developer = {"{"}
              </p>
              <p>
                <span className="code-muted">02</span> &nbsp; name:{" "}
                <span className="code-green">'Amit Sharma'</span>,
              </p>
              <p>
                <span className="code-muted">03</span> &nbsp; role:{" "}
                <span className="code-green">'Developer'</span>,
              </p>
              <p>
                <span className="code-muted">04</span> &nbsp; skills: [
              </p>
              <p>
                <span className="code-muted">05</span> &nbsp;&nbsp;{" "}
                <span className="code-orange">'React'</span>,
              </p>
              <p>
                <span className="code-muted">06</span> &nbsp;&nbsp;{" "}
                <span className="code-orange">'JavaScript'</span>,
              </p>
              <p>
                <span className="code-muted">07</span> &nbsp;&nbsp;{" "}
                <span className="code-orange">'Node.js'</span>
              </p>
              <p>
                <span className="code-muted">08</span> &nbsp; ],
              </p>
              <p>
                <span className="code-muted">09</span> &nbsp; learning:{" "}
                <span className="code-purple">true</span>
              </p>
              <p>
                <span className="code-muted">10</span> {"}"};
              </p>
              <p className="code-comment">// Always building something new.</p>
            </div>

            <div className="code-footer">
              <span className="code-status"></span>
              Open to learning & opportunities
            </div>
          </div>

          <div className="hero-badge">
            <span>✦</span> Turning ideas into code
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-line"></span>
      </div>
    </section>
  );
}

export default Hero;
