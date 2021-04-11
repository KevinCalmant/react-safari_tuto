import React from 'react';
import RecipesItem from './recipes-item/recipes-item';

const RecipesList = (props) => {
  const [recipes] = React.useState([
    {
      id: 0,
      name: 'Tasty Schnitzel',
      description: 'A super-tasty Schnitzel - just awesome!',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      ingredients: [],
    },
    {
      id: 1,
      name: 'Big Fat Burger',
      description: 'Big burger what else ?',
      imagePath:
        'https://komonews.com/resources/media/ef00dd06-fb3a-4dee-9699-f98731cb94b3-large16x9_AP_0910250104103.jpg?1492047825352',
      ingredients: [],
    },
  ]);
  const { setSelectedRecipe } = props;

  return (
    <div>
      <div className='row'>
        <div className='col-xs-12'>
          <button className='btn btn-success'>New Recipe</button>
        </div>
      </div>
      <hr />
      <div className='row'>
        <div className='col-xs-12 list-group'>
          {recipes.map((recipe, index) => (
            <RecipesItem
              key={recipe.name}
              recipe={recipe}
              setSelectedRecipe={setSelectedRecipe}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default RecipesList;
