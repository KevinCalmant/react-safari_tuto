import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './RecipeItem.css';

const RecipesItem = ({ recipe, setSelectedRecipe }) => {
  const handleRecipeClick = () => {
    setSelectedRecipe(recipe);
  };

  return (
    <div>
      <NavLink
        activeClassName="active"
        className="list-group-item list-group-item-action flex-column align-items-start clearfix"
        onClick={handleRecipeClick}
        to={`/recipes/${recipe.id}`}
      >
        <div className="float-md-left">
          <div className="d-flex w-100 justify-content-between">
            <h4 className="mb-1">{recipe.name}</h4>
          </div>
          <p className="list-group-item-text">{recipe.description}</p>
        </div>
        <span className="float-md-right ml-5">
          <img src={recipe.imagePath} alt={recipe.name} className="img-responsive recipe-image" />
        </span>
      </NavLink>
    </div>
  );
};

RecipesItem.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
  setSelectedRecipe: PropTypes.func.isRequired,
};

export default RecipesItem;
