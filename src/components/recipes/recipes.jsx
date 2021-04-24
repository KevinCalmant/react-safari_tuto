import React from 'react';
import { Route } from 'react-router';
import PropTypes from 'prop-types';

import RecipesList from './recipes-list/RecipeList';
import RecipesDetail from './recipes-detail/RecipeDetail';
import RecipesStart from './recipes-start/RecipeStart';

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
