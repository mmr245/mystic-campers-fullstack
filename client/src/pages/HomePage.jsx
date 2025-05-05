import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

import BannerCarousel from '../components/Home/BannerCarousel';
import FeaturedProducts from '../components/Home/FeaturedProducts';

const HomePage = () => (
  <div>
    {/* Top half: banner with hero inside */}
    <div className="half top-half hidden">
      <BannerCarousel />
      <div className="hero">
        <h1>Explore the Unknown with Mystic Campers</h1>
        <p>Gear up for your next adventure with our top camping gear.</p>
        <NavLink to="/shop" className="cta-button">
          Shop Now
        </NavLink>
      </div>
    </div>

    <div className="mobile-shop">
      <NavLink to="/shop" className="cta-button">
        Shop Now
      </NavLink>
    </div>

    {/* Bottom half: our picks */}
    <div className="featured-section">
      <h2>Our picks for you</h2>
      <FeaturedProducts />
    </div>
  </div>
);

export default HomePage;