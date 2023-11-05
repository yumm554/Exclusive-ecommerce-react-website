import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HBanner from './HBanner';

const Layout = () => {
  return (
    <div>
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
