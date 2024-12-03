import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';
import './styles/App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  const handleSearch = async (query) => {
    // Simulamos una búsqueda con datos dummy
    const dummyResults = [
      {
        id: 2,
        name: 'Producto de ejemplo MercadoLibre',
        price: '$90',
        source: 'MercadoLibre',
        link: 'https://mercadolibre.com',
      },
    ];
    setProducts(dummyResults);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
