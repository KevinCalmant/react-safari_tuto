import React from 'react';
import { Route, Switch, useHistory } from 'react-router';
import PropTypes from 'prop-types';

import RecipesList from './recipes-list/RecipeList';
import RecipesDetail from './recipes-detail/RecipeDetail';
import RecipesStart from './recipes-start/RecipeStart';
import RecipeEdit from './recipe-edit/RecipeEdit';

import recipesData from './recipesData';

const Recipes = ({ match }) => {
  const [recipes, setRecipes] = React.useState(recipesData);

  const [selectedRecipe, setSelectedRecipe] = React.useState({});

  const history = useHistory();

  const onAddRecipe = (recipe) => {
    const updatedRecipes = recipes.slice();

    let newRecipe;
    if (recipe.id != null) {
      newRecipe = recipe;
      updatedRecipes.splice(updatedRecipes.map((rec) => rec.id).indexOf(recipe.id), 1, recipe);
    } else {
      newRecipe = {
        ...recipe,
        id: Math.max(...recipes.map((rec) => rec.id)) + 1,
      };

      updatedRecipes.push(newRecipe);
    }
    setRecipes(updatedRecipes);
    setSelectedRecipe(newRecipe);

    history.push(`/recipes/${newRecipe.id}`);
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <RecipesList recipes={recipes} setSelectedRecipe={setSelectedRecipe} />
      </div>
      <div className="col-md-5">
        <Switch>
          <Route exact path={`${match.path}`} component={RecipesStart} />
          <Route
            path={`${match.path}/new`}
            component={() => <RecipeEdit onAddRecipe={onAddRecipe} />}
          />
          <Route
            path={`${match.path}/:id/edit`}
            component={() => <RecipeEdit recipes={recipes} onAddRecipe={onAddRecipe} />}
          />
          <Route
            path={`${match.path}/:id`}
            component={() => <RecipesDetail recipe={selectedRecipe} />}
          />
        </Switch>
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
