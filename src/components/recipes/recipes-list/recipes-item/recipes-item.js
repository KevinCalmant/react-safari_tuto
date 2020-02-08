import React, {Component} from "react";
import { Link } from "react-router-dom";

import './recipes-item.css';

export class RecipesItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: props.recipe,
    }
  }

  render() {
    return (
      <div>
        <Link className="list-group-item list-group-item-action flex-column align-items-start clearfix"
              to={`recipes/${this.state.recipe.id}`}>
          <div className="float-md-left">
            <div className="d-flex w-100 justify-content-between">
              <h4 className="mb-1">{this.state.recipe.name}</h4>
            </div>
            <p className="list-group-item-text">{this.state.recipe.description}</p>
          </div>
          <span className="float-md-right ml-5">
          <img src={this.state.recipe.imagePath} alt={this.state.recipe.name} className="img-responsive recipe__image"/>
        </span>
        </Link>
      </div>
    );
  }
}
export default RecipesItem;