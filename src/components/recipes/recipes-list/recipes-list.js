import React from "react";
import RecipesItem from "./recipes-item/recipes-item";

const RecipesList = (props) => {
  const recipes = [
    {id: 0, name: 'Tasty Schnitzel', description: 'A super-tasty Schnitzel - just awesome!', imagePath: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG', ingredients: []},
    {id: 1, name: 'Big Fat Burger', description: 'Big burger what else ?', imagePath: 'https://komonews.com/resources/media/ef00dd06-fb3a-4dee-9699-f98731cb94b3-large16x9_AP_0910250104103.jpg?1492047825352', ingredients: []}
  ];

  const recipesItem = [];
  recipes.forEach((recipe, index) => {
    recipesItem.push(<RecipesItem onclick={props.recipeCallback(recipe)} key={recipe.name} recipe={recipe}/>)
  });

  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <button className="btn btn-success">New Recipe</button>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-xs-12 list-group">
          { recipesItem }
        </div>
      </div>
    </div>
  );
};

export default RecipesList;