import React, { useState } from "react";

const CurrentAirlineContext = React.createContext({});

export function CurrentAirlineContextProvider({ children }) {
  const [airline, setAirline] = useState();
  return (
    <CurrentAirlineContext.Provider value={{ airline, setAirline }}>
      {children}
    </CurrentAirlineContext.Provider>
  );
}

export default CurrentAirlineContext;
