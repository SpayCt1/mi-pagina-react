import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>¡Hola! Soy <span>Alex</span></h1>
        <p>Desarrollador web y creador de experiencias digitales.</p>
        <a href="#contacto" className="btn">Contáctame</a>
      </header>

      <section className="about">
        <h2>Sobre mí</h2>
        <p>
          Me apasiona construir sitios web modernos, rápidos y funcionales.
          Trabajo con React, Node.js y diseño UI/UX. Siempre buscando nuevos retos.
        </p>
      </section>

      <section className="projects">
        <h2>Proyectos</h2>
        <div className="project-grid">
          <div className="card">
            <h3>Portafolio React</h3>
            <p>Un sitio personal con animaciones y diseño minimalista.</p>
          </div>
          <div className="card">
            <h3>App de tareas</h3>
            <p>Organiza tus pendientes con interfaz limpia y funcional.</p>
          </div>
          <div className="card">
            <h3>API de clima</h3>
            <p>Consulta el clima en tiempo real usando OpenWeather.</p>
          </div>
        </div>
      </section>

      <footer id="contacto">
        <p>© 2025 Alex Dev | Hecho con ❤️ y React</p>
      </footer>
    </div>
  );
}

export default App;
