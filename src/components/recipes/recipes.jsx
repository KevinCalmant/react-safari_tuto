import React from 'react';
import { Route, Switch, useHistory } from 'react-router';
import PropTypes from 'prop-types';

import RecipesList from './recipes-list/RecipeList';
import RecipesDetail from './recipes-detail/RecipeDetail';
import RecipesStart from './recipes-start/RecipeStart';
import RecipeEdit from './recipe-edit/RecipeEdit';

const Recipes = ({ recipes, setRecipes }) => {
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

  const onRemoveRecipe = () => {
    setRecipes(recipes.filter((recipe) => recipe.id !== selectedRecipe.id));
    history.push('/recipes');
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <RecipesList
          recipes={recipes}
          setSelectedRecipe={setSelectedRecipe}
          onRemoveRecipe={onRemoveRecipe}
        />
      </div>
      <div className="col-md-5">
        <Switch>
          <Route exact path="/recipes" component={RecipesStart} />
          <Route path="/recipes/new" component={() => <RecipeEdit onAddRecipe={onAddRecipe} />} />
          <Route
            path="/recipes/:id/edit"
            component={() => <RecipeEdit recipes={recipes} onAddRecipe={onAddRecipe} />}
          />
          <Route
            path="/recipes/:id"
            component={() => (
              <RecipesDetail recipe={selectedRecipe} onRemoveRecipe={onRemoveRecipe} />
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

Recipes.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      imagePath: PropTypes.string,
    })
  ).isRequired,
  setRecipes: PropTypes.func.isRequired,
};

export default Recipes;
