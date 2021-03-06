import React from "react";
import { NavLink } from "react-router-dom";

function Layout({children}) {
  return (
    <div>
      <ul className="horizontal ho2">
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
          
        </li>
        <li>
          <NavLink to="/tomas">Tomas</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      {children}
    </div>
  );
}

export default Layout;
