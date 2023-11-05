import { Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import HLayout from './components/home/components/HLayout';
import './assets/css/index.css';
import Signup from './components/signup/components/Signup';
import Login from './components/login/components/Login';

function App() {
  return (
    <div className="section e-commerce-website">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HLayout />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="wishlist" element={'wishlist'} />
          <Route path="products" element={<Outlet />}>
            <Route index element={'products'} />
            <Route path=":id" element={'single product'} />
          </Route>
          <Route path="cart" element={'cart'} />
          <Route path="checkout" element={'checkout'} />
          <Route path="account" element={'account'} />
          <Route path="about" element={'about'} />
          <Route path="contact" element={'contact'} />
        </Route>
        <Route path="*" element={'404'} />
      </Routes>
    </div>
  );
}

export default App;
