// ProductGrid.js
import React, { useState } from 'react';
import PriceFilter from './PriceFilter';
import products from './products';

const ProductGrid = () => {
  const [maxPrice, setMaxPrice] = useState(Infinity);

  const handlePriceChange = (price) => {
    setMaxPrice(price);
  };

  const filteredProducts = products.filter(product => product.price <= maxPrice);

  return (
    <div>
      <PriceFilter onPriceChange={handlePriceChange} />
      <div className="products">
        {filteredProducts.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
