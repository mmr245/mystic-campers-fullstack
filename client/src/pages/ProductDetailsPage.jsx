import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
// Styles for the detail page (optional)
import './ProductDetailsPage.css';

export default function ProductDetailsPage({ products = [] }) {
  // read the `id` from the URL
  const { id } = useParams();

  // find the product that matches the id (coerce to string)
  const product = products.find(p => String(p.id) === id);

  // if no matching product, show a fallback message
  if (!product) {
    return (
      <section className="product-detail">
        <p>Sorry, that product can’t be found.</p>
        <NavLink to="/shop">← Back to Shop</NavLink>
      </section>
    );
  }

  // destructure all needed fields, including `includes`
  const {
    name,
    price,
    image,
    description,
    available,
    category,
    sku,
    includes,
  } = product;

  return (
    <section className="product-detail">
      <NavLink to="/shop">← Back to Shop</NavLink>

      <div className="detail-content">
        <img src={image} alt={name} className="detail-image" />
        <div className="detail-info">
          <h2>{name}</h2>
          {sku && <p className="detail-sku"><strong>SKU:</strong> {sku}</p>}
          {category && <p className="detail-category"><strong>Category:</strong> {category}</p>}
          <p className="detail-price">${price.toFixed(2)}</p>
          {available === false && <p className="out-of-stock">Out of Stock</p>}

          {description && <p className="detail-desc">{description}</p>}

          {/* render the includes list */}
          {includes && (
            <ul className="detail-includes">
              {includes.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}

          {/* Add to Cart button if available */}
          {available && (
            <button
              className="add-to-cart-btn"
              onClick={() => {
                const cart = JSON.parse(localStorage.getItem('cart') || '[]');
                cart.push({ ...product, quantity: 1 });
                localStorage.setItem('cart', JSON.stringify(cart));
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </section>
  );
}