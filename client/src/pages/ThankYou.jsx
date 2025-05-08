// src/pages/ThankYouPage.jsx
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function ThankYouPage() {
  const { state } = useLocation()
  const { orderId, orderTotal } = state || {}

  return (
    <section className="thank-you-page">
      <div className="thank-you-container">
        <h2>Thank You for Your Order!</h2>
        {orderId && (
          <p>
            Your order number is <strong>#{orderId}</strong>.
          </p>
        )}
        {orderTotal && (
          <p>
            Order total: <strong>${orderTotal.toFixed(2)}</strong>.
          </p>
        )}
        <p>We’ll send your confirmation by email shortly.</p>
        <div className="thank-you-buttons">
          <Link to="/" className="button">
            Back to Home
          </Link>
          <Link to="/orders" className="button outline">
            View My Orders
          </Link>
        </div>
      </div>
    </section>
  )
}
