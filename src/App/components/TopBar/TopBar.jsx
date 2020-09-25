import React from 'react';

const TopBar = () => (
  <div className="app-top-bar">
    <a href="productList">
      <h1>Tienda de teléfonos</h1>
    </a>
    <a className="button fancy-button" href="cart">
      <i className="material-icons">shopping_cart</i>
      Checkout
    </a>
  </div>
);

export default TopBar;
