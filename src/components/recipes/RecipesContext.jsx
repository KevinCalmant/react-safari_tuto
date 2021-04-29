import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import axios from '../../axios-connection';
import { GlobalSpinnerContext } from '../../GlobalSpinnerContext';

export const RecipesContext = createContext();

export const RecipesContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState();
  // eslint-disable-next-line no-unused-vars
  const [isGlobalSpinnerOn, setGlobalSpinner] = useContext(GlobalSpinnerContext);

  useEffect(() => {
    axios
      .get('/recipes.json')
      .then((results) => results.data)
      .then((data) => {
        setGlobalSpinner(true);
        setRecipes(data);
        setGlobalSpinner(false);
      });
  }, []);

  return (
    <RecipesContext.Provider value={[recipes, setRecipes]}>{children}</RecipesContext.Provider>
  );
};

RecipesContextProvider.propTypes = {
  children: PropTypes.elementType.isRequired,
};
