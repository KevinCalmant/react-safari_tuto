import React, {Component} from "react";
import { Route } from "react-router";

import RecipesList from "./recipes-list/recipes-list";
import RecipesStart from "./recipes-start/recipes-start";
import RecipesDetail from "./recipes-detail/recipes-detail";

export class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: props.match.path,
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <RecipesList />
        </div>
        <div className="col-md-6">
          <Route path={`${this.state.path}/:id`} component={RecipesDetail} />
          <Route exact path={`${this.state.path}`} component={RecipesStart}/>
        </div>
      </div>
    );
  }
}
export default Recipes;