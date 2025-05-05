// src/components/Cart/CartList.jsx
import React from 'react';
import CartItem from '../cart/CartItem';

/**
 * Renders a list of cart items.
 * Props:
 * - items: Array of { id, name, price, quantity }
 * - onQtyChange: (id, newQty) => void
 * - onRemove: (id) => void
 */
export default function CartList({ items, onQtyChange, onRemove }) {
  return (
    <div className="cart-list">
      {items.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onQtyChange={onQtyChange}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}