import React from 'react';

import { Link} from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Recipe Book</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link className="nav-link" to="/recipes">Recipes</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/shopping-list">Shopping List</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;