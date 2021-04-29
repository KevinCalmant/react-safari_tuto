import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shortid from 'shortid';

import RecipesItem from './recipes-item/RecipeItem';
import { RecipesContext } from '../recipes-context';

const RecipesList = ({ setSelectedRecipe }) => {
  const [recipes] = useContext(RecipesContext);

  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          <Link className="btn btn-success" to="/recipes/new">
            New Recipe
          </Link>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-xs-12 list-group">
          {recipes?.map((recipe) => (
            <RecipesItem
              key={shortid.generate()}
              recipe={recipe}
              setSelectedRecipe={setSelectedRecipe}
            />
          ))}
        </div>
      </div>
    </>
  );
};

RecipesList.propTypes = {
  setSelectedRecipe: PropTypes.func.isRequired,
};

export default RecipesList;
