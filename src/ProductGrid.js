import React, { useState } from 'react';
import Slider from './slider';
import ProductCard from './ProductCard';
import products from './products';

const ProductGrid = () => {
  const maxPriceFromProducts = Math.max(...products.map(product => product.price));
  // const minPriceFromProducts = Math.min(...products.map(product => product.price));
  const [sortType, setSortType] = useState('priceAsc');
  const [maxPrice, setMaxPrice] = useState(maxPriceFromProducts);

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  // const handlePriceChange = (price) => {
  //   setMaxPrice(price);
  // };

  const sortedProducts = [...products]
    .filter(product => product.price <= maxPrice)
    .sort((a, b) => {
      switch (sortType) {
        case 'priceAsc':
          return a.price - b.price;
        case 'priceDesc':
          return b.price - a.price;
        case 'nameAsc':
          return a.name.localeCompare(b.name);
        case 'nameDesc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

  return (
    <div>
      <div className="controls">
        <Slider
          // min={minPriceFromProducts}
          max={maxPriceFromProducts}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
        <div className="sort-filter">
          <label htmlFor='sort'>Sort By:</label>
          <select id='sort' value={sortType} onChange={handleSortChange}>
            <option value='priceAsc'>Price: Low to High</option>
            <option value='priceDesc'>Price: High to Low</option>
            <option value='nameAsc'>Name: A to Z</option>
            <option value='nameDesc'>Name: Z to A</option>
          </select>
        </div>
      </div>
      <div className="products-grid">
        {sortedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
