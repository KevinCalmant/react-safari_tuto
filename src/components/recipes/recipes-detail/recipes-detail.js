import React, {Component} from "react";

export class RecipesDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: props.recipe,
    };
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <img src={this.state.recipe.imagePath} alt={this.state.recipe.name} className="img-responsive recipe__image"/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h1>{this.state.recipe.name}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="btn-group">
              <button className="btn btn-primary dropdown-toggle">Manage Recipe</button>
              <ul className="dropdown-menu">
                <li className="dropdown-item">To Shopping List</li>
                <li className="dropdown-item">Edit Recipe</li>
                <li className="dropdown-item">Delete Recipe</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            {this.state.recipe.description}
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-md-6">
            <div className="list-group">
              <div className="list-group-item">
                ingredients
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RecipesDetail;