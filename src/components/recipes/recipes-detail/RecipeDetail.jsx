import React from 'react';
import PropTypes from 'prop-types';

import './RecipeDetail.css';

const RecipesDetail = ({ recipe }) => (
  <div>
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
          <button className="btn btn-primary dropdown-toggle" type="button">
            Manage Recipe
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item">To Shopping List</li>
            <li className="dropdown-item">Edit Recipe</li>
            <li className="dropdown-item">Delete Recipe</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">{recipe.description}</div>
    </div>
    <br />
    <div className="row">
      <div className="col-md-6">
        <div className="list-group">
          <div className="list-group-item">ingredients</div>
        </div>
      </div>
    </div>
  </div>
);

RecipesDetail.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipesDetail;
