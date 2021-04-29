import React, { useContext, useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router';

import { RecipesContext } from './recipes-context';

import RecipesList from './recipes-list/RecipeList';
import RecipesDetail from './recipes-detail/RecipeDetail';
import RecipesStart from './recipes-start/RecipeStart';
import RecipeEdit from './recipe-edit/RecipeEdit';

const Recipes = () => {
  const [recipes, setRecipes] = useContext(RecipesContext);
  const [selectedRecipe, setSelectedRecipe] = useState({});

  const history = useHistory();
  const onAddRecipe = (recipe) => {
    const updatedRecipes = recipes.slice();
    let newRecipe;
    if (recipe.id) {
      newRecipe = recipe;
      updatedRecipes.splice(updatedRecipes.map((rec) => rec.id).indexOf(recipe.id), 1, recipe);
    } else {
      newRecipe = {
        ...recipe,
        id: Math.max(...recipes.map((rec) => rec.id)) + 1,
      };
      updatedRecipes.push(newRecipe);
    }
    setSelectedRecipe(newRecipe);
    setRecipes(updatedRecipes);
  };

  const onRemoveRecipe = () => {
    setRecipes(recipes.filter((recipe) => recipe.id !== selectedRecipe.id));
    history.push('/recipes');
  };

  useEffect(() => {
    if (selectedRecipe.id) {
      history.push(`/recipes/${selectedRecipe.id}`);
    }
  }, [selectedRecipe]);

  return (
    <div className="row">
      <div className="col-md-6">
        <RecipesList setSelectedRecipe={setSelectedRecipe} onRemoveRecipe={onRemoveRecipe} />
      </div>
      <div className="col-md-5">
        <Switch>
          <Route exact path="/recipes" component={RecipesStart} />
          <Route path="/recipes/new" component={() => <RecipeEdit onAddRecipe={onAddRecipe} />} />
          <Route
            path="/recipes/:id/edit"
            component={() => <RecipeEdit onAddRecipe={onAddRecipe} />}
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

export default Recipes;
