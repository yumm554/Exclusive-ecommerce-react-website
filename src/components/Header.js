import '../assets/css/header.css';
import Sidebar from './home/components/Sidebar';
import { ReactComponent as Heart } from '../assets/images/header/heart.svg';
import { ReactComponent as Cart } from '../assets/images/header/cart.svg';
import { ReactComponent as Search } from '../assets/images/header/search.svg';
import { ReactComponent as Hamburger } from '../assets/images/header/hamburger.svg';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

const Header = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 992px)' });
  const [mDropdown, setMDropdown] = useState(false);

  return (
    <div className="e-commerce-header">
      <div className="e-commerce-header-main">
        <div className="e-com-logo header-logo">Exclusive</div>
        <div className="e-com-navbar">
          <ul className="e-com-navbar-list">
            <Link className="hnavigate" to="/">
              <li className="e-com-navbar-list-item">Home</li>
            </Link>
            <Link className="hnavigate" to="/contact">
              <li className="e-com-navbar-list-item">Contact</li>
            </Link>
            <Link className="hnavigate" to="/about">
              <li className="e-com-navbar-list-item">About</li>
            </Link>
            <Link className="hnavigate" to="/signup">
              <li className="e-com-navbar-list-item">Signup</li>
            </Link>
          </ul>
        </div>

        <div className="e-com-search">
          <form className="e-com-form e-com-search-form">
            <input
              type="search"
              className="e-com-input search-input"
              placeholder="What are you looking for?"
            />
            <button type="submit" className="e-com-button search">
              <Search />
            </button>
          </form>
        </div>
        <button className="e-com-button wishlist">
          <Heart />
        </button>
        <button className="e-com-button cart">
          <Cart />
        </button>
        {isMobile && (
          <div className="mobile-menu">
            <button
              className="e-com-button hamburger"
              onClick={() => setMDropdown(!mDropdown)}
            >
              <Hamburger />
            </button>
            {mDropdown && (
              <div className="mobile-menu-dropdown">
                <ul className="mdropdown e-com-navbar-list">
                  <Link className="hnavigate" to="/">
                    <li className="e-com-navbar-list-item">Home</li>
                  </Link>
                  <Sidebar />
                  <Link className="hnavigate" to="/contact">
                    <li className="e-com-navbar-list-item">Contact</li>
                  </Link>
                  <Link className="hnavigate" to="/about">
                    <li className="e-com-navbar-list-item">About</li>
                  </Link>
                  <Link className="hnavigate" to="/signup">
                    <li className="e-com-navbar-list-item">Signup</li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
