import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => (
  <div>
    <div className="app-top-bar">
      <Link to="/productList">
        <h1>Tienda de teléfonos</h1>
      </Link>
      <a className="button fancy-button" href="cart">
        <i className="material-icons">shopping_cart</i>
        Checkout
      </a>
    </div>
  </div>
);

export default TopBar;
