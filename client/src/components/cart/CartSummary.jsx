import React from 'react';

/**
 * Displays total and a Place Order button.
 * Props:
 * - total: number
 * - onCheckout: () => void
 */
export default function CartSummary({ total, onCheckout }) {
  return (
    <div className="cart-summary">
      <h2>Total: ${total.toFixed(2)}</h2>
      <button onClick={onCheckout}>Place Order</button>
    </div>
  );
}