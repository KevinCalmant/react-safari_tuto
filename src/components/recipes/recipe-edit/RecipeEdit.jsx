import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import PropTypes from 'prop-types';

import './RecipeEdit.css';
import recipes from '../recipesData';
import InputField from './InputField';

const RecipeEdit = ({ onAddRecipe }) => {
  const params = useParams();

  const [recipeFields, setRecipeField] = useState({
    id: null,
    name: '',
    imagePath: '',
    description: '',
    ingredients: [],
  });

  const inputsHandler = (event) => {
    setRecipeField({
      ...recipeFields,
      [event.target.name]: event.target.value,
    });
  };

  const onAddIngredientsHandler = () => {
    const ingredients = recipeFields.ingredients.slice();

    ingredients.push({
      name: '',
      amount: 0,
    });

    setRecipeField({
      ...recipeFields,
      ingredients,
    });
  };

  const inputArrayHandler = (event, index) => {
    const ingredients = recipeFields.ingredients.slice();

    ingredients[index][event.target.name] = event.target.value;

    setRecipeField({
      ...recipeFields,
      ingredients,
    });
  };

  const onRemoveIngredientHandler = (index) => {
    const ingredients = recipeFields.ingredients.slice();

    ingredients.splice(index, 1);

    setRecipeField({
      ...recipeFields,
      ingredients,
    });
  };

  const onAddClick = () => {
    onAddRecipe(recipeFields);
  };

  useEffect(() => {
    if (params?.id) {
      setRecipeField(recipes.find((recipe) => recipe.id === parseInt(params.id, 10)));
    }
  }, []);

  return (
    <div className="row recipe-edit">
      <div className="col-md-12 form-group">
        <div className="row">
          <div className="col-md-12 ml-2 mb-2">
            <button type="submit" className="btn btn-success" onClick={onAddClick}>
              Save
            </button>
            <button type="button" className="btn btn-danger ml-3">
              cancel
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ml-2 mb-2">
            <InputField
              label="Name"
              value={recipeFields.name}
              type="text"
              name="name"
              inputsHandler={inputsHandler}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ml-2 mb-2">
            <InputField
              label="Image"
              value={recipeFields.imagePath}
              type="text"
              name="imagePath"
              inputsHandler={inputsHandler}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-11 ml-2 mt-3">
            {recipeFields.imagePath ? (
              <img
                src={recipeFields.imagePath}
                alt={recipeFields.name}
                className="img-responsive recipe-image-preview"
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-md-11 ml-2 mt-3">
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                name="description"
                className="form-control"
                rows="6"
                value={recipeFields.description}
                onChange={inputsHandler}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-11 ml-3">
            {recipeFields.ingredients.map((ingredient, index) => (
              <div className="row" key={ingredient}>
                <div className="col-xs-8 ml-2 mt-2">
                  <InputField
                    name="name"
                    type="text"
                    value={ingredient.name}
                    inputsHandler={(event) => inputArrayHandler(event, index)}
                  />
                </div>
                <div className="col-xs-2 ml-4 mt-2">
                  <InputField
                    name="amount"
                    type="number"
                    value={ingredient.amount}
                    inputsHandler={(event) => inputArrayHandler(event, index)}
                  />
                </div>
                <div className="col-xs-2 ml-4 mt-2">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => onRemoveIngredientHandler(index)}
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
            <hr />
            <div className="row">
              <div className="col-md-11 ml-3">
                <button type="button" className="btn btn-success" onClick={onAddIngredientsHandler}>
                  Add Ingredient
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RecipeEdit.propTypes = {
  onAddRecipe: PropTypes.func.isRequired,
};

export default RecipeEdit;
