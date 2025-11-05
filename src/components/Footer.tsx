import { Link } from "react-router-dom";
import "../assets/css/style.css"; // si ya lo importas globalmente, omite

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Disco-Tienda</h3>
          <p>Tu tienda nocturna de confianza ✨</p>
        </div>

        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p>📍 Santiago, Chile</p>
          <p>📞 +56 9 9999 9999</p>
          <p>✉️ contacto@disco-tienda.cl</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Disco-Tienda SPA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
