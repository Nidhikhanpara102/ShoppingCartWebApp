import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">Shopping Website</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/product-list" className="nav-link">Product List</Link>
          </li>
          <li className="nav-item">
            <Link to="/shopping-cart" className="nav-link">Shopping Cart</Link>
          </li>
          <li className="nav-item">
            <Link to="/account-page" className="nav-link">Account Page</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
