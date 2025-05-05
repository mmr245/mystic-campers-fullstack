import React from 'react';
import { products } from '../../data/products';
import ProductCard from '../Products/ProductCard';

export default function FeaturedProducts() {
  // pick the first 4 featured items
  return (
    <div className="featured-grid">
      {products.slice(0, 4).map(p => (
        <ProductCard
          key={p.id}
          id={p.id}
          name={p.name}
          price={p.price}
          imgSrc={p.image}
        />
      ))}
    </div>
  );
}