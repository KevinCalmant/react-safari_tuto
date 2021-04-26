import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import './RecipeDetail.css';
import { Link } from 'react-router-dom';

const RecipesDetail = ({ recipe }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const onOpenDropdownHandler = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          <img
            src={recipe.imagePath}
            alt={recipe.name}
            className="img-responsive recipe-detail-image"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <h1>{recipe.name}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <div className="btn-group">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              onClick={onOpenDropdownHandler}
            >
              Manage Recipe
            </button>
            <ul className={openDropdown ? 'dropdown-menu show' : 'dropdown-menu'}>
              <li className="dropdown-item">To Shopping List</li>
              <li className="dropdown-item">
                <Link to={`/recipes/${recipe.id}/edit`}>Recipes</Link>
              </li>
              <li className="dropdown-item">Delete Recipe</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">{recipe.description}</div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="list-group">
            <div className="list-group-item">
              {recipe.ingredients?.map((ingredient) => (
                <li
                  className="list-group-item"
                  key={shortid.generate()}
                >{`${ingredient.name} - ${ingredient.amount}`}</li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

RecipesDetail.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    imagePath: PropTypes.string,
    ingredients: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        amount: PropTypes.number,
      })
    ).isRequired,
  }).isRequired,
};

export default RecipesDetail;
