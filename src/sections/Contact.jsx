function Contact() {
  return (
    <section id="contact" className="section contact-section">
      {" "}
      <div className="container">
        {" "}
        <p className="section-label">GET IN TOUCH</p>
        <h2 className="section-title">
          Let's Work <span className="accent">Together.</span>
        </h2>
        <p className="section-description contact-intro">
          Have a project in mind or an opportunity to discuss? Feel free to
          reach out. I'd love to hear from you.
        </p>
        <div className="contact-content">
          <h3>Let's start a conversation.</h3>

          <p>
            I'm open to discussing new projects, development opportunities, and
            collaborations.
          </p>

          <div className="contact-links">
            <a href="mailto:amitsharmahsp@gmail.com" className="contact-item">
              <span className="contact-icon">✉</span>
              <div>
                <span>Email</span>
                <strong>amitsharmahsp508@gmail.com</strong>
              </div>
            </a>

            <a
              href="https://github.com/amitsharma597"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">⌘</span>
              <div>
                <span>GitHub</span>
                <strong>Explore my repositories ↗</strong>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">in</span>
              <div>
                <span>LinkedIn</span>
                <strong>Connect with me ↗</strong>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
