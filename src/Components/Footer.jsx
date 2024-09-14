import React from 'react';
import './Footer.css'; // Crear un archivo CSS separado para estilos específicos del Footer

const Footer = () => {
  return (
    <footer className="footer">
      <p>Powered by</p>
      <img src="/images/DH.png" alt='DH-logo' className="footer-logo" />
    </footer>
  );
}

export default Footer;
