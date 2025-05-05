import React from 'react';

/**
 * Single cart item row with quantity controls and remove button.
 * Props:
 * - item: { id, name, price, quantity }
 * - onQtyChange: (id, newQty) => void
 * - onRemove: (id) => void
 */
export default function CartItem({ item, onQtyChange, onRemove }) {
  const handleDecrease = () => {
    if (item.quantity > 1) onQtyChange(item.id, item.quantity - 1);
  };

  const handleIncrease = () => {
    onQtyChange(item.id, item.quantity + 1);
  };

  const handleChange = (e) => {
    const qty = Math.max(1, parseInt(e.target.value, 10) || 1);
    onQtyChange(item.id, qty);
  };

  const handleRemove = () => {
    onRemove(item.id);
  };

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>
        ${item.price.toFixed(2)} × {' '}
        <button onClick={handleDecrease} disabled={item.quantity <= 1}>−</button>
        <input
          type="number"
          value={item.quantity}
          min="1"
          onChange={handleChange}
        />
        <button onClick={handleIncrease}>+</button>
        {' '}= ${(item.price * item.quantity).toFixed(2)}
      </p>
      <button className="remove-btn" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
}
