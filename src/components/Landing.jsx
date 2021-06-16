import React, { useContext } from "react";

import "@styles/components/Landing.css";
import CurrentAirlineContext from "@context/CurrentAirlineContext";

const Landing = () => {
  const { airline } = useContext(CurrentAirlineContext);
  return (
    <div className="landing">
      <span>
        <h1>¡Hola! Bienvenido</h1>
        {airline && (
          <span>
            <h2>Sabemos que quieres viajar en un {airline}</h2>
            <h6>Por favor, diligencia el siguiente formulario</h6>
          </span>
        )}
      </span>
    </div>
  );
};

export default Landing;
