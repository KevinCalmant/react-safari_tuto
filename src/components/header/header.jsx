import React from 'react';

import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">
        Recipe Book
      </NavLink>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/recipes">
              Recipes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/shopping-list">
              Shopping List
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
