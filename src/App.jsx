import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Header from './components/header/Header';
import NotFound from './components/not-found/NotFound';
import Recipes from './components/recipes/Recipes';
import { RecipesContextProvider } from './components/recipes/recipes-context';
import GlobalSpinner from './components/shared/GlobalSpinner';
import ShoppingList from './components/shopping-list/ShoppingList';
import { GlobalSpinnerContextProvider } from './GlobalSpinnerContext';

const App = () => (
  <GlobalSpinnerContextProvider>
    <Router>
      <div>
        <Header />
        <div className="container-fluid content">
          <div className="row">
            <GlobalSpinner />
            <div className="col-md-12 pl-5">
              <Switch>
                <Route exact path="/">
                  <Redirect to="/recipes" />
                </Route>
                <Route
                  path="/recipes"
                  component={() => (
                    <RecipesContextProvider>
                      <Recipes />
                    </RecipesContextProvider>
                  )}
                />
                <Route path="/shopping-list" component={() => <ShoppingList ingredients={[]} />} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  </GlobalSpinnerContextProvider>
);

export default App;
