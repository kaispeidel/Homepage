
import './App.css';

function App() {
  return (
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
  );
}

export default App;
