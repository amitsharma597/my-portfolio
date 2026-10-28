import { useEffect, useState } from "react";

const roles = [
  "Aspiring Full Stack Developer",
  "React Developer",
  "MERN Stack Developer",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const isComplete = displayText === currentRole;

    const timer = setTimeout(
      () => {
        if (!deleting && isComplete) {
          setDeleting(true);
          return;
        }

        if (deleting && displayText === "") {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }

        setDisplayText(
          deleting
            ? currentRole.slice(0, displayText.length - 1)
            : currentRole.slice(0, displayText.length + 1),
        );
      },
      isComplete && !deleting ? 1200 : deleting ? 40 : 90,
    );

    return () => clearTimeout(timer);
  }, [displayText, deleting, roleIndex]);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-label">
            <span className="availability-dot"></span>
            AVAILABLE FOR OPPORTUNITIES
          </p>

          <h1>
            Hi, I'm
            <br />
            <span className="accent">Amit Sharma.</span>
          </h1>

          <h2 className="hero-role">
            {displayText}
            <span className="typing-cursor">|</span>
          </h2>

          <p className="hero-description">
            I build responsive, user-friendly web applications with modern
            technologies. I enjoy turning ideas into practical digital
            experiences through clean code and thoughtful design.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects <span>↗</span>
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
              aria-label="GitHub"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="particle-glow"></div>

          <div className="particle-artwork">
            <img src="/blue-particles.png" alt="" className="particle-image" />
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
