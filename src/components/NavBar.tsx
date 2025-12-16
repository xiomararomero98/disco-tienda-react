import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getUsuario, logout } from "../utils/auth";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const usuario = getUsuario();

  return (
    <header className="navbar" role="navigation" aria-label="Main">
      <div className="logo">
        <Link to="/" className="titulo-navbar">
          Disco-Tienda
        </Link>
      </div>

      {/* Botón hamburguesa */}
      <button
        id="menu-toggle"
        className="menu-toggle"
        type="button"
        aria-controls="nav-links"
        onClick={() => setOpen(o => !o)}
      >
        ☰
      </button>

      <nav>
        <ul
          id="nav-links"
          className={`nav-links ${open ? "show" : ""}`}
          onClick={() => setOpen(false)}
        >
          <li><NavLink to="/" end>Inicio</NavLink></li>

          {/* Mostrar carrito SOLO si está logeado */}
          {usuario && (
            <li><NavLink to="/carrito">Carrito</NavLink></li>
          )}

          <li><NavLink to="/nosotros">Nosotros</NavLink></li>
          <li><NavLink to="/contacto">Contacto</NavLink></li>

          {/* Mostrar Admin SOLO si el rol es ADMIN */}
          {usuario?.rol?.nombre === "ADMIN" && (
            <li><NavLink to="/admin">Admin</NavLink></li>
          )}

          {/* Si NO está logeado → Login y Registro */}
          {!usuario && (
            <>
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/registro">Registro</NavLink></li>
            </>
          )}

          {/* Si SÍ está logeado → Hola + Logout */}
          {usuario && (
            <>
              <li className="navbar-user">Hola, {usuario.nombre}</li>
              <li>
                <button onClick={logout} className="btn-logout">
                  Salir
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
