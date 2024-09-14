import React, { useContext } from "react";
import Form from "../Components/Form";
import { GlobalContext } from "../Components/utils/global.context"; // Importar el contexto

const Contact = () => {
  const { state } = useContext(GlobalContext); // Obtener el estado global

  return (
    <div className={`contact-form ${state.theme}`}>
      <h2>Contact Us</h2>
      <Form />
    </div>
  );
};

export default Contact;
