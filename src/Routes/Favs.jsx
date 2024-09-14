import React, { useContext } from "react";
import Card from "../Components/Card";
import { GlobalContext } from "../Components/utils/global.context"; // Importar el contexto

const Favs = () => {
  const { state } = useContext(GlobalContext); // Obtener el estado global

  return (
    <div className={`favs ${state.theme}`}>
      <h2>Favorites</h2>
      <div className="fav-list">
        {state.favorites.length > 0 ? (
          state.favorites.map((dentist) => (
            <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
          ))
        ) : (
          <p>No favorites added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
