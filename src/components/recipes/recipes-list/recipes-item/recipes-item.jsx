import React from 'react';
import { NavLink } from 'react-router-dom';

import './recipes-item.css';

const RecipesItem = (props) => {
  const { recipe, setSelectedRecipe } = props;

  const handleRecipeClick = () => {
    setSelectedRecipe(recipe);
  };

  return (
    <div>
      <NavLink
        activeClassName='active'
        className='list-group-item list-group-item-action flex-column align-items-start clearfix'
        onClick={handleRecipeClick}
        to={`/recipes/${recipe.id}`}
      >
        <div className='float-md-left'>
          <div className='d-flex w-100 justify-content-between'>
            <h4 className='mb-1'>{recipe.name}</h4>
          </div>
          <p className='list-group-item-text'>{recipe.description}</p>
        </div>
        <span className='float-md-right ml-5'>
          <img
            src={recipe.imagePath}
            alt={recipe.name}
            className='img-responsive recipe__image'
          />
        </span>
      </NavLink>
    </div>
  );
};
export default RecipesItem;
