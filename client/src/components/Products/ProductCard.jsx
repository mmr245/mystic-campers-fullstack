import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatchCart } from '../../context/CartContext';
import './Products.css';

export default function ProductCard({ product, id, name, price, imgSrc, onAddToCart }) {
  // merge product object or individual props, defaulting available to true
  const p = product || { id, name, price, image: imgSrc, available: true };
  const { id: productId, name: productName, price: productPrice, image } = p;
  const available = p.available ?? true;
  const dispatch  = useDispatchCart();  

  // handler for adding item into cart state
  const handleAdd = () => {
    dispatch({ type: 'ADD_ITEM', payload: p });
    if (onAddToCart) onAddToCart(p);
  };

  return (
    <div className="product-card">
      {/* clicking any part of this link (except the button) goes to product page */}
      <NavLink to={`/shop/${productId}`} className="card-link">
        <img src={image} alt={productName} />
        <h3>{productName}</h3>
        <p>${productPrice.toFixed(2)}</p>
        {!available && <span className="out-of-stock">Out of Stock</span>}
      </NavLink>

      {/* render add-to-cart button or fallback view details */}
      {onAddToCart ? (
        <button
          className="add-to-cart-btn"
          onClick={handleAdd}
          disabled={!available}
        >
          {available ? 'Add to Cart' : 'Unavailable'}
        </button>
      ) : (
        <NavLink to={`/shop/${productId}`} className="btn">
          View Details
        </NavLink>
      )}
    </div>
  );
}
