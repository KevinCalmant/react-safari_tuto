import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import RecipesItem from './recipes-item/RecipeItem';

import recipesData from './recipes';

const RecipesList = ({ setSelectedRecipe }) => {
  const [recipes, setRecipes] = React.useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <button className="btn btn-success" type="button">
            New Recipe
          </button>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-xs-12 list-group">
          {recipes.map((recipe) => (
            <RecipesItem key={recipe.name} recipe={recipe} setSelectedRecipe={setSelectedRecipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

RecipesList.propTypes = {
  setSelectedRecipe: PropTypes.func.isRequired,
};

export default RecipesList;
