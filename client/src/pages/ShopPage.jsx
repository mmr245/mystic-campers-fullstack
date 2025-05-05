import React, { useState, useMemo } from 'react'
import ProductCard from '../components/Products/ProductCard'
import './ShopPage.css';

export default function ShopPage({ products = [] }) {
  const [cart, setCart] = useState([])
  const handleAddToCart = product => setCart(prev => [...prev, product])

  // Price filter state
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: Infinity })
  const handlePriceChange = e => {
    const { name, value } = e.target
    setPriceFilter(prev => ({
      ...prev,
      [name]:
        value === ''
          ? name === 'min'
            ? 0
            : Infinity
          : Number(value),
    }))
  }

  // Category & Search
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Build list of categories
  const categories = useMemo(() => {
    const uniqueCats = Array.from(new Set(products.map(p => p.category)))
    return ['all', ...uniqueCats]
  }, [products])

  // Apply category, search, AND price filters
  const filteredProducts = useMemo(() => {
    return products
      .filter(p => categoryFilter === 'all' || p.category === categoryFilter)
      .filter(p =>
        !searchTerm.trim()
          ? true
          : p.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(p => p.price >= priceFilter.min && p.price <= priceFilter.max)
  }, [products, categoryFilter, searchTerm, priceFilter])

  return (
    <div className="shop-page">
      <div className="shopping-page p-4">
        {/* ← ONE unified filter bar */}
        <div className="filters flex gap-4 mb-6">
          {/* Category */}
          <div>
            <label htmlFor="category" className="block font-medium">
              Category
            </label>
            <select
              id="category"
              value={categoryFilter}
              onChange={e => setCategoryFilter(e.target.value)}
              className="mt-1 p-2 border rounded"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all'
                    ? 'All Categories'
                    : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label className="block font-medium">Price Range</label>
            <div className="flex items-center gap-2 mt-1">
              <input
                type="number"
                name="min"
                value={priceFilter.min === 0 ? '' : priceFilter.min}
                onChange={handlePriceChange}
                placeholder="Min"
                className="w-20 p-2 border rounded"
              />
              <span>-</span>
              <input
                type="number"
                name="max"
                value={priceFilter.max === Infinity ? '' : priceFilter.max}
                onChange={handlePriceChange}
                placeholder="Max"
                className="w-20 p-2 border rounded"
              />
            </div>
          </div>

          {/* Search */}
          <div>
            <label htmlFor="search" className="block font-medium">
              Search
            </label>
            <input
              id="search"
              type="search"
              placeholder="Search products…"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="mt-1 p-2 border rounded"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(prod => (
              <ProductCard
                key={prod.id}
                product={prod}
                onAddToCart={handleAddToCart}
              />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  )
}
