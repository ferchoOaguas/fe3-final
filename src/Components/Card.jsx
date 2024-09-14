import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Components/utils/global.context"; // Importar el contexto

const Card = ({ name, username, id }) => {
  const { state, addFavorite, removeFavorite } = useContext(GlobalContext); // Obtener los métodos del contexto

  // Verificar si el dentista ya está en favoritos
  const isFavorite = state.favorites.some((fav) => fav.id === id);

  const handleFavoriteClick = () => {
    const dentist = { name, username, id };
    if (isFavorite) {
      removeFavorite(dentist);
      alert(`${name} removed from favorites!`);
    } else {
      addFavorite(dentist);
      alert(`${name} added to favorites!`);
    }
  };

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{username}</p>
      <Link to={`/detail/${id}`}>View Details</Link> {/* Link dinámico a la página de detalles */}
      <button onClick={handleFavoriteClick} className="favButton">
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default Card;
