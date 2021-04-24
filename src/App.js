import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Header from './components/header/Header';
import Recipes from './components/recipes/Recipes';
import ShoppingList from './components/shopping-list/ShoppingList';

const App = () => (
  <Router>
    <div>
      <Header />
      <div className="container-fluid content">
        <div className="row">
          <div className="col-md-12 ml-5">
            <Switch>
              <Route exact path="/">
                <Redirect to="/recipes" />
              </Route>
              <Route path="/recipes" component={Recipes} />
              <Route path="/shopping-list" component={ShoppingList} />
              <Redirect from="*" to="/" />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  </Router>
);

export default App;
