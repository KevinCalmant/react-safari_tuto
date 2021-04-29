import React, { useContext, useState } from 'react';

import { Link, NavLink } from 'react-router-dom';
import { AuthenticationContext } from '../auth/AuthenticationContext';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const { isAuthenticated } = useContext(AuthenticationContext);

  const managerButtonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    outline: 'inherit',
  };

  return (
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
        <div>
          <ul className="navbar-nav mr-right">
            <li className="nav-item">
              {isAuthenticated ? (
                <span className="nav-link">Logout</span>
              ) : (
                <div className="row">
                  <Link className="nav-link" to="/signin">
                    Register
                  </Link>
                  <Link className="nav-link" to="/signup">
                    Login
                  </Link>
                </div>
              )}
            </li>
            {isAuthenticated ? (
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  style={managerButtonStyle}
                  data-toggle="dropdown"
                  type="button"
                  onClick={() => setOpen(!isOpen)}
                >
                  Manager
                </button>
                <div
                  className={isOpen ? 'dropdown-menu show' : 'dropdown-menu'}
                  aria-labelledby="navbarDropdown"
                >
                  <span className="dropdown-item">Fetch Data</span>
                  <span className="dropdown-item">Save Data</span>
                </div>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
