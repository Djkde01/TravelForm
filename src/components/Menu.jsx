import React, { useState, useContext } from "react";

import data from "@assets/menuItems";
import CurrentAirlineContext from "@context/CurrentAirlineContext";
import "@styles/components/Menu.css";

const Menu = () => {
  const [click, setClick] = useState(false);
  const { airline, setAirline } = useContext(CurrentAirlineContext);

  const items = data.items;

  const handleClick = (item) => {
    setAirline(item);
    setClick(!click);
  };
  return (
    <header className="header">
      <strong>Travel Form</strong>
      <nav>
        <ul
          className={click ? "header-menu--list active" : "header-menu--list"}
        >
          {items.map((item) => (
            <li
              key={item.id}
              className="header-menu--item"
              onClick={() => handleClick(item.name)}
            >
              <a>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className={click ? "pencet Diam" : "pencet"} onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
