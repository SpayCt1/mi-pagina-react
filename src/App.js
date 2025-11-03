import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero">
        <h1>SkyFly</h1>
        <p>Encuentra los mejores vuelos al mejor precio</p>
        <div className="search-box">
          <input type="text" placeholder="Origen" />
          <input type="text" placeholder="Destino" />
          <input type="date" />
          <button>Buscar vuelos</button>
        </div>
      </header>

      {/* Destinations Section */}
      <section className="destinations">
        <h2>Destinos populares</h2>
        <div className="cards">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" alt="París" />
            <h3>París</h3>
            <p>Desde $320 USD</p>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba" alt="Tokio" />
            <h3>Tokio</h3>
            <p>Desde $550 USD</p>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1" alt="Nueva York" />
            <h3>Nueva York</h3>
            <p>Desde $280 USD</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>¿Por qué elegir SkyFly?</h2>
        <div className="feature-grid">
          <div className="feature">
            <h3>✈️ Variedad de aerolíneas</h3>
            <p>Compara más de 100 aerolíneas y consigue la mejor oferta.</p>
          </div>
          <div className="feature">
            <h3>💰 Precios bajos garantizados</h3>
            <p>Usamos inteligencia de precios para ofrecerte las mejores tarifas.</p>
          </div>
          <div className="feature">
            <h3>🕓 Atención 24/7</h3>
            <p>Nuestro equipo de soporte está disponible en todo momento.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 SkyFly | Tu próximo destino comienza aquí 🌍</p>
      </footer>
    </div>
  );
}

export default App;