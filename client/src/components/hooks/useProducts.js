import { useState, useEffect } from 'react';
import productsData from '../data/products.json';


/**
* Hook to manage products data.
* Loads once from JSON file and optionally supports filtering.
*/
export default function useProducts() {
 const [products, setProducts] = useState([]);


 useEffect(() => {
   // On first load, set products
   setProducts(productsData);
   localStorage.setItem('products', JSON.stringify(productsData));
 }, []);


 return { products };
}

