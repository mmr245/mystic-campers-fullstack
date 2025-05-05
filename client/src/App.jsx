
import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage'; 
import Shop from './pages/ShopPage';
import About from './pages/AboutUs/AboutPage';
import Lore from './pages/AboutUs/Lore';
import Team from './pages/AboutUs/Team';
import Hunt from './pages/TheHunt/HuntPage';
import HowToPlay from './pages/TheHunt/HowToPlay';
import ScavengerHunt from './pages/TheHunt/ScavengerHunt';
import Blog from './pages/TheHunt/Blog';
import BrushWithTheWendingo from './pages/TheHunt/Blog/BrushWithTheWendingo';
import IntoTheUnknown from './pages/TheHunt/Blog/IntoTheUnknown';
import TheNightItStarted from './pages/TheHunt/Blog/TheNightItStarted';
import Contact from './pages/ContactPage';
import Account from './pages/AccountPage';
import Cart from './pages/CartPage';
import GamePage from './pages/TheHunt/GamePage';
import NotFound from './pages/NotFoundPage';
import products from './data/products';
import ProductDetailPage from './pages/ProductDetailsPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop products={products} />} />
        <Route
          path="/shop/:id"
          element={<ProductDetailPage products={products} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/brushwiththewendingo" element={<BrushWithTheWendingo />} />
        <Route path="/intotheunknown" element={<IntoTheUnknown />} />
        <Route path="/thenightitstarted" element={<TheNightItStarted />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/hunt" element={<Hunt />} />
        <Route path="/howtoplay" element={<HowToPlay />} />
        <Route path="/scavengerhunt" element={<ScavengerHunt />} />
        <Route path="/lore" element={<Lore />} />
        <Route path="/team" element={<Team />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
