import React, { useContext } from "react";
import { Link } from 'react-router-dom'; // Importar Link
import { GlobalContext } from "../Components/utils/global.context"; // Importar el contexto

const Navbar = () => {
  const { state, toggleTheme } = useContext(GlobalContext); // Obtener el estado y la función toggleTheme

  return (
    <nav className={`navbar ${state.theme}`}>
      <h1>Dental Clinic</h1>
      <div className="nav-links">
      <Link to="/">Home</Link>
        <Link to="/favs">Favoritos</Link>
        <Link to="/contact">Contacto</Link>
      </div>
      <button onClick={toggleTheme}>
        {state.theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
