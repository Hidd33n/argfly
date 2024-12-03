import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { name, price, source, link } = product;

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Precio: {price}</p>
      <p>Fuente: {source}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Ver producto
      </a>
    </div>
  );
};

export default ProductCard;
