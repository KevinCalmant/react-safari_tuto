import React, {Component} from "react";
import { Route } from "react-router";

import RecipesList from "./recipes-list/recipes-list";
import RecipesStart from "./recipes-start/recipes-start";
import RecipesDetail from "./recipes-detail/recipes-detail";

const Recipes = ({ match }) => {
  const state = { selectedRecipe: null };

  const recipeCallBack = (recipe) => {
    state.selectedRecipe = recipe;
    console.log(recipe);
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <RecipesList recipeCallback={recipeCallBack}/>
      </div>
      <div className="col-md-6">
        <Route path={`${match.path}/:id`} component={RecipesDetail} />
        <Route exact path={`${match.path}`} component={RecipesStart}/>
      </div>
    </div>
  );
};

export default Recipes;