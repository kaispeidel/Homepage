

function App() {
  return (
    <div className="portfolio-bg">
      <nav className="navbar">
        <div className="navbar-logo">KS</div>
        <ul className="navbar-links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li className="dropdown">
            <a href="#creative">CREATIVE WORK <span className="arrow">▼</span></a>
          </li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
        <div className="navbar-icon">🌙</div>
      </nav>
      <div className="portfolio-container">
        <header>
          <h1>Kai Speidel</h1>
          <p className="bio">Web Developer & Designer</p>
        </header>
        <main>
          <section>
            <h2>About Me</h2>
            <p>
              Hi! I'm Kai, a passionate web developer focused on building beautiful and functional websites. I love working with React, CSS, and modern web technologies.
            </p>
          </section>
          <section>
            <h2>Contact</h2>
            <ul>
              <li>Email: <a href="mailto:kai@email.com">kai@email.com</a></li>
              <li>GitHub: <a href="https://github.com/kaispeidel" target="_blank" rel="noopener noreferrer">kaispeidel</a></li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
