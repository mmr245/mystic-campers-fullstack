import React from 'react';
import './Products.css'; //


/**
* Sidebar filter panel for products.
* Props:
* - filters: { category: string, priceRange: [number, number], availableOnly: boolean }
* - onFilterChange: (updatedFilters) => void
*/
export default function FilterPanel({ filters, onFilterChange }) {
 const handleCategoryChange = (e) => {
   onFilterChange({ ...filters, category: e.target.value });
 };


 const handlePriceChange = (e, index) => {
   const newRange = [...filters.priceRange];
   newRange[index] = parseInt(e.target.value, 10) || 0;
   onFilterChange({ ...filters, priceRange: newRange });
 };


 const handleAvailableChange = (e) => {
   onFilterChange({ ...filters, availableOnly: e.target.checked });
 };


 return (
   <div className="filter-panel">
     <h2>Filter Products</h2>


     <div className="filter-group">
       <label>Category:</label>
       <select value={filters.category} onChange={handleCategoryChange}>
         <option value="">All</option>
         <option value="campers">Campers</option>
         <option value="gear">Gear</option>
         <option value="accessories">Accessories</option>
       </select>
     </div>


     <div className="filter-group">
       <label>Price Range:</label>
       <div className="price-inputs">
         <input
           type="number"
           min="0"
           value={filters.priceRange[0]}
           onChange={(e) => handlePriceChange(e, 0)}
           placeholder="Min"
         />
         <span>–</span>
         <input
           type="number"
           min="0"
           value={filters.priceRange[1]}
           onChange={(e) => handlePriceChange(e, 1)}
           placeholder="Max"
         />
       </div>
     </div>


     <div className="filter-group">
       <label>
         <input
           type="checkbox"
           checked={filters.availableOnly}
           onChange={handleAvailableChange}
         />
         In Stock Only
       </label>
     </div>
   </div>
 );
}
