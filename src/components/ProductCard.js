import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>Precio: {product.price}</p>
      <p>Fuente: {product.source}</p>
      <a href={product.link} target="_blank" rel="noopener noreferrer">
        Ver en {product.source}
      </a>
    </div>
  );
};

export default ProductCard;
