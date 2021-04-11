import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Header from './components/header/header';
import Recipes from './components/recipes/recipes';
import ShoppingList from './components/shopping-list/shoppingList';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className='container-fluid content'>
          <div className='row'>
            <div className='col-md-12 ml-5'>
              <Switch>
                <Route exact path='/'>
                  <Redirect to='/recipes' />
                </Route>
                <Route path='/recipes' component={Recipes} />
                <Route path='/shopping-list' component={ShoppingList} />
                <Redirect from='*' to='/' />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
