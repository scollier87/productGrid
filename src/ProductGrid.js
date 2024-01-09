// ProductGrid.js
import React, { useState } from 'react';
import PriceFilter from './PriceFilter';
import ProductCard from './ProductCard';
import products from './products';

const ProductGrid = () => {
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [sortType, setSortType] = useState('priceAsc');

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
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
  }).filter(product => product.price <= maxPrice);

  const handlePriceChange = (price) => {
    setMaxPrice(price);
  };

  // const filteredProducts = products.filter(product => product.price <= maxPrice);

  return (
    <div>
      <PriceFilter onPriceChange={handlePriceChange} />
      <div className="sort-filter">
        <label htmlFor='sort'>Sort By:</label>
        <select id='sort' value={sortType} onChange={handleSortChange}>
          <option value='priceAsc'>Price: Low to High</option>
          <option value='priceDesc'>Price: High to Low</option>
          <option value='nameAsc'>Name: A to Z</option>
          <option value='nameDesc'>Name: Z to A</option>
        </select>
      </div>
      <div className='products-grid'>
        {sortedProducts.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
