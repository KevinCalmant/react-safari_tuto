import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const GlobalSpinnerContext = createContext();

export const GlobalSpinnerContextProvider = ({ children }) => {
  const [isGlobalSpinnerOn, setGlobalSpinner] = useState(false);

  return (
    <GlobalSpinnerContext.Provider value={[isGlobalSpinnerOn, setGlobalSpinner]}>
      {children}
    </GlobalSpinnerContext.Provider>
  );
};

GlobalSpinnerContextProvider.propTypes = {
  children: PropTypes.elementType.isRequired,
};
