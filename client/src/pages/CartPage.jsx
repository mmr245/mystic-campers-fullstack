import React from 'react'
import { useCart, useDispatchCart } from '../context/CartContext'
import './CartPage.css'

export default function CartPage() {
  const { items } = useCart()
  const dispatch = useDispatchCart()

  const updateQty = (id, qty) => {
    if (qty < 1) return
    dispatch({ type: 'UPDATE_QTY', payload: { id, qty } })
  }

  const removeItem = id => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } })
  }

  if (items.length === 0) {
    return <p className="empty-cart">Your cart is empty.</p>
  }

  return (
    <div className="cart-page">
      {items.map(item => (
        <div key={item.id} className="cart-item-card">
          <img
            src={item.image}
            alt={item.name}
            className="cart-item-image"
          />

          <div className="cart-item-details">
            <span className="cart-item-name">{item.name}</span>
            <span className="cart-item-price">
              ${item.price.toFixed(2)}
            </span>

            <div className="cart-item-qty">
              <label>
                Qty:
                <input
                  type="number"
                  min="1"
                  value={item.qty}
                  onChange={e =>
                    updateQty(item.id, parseInt(e.target.value, 10))
                  }
                />
              </label>
            </div>

            <button
              className="cart-item-remove"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <hr />

      <p className="cart-total">
        Total:{' '}
        {items
          .reduce((sum, i) => sum + i.price * i.qty, 0)
          .toFixed(2)}
      </p>

      <button
        className="checkout-btn"           
        onClick={() => {/* TODO: navigate to checkout this is non functioning rn*/}}
      >
        Proceed to checkout
      </button>
    </div>
  )
}