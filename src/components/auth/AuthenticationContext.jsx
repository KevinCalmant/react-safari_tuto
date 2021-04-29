import React, { createContext, useState } from 'react';
import { PropTypes } from 'prop-types';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  return (
    <AuthenticationContext.Provider value={[isAuthenticated, setAuthenticated, token, setToken]}>
      {children}
    </AuthenticationContext.Provider>
  );
};

AuthenticationContextProvider.propTypes = {
  children: PropTypes.elementType.isRequired,
};
