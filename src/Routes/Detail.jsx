import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../Components/utils/global.context"; // Importar el contexto

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(GlobalContext); // Obtener el estado global

  // Encontrar el dentista en el estado global por ID
  const dentist = state.dentists.find((dentist) => dentist.id === parseInt(id));

  return (
    <div className={`detail ${state.theme}`}>
      {dentist ? (
        <>
          <h2>{dentist.name}</h2>
          <p>Username: {dentist.username}</p>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
