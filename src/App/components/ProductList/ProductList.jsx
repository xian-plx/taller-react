import React from 'react';

const products = [
  {
    name: 'Nexus S',
    price: 799,
    description: 'Ve más rápido con Nexus S',
    id: 'nexus-s',
  },
  {
    name: 'Motorola XOOM™ con wifi',
    price: 699,
    description: 'La tablet de siguiente generación, más tablet que nunca',
    id: 'motorola-xoom-with-wi-fi',
  },
  {
    name: 'MOTOROLA XOOM™',
    price: 299,
    description: 'La tablet de siguiente generación',
    id: 'motorola-xoom',
  },
];

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
      {products.map((product) => (
        <li>
          <span>{product.name}</span>
          <p>{product.description}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default ProductList;
