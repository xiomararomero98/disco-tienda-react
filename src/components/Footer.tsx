import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Tu Tienda de Discos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;