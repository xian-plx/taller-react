import React from 'react';
import {
  useHistory, Link, Route, Switch,
} from 'react-router-dom';
import ProductDetail from '../ProductDetail';
import Products from '../../objects/Product';

const Cart = () => {
  let cartList;
  const productList = Products;
  //   let userName = '';
  //   let userPass = '';

  for (let i = 0; i < productList.length; i += 1) {
    productList[i] = {
      ...productList[i],
      number: 2,
    };
    // console.log(productList[i]);
  }

  cartList = productList;

  if (localStorage.getItem('cartList')) {
    cartList = JSON.parse(localStorage.getItem('clientList'));
  }

  //   const handleChangeUser = (e) => {
  //     userName = e.target.value;
  //   };

  //   const handleChangePass = (e) => {
  //     userPass = e.target.value;
  //   };

  //   const onChangeText = (value) => {
  //     document.getElementById('userCreated').innerHTML = value;
  //   };

  const history = useHistory();
  const handleClick = () => history.push('/productList');

  return (
    <div className="Cart">
      <h2>Carrito</h2>
      {cartList ? (
        <div>
          {cartList.map((product) => (
            <li key={product.id}>
              <span>
                <Link to={`/productDetail/${product.id}`}>
                  {product.name}
                </Link>
                                &nbsp;x&nbsp;
                {product.number}
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
        </div>
      ) : (
        <p>Carrito vacío</p>
      )}
      <button type="button" className="button" onClick={handleClick}>
        Volver
      </button>
    </div>
  );
};

export default Cart;
