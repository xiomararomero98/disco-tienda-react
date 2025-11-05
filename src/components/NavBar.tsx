
import { Link, NavLink } from "react-router-dom";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Disco-Tienda
        </Link>
        
        <ul className="flex space-x-4">
          <li><NavLink to="/productos" className={({isActive}) => isActive ? "text-yellow-400" : ""}>Productos</NavLink></li>
          <li><NavLink to="/carrito" className={({isActive}) => isActive ? "text-yellow-400" : ""}>Carrito</NavLink></li>
          <li><NavLink to="/nosotros" className={({isActive}) => isActive ? "text-yellow-400" : ""}>Nosotros</NavLink></li>
          <li><NavLink to="/contacto" className={({isActive}) => isActive ? "text-yellow-400" : ""}>Contacto</NavLink></li>
          <li><NavLink to="/blogs" className={({isActive}) => isActive ? "text-yellow-400" : ""}>Blogs</NavLink></li>
          <li><NavLink to="/login" className={({isActive}) => isActive ? "text-yellow-400" : ""}>Login</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;