import React, { useState } from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import recipesData from './recipesData';

import Header from './components/header/Header';
import NotFound from './components/not-found/NotFound';
import Recipes from './components/recipes/Recipes';
import ShoppingList from './components/shopping-list/ShoppingList';

const App = () => {
  const [recipes, setRecipes] = useState(recipesData);

  return (
    <Router>
      <div>
        <Header />
        <div className="container-fluid content">
          <div className="row">
            <div className="col-md-12 pl-5">
              <Switch>
                <Route exact path="/">
                  <Redirect to="/recipes" />
                </Route>
                <Route
                  path="/recipes"
                  component={() => <Recipes recipes={recipes} setRecipes={setRecipes} />}
                />
                <Route
                  path="/shopping-list"
                  component={() => (
                    <ShoppingList
                      ingredients={[].concat(...recipes.map((recipe) => recipe.ingredients))}
                    />
                  )}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
