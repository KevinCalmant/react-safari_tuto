import React from 'react';
import { Route } from 'react-router';
import PropTypes from 'prop-types';

import RecipesList from './recipes-list/recipes-list';
import RecipesStart from './recipes-start/recipes-start';
import RecipesDetail from './recipes-detail/recipes-detail';

const Recipes = ({ match }) => {
  const [path] = React.useState(match.path);
  const [selectedRecipe, setSelectedRecipe] = React.useState({});

  return (
    <div className="row">
      <div className="col-md-6">
        <RecipesList setSelectedRecipe={setSelectedRecipe} />
      </div>
      <div className="col-md-6">
        <Route path={`${path}/:id`} component={() => <RecipesDetail recipe={selectedRecipe} />} />
        <Route exact path={`${path}`} component={RecipesStart} />
      </div>
    </div>
  );
};

Recipes.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default Recipes;
