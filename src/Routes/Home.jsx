import React, { useContext } from "react";
import Card from "../Components/Card";
import { GlobalContext } from "../Components/utils/global.context";

const Home = () => {
  const { state } = useContext(GlobalContext); 

  return (
    <div className={`home ${state.theme}`}>
      <h2>Our Dentists</h2>
      <div className="dentist-list">
        {state.dentists.map((dentist) => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
