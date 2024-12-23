import React, { useState } from 'react';
import Header from './components/Header';
import ImportCalculator from './components/ImportCalculator';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';
import './styles/App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  const handleSearch = async (query) => {
    // Simulamos una búsqueda con datos dummy
    const dummyResults = [
      {
        id: 1,
        name: 'Producto de ejemplo Amazon',
        price: '$100',
        source: 'Amazon',
        link: 'https://amazon.com',
      },
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
      <div className="main-content">
        <ImportCalculator />
        <SearchBar onSearch={handleSearch} />
        <div className="products-container">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
