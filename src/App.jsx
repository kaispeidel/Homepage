

function App() {
  return (
    <div className="site-wrapper" data-theme="light">
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">
            <a href="#home" className="nav-logo">KS</a>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#home" className="nav-link">HOME</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">PROJECTS</a>
            </li>
            <li className="nav-item nav-dropdown">
              <a href="#creative" className="nav-link">
                CREATIVE WORK <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#design" className="dropdown-link">Design</a></li>
                <li><a href="#development" className="dropdown-link">Development</a></li>
                <li><a href="#photography" className="dropdown-link">Photography</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">CONTACT</a>
            </li>
          </ul>
          <button className="theme-toggle">☀️</button>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero-3d" id="home">
          <div className="hero-overlay">
            <h1 className="hero-title">Kai Speidel</h1>
            <p className="hero-subtitle">Web Developer & Designer</p>
            <div className="scroll-indicator">↓</div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <div className="section-line"></div>
          </div>
          <div className="content-block">
            <p className="intro-text">
              Hi! I'm Kai, a passionate web developer focused on building beautiful and functional websites. 
              I love working with React, CSS, and modern web technologies.
            </p>
            
            <div className="skills-section">
              <h3 className="skills-title">My Skills</h3>
              <div className="skill-grid">
                <div className="skill-item">React</div>
                <div className="skill-item">JavaScript</div>
                <div className="skill-item">CSS</div>
                <div className="skill-item">HTML</div>
                <div className="skill-item">Node.js</div>
                <div className="skill-item">UI/UX</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-header">
            <div className="section-header-content">
              <h2 className="section-title">Projects</h2>
              <div className="view-toggle">
                <button className="view-btn active" data-view="list">List</button>
                <button className="view-btn" data-view="grid">Grid</button>
              </div>
            </div>
            <div className="section-line"></div>
          </div>
          <div className="projects-container" data-view="list">
            <div className="project-item">
              <div className="project-header">
                <h3 className="project-title">Portfolio Website</h3>
                <div className="project-links">
                  <a href="https://github.com/kaispeidel/Homepage" className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href="https://kaispeidel.github.io/Homepage/" className="project-link" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
              <p className="project-description">
                A clean, modern portfolio website built with React and Vite. Features a responsive design, dark/light mode, and smooth animations.
              </p>
              <p className="project-tech">React, Vite, CSS, GitHub Pages</p>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <div className="section-line"></div>
          </div>
          <div className="social-links">
            <a href="mailto:kai@email.com" className="social-item">
              <i>✉️</i> kai@email.com
            </a>
            <a href="https://github.com/kaispeidel" className="social-item" target="_blank" rel="noopener noreferrer">
              <i>🐙</i> GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Kai Speidel. All rights reserved.</p>
          <p className="footer-note">Built with React & Vite</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
