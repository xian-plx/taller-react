import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Products from '../../objects/Product';
import ProductDetail from '../ProductDetail';

const ProductList = () => (
  <div>
    <h2>Productos</h2>

    <p>Número total de productos: </p>

    <div className="col-md-2">
      <div>
        <input placeholder=" Buscar..." type="text" />
      </div>
    </div>

    <ul>
      {Products.map((product) => (
        <li key={product.id}>
          <span>
            <Link to={`/productDetail/${product.id}`}>
              {product.name}
            </Link>
          </span>
          <p>{product.description}</p>
          <Switch>
            <Route path={`/productDetail/${product.id}`}>
              <ProductDetail idProduct={product.id} />
              {/* <ProductDetail idProduct="nexus-s" /> */}
            </Route>
          </Switch>
        </li>
      ))}
    </ul>
  </div>
);

export default ProductList;
