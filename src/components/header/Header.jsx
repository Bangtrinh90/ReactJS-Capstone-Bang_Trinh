import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-container-logo">
          <img src="../../assets/img/image 3.png" alt="" />
        </div>
        <div className="nav-container-menu">
          <ul>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
