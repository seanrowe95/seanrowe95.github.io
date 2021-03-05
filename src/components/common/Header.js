import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" };
  const unclickedStyle = { color: "white" };
  return (
    <nav>
      <NavLink exact activeStyle={activeStyle} style={unclickedStyle} to="/">
        Home
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} style={unclickedStyle} to="/about">
        About
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} style={unclickedStyle} to="/contact">
        Contact
      </NavLink>
    </nav>
  );
}

export default Header;
