import React from "react";
import {Link} from "react-router-dom";
import { useRouteMatch } from "react-router";

import './recipes-item.css';

const RecipesItem = (props) => {
  const recipe = props.recipe;

  const path = useRouteMatch().path;

  return (
    <div>
      <Link className="list-group-item list-group-item-action flex-column align-items-start clearfix" to={`${path}/${recipe.id}`}>
        <div className="float-md-left">
          <div className="d-flex w-100 justify-content-between">
            <h4 className="mb-1">{recipe.name}</h4>
          </div>
          <p className="list-group-item-text">{recipe.description}</p>
        </div>
        <span className="float-md-right ml-5">
          <img src={recipe.imagePath} alt={recipe.name} className="img-responsive recipe__image"/>
        </span>
      </Link>
    </div>
  );
};

export default RecipesItem;