import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HBanner from './HBanner';
import { useEffect, useState } from 'react';

const Layout = () => {
  const [windowWidth, setWindowWidth] = useState(
    window.innerHeight > 657 ? window.innerWidth : 1349
  );
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerHeight > 657 ? 'auto' : '1349px');
    });
  }, []);
  return (
    <div
      style={{
        width: windowWidth,
      }}
    >
      <HBanner />
      <Header />
      <div className="body-section">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
