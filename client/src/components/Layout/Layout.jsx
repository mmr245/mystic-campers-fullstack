import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children }) => (
  <div className="page-container">
    <Header />
    <main className="site-main">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;