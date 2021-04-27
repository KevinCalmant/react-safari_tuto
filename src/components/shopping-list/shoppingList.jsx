import React from 'react';
import PropTypes from 'prop-types';

const ShoppingList = ({ ingredients }) => (
  <div className="row">
    <div className="col-md-10">
      {ingredients.map((ingredient) => (
        <a
          href="/recipes"
          className="list-group-item list-group-item-action flex-column align-items-start clearfix"
        >
          {ingredient.name} - {ingredient.amount}
        </a>
      ))}
    </div>
  </div>
);

ShoppingList.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      amount: PropTypes.number,
    })
  ),
};

ShoppingList.defaultProps = {
  ingredients: [],
};

export default ShoppingList;
