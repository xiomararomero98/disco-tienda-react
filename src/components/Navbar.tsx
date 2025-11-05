import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
//import "../assets/css/style.css"; // si ya lo importas en main.tsx, puedes quitar esta línea

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar" role="navigation" aria-label="Main">
      <div className="logo">
        <Link to="/" className="titulo-navbar">
          Disco-Tienda
        </Link>
      </div>

      {/* Botón hamburguesa para mobile */}
      <button
        id="menu-toggle"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="nav-links"
        onClick={() => setOpen(o => !o)}
      >
        ☰
      </button>

      <nav>
        <ul id="nav-links" className={`nav-links ${open ? "show" : ""}`} onClick={() => setOpen(false)}>
          <li>
            <NavLink to="/" end>Inicio</NavLink></li>
          <li>
            <NavLink to="/carrito">Carrito</NavLink></li>
          <li>
            <NavLink to="/nosotros">Nosotros</NavLink></li>
          <li>
            <NavLink to="/contacto">Contacto</NavLink></li>
          <li>
            <NavLink to="/login">Login</NavLink></li>
          <li>
            <NavLink to="/productos" className={({isActive}) => isActive ? "active" : undefined}>Productos</NavLink></li>

        </ul>
      </nav>
    </header>
  );
}
