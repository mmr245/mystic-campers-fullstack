import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart, useDispatchCart } from '../context/CartContext'
import axios from 'axios'
import './CheckoutPage.css'

export default function CheckoutPage() {
  const { items } = useCart()
  const dispatch  = useDispatchCart()
  const navigate  = useNavigate()

  const [fullName, setFullName]             = useState('')
  const [address, setAddress]               = useState('')
  const [shippingOption, setShippingOption] = useState('standard')
  const [paymentMethod, setPaymentMethod]   = useState('credit_card')
  const [loading, setLoading]               = useState(false)

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const shippingFees = { standard: 0, express: 5, overnight: 15, international: 25 }
  const shippingFee  = shippingFees[shippingOption]
  const totalCost    = subtotal + shippingFee

  const handlePlaceOrder = async () => {
    console.log('🏷️  Placing order…', {
      items,
      full_name: fullName,
      shipping_address: address,
      shipping_option: shippingOption,
      total_cost: totalCost,
      payment_info: { method: paymentMethod }
    })

    if (!fullName || !address) {
      return alert('Please enter your name and address.')
    }
    setLoading(true)
    try {
      const res = await axios.post('http://localhost:3001/api/orders', {
        items: items.map(i => ({ product_id: i.id, qty: i.qty })),
        full_name:        fullName,
        shipping_address: address,
        shipping_option:  shippingOption,
        total_cost:       totalCost,
        payment_info:     { method: paymentMethod }
      })
      console.log('✅ Order response:', res)
      dispatch({ type: 'CLEAR_CART' })
      navigate('/thank-you')
    } catch (err) {
      console.error('Order error:', err.response?.data || err.message)
      const msg = err.response?.data?.error || err.response?.data || err.message
      alert(msg)
    } finally {
      setLoading(false)
    }
  }

  if (items.length === 0) {
    return <p className="empty-cart">Your cart is empty.</p>
  }

  return (
    <div className="checkout-page">
      <h2>Review Your Order</h2>

      <ul className="order-summary">
        {items.map(item => (
          <li key={item.id} className="order-item">
            {item.name} — ${item.price.toFixed(2)} × {item.qty}
          </li>
        ))}
      </ul>

      <button
        className="edit-cart-btn"
        onClick={() => navigate('/cart')}
      >
        Edit Cart
      </button>

      <hr />

      <div className="cart-details">
        <label>
          Full Name
          <input
            type="text"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            required
          />
        </label>

        <label>
          Shipping Address
          <textarea
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
          />
        </label>

        <label>
          Shipping Option
          <select
            value={shippingOption}
            onChange={e => setShippingOption(e.target.value)}
          >
            <option value="standard">Standard</option>
            <option value="express">Express (+$5)</option>
            <option value="overnight">Overnight (+$15)</option>
            <option value="international">International (+$25)</option>
          </select>
        </label>

        <label>
          Payment Method
          <select
            value={paymentMethod}
            onChange={e => setPaymentMethod(e.target.value)}
            required
          >
            <option value="credit_card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="apple_pay">Apple Pay</option>
            <option value="google_pay">Google Pay</option>
          </select>
        </label>

        <div className="totals">
          <p>Subtotal<span>${subtotal.toFixed(2)}</span></p>
          <p>Shipping<span>${shippingFee.toFixed(2)}</span></p>
          <p><strong>Total<span>${totalCost.toFixed(2)}</span></strong></p>
        </div>

        <button
          className="checkout-btn"
          onClick={handlePlaceOrder}
          disabled={loading}
        >
          {loading ? 'Placing Order…' : 'Place Order'}
        </button>
      </div>
    </div>
  )
}
