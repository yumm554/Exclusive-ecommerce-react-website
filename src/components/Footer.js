import { Link } from 'react-router-dom';
import { ReactComponent as QRCode } from '../assets/images/footer/Qrcode.svg';
import { ReactComponent as GooglePlay } from '../assets/images/footer/googleplay.svg';
import { ReactComponent as AppStore } from '../assets/images/footer/appstore.svg';

import { ReactComponent as Facebook } from '../assets/images/footer/facebook.svg';
import { ReactComponent as Twitter } from '../assets/images/footer/twitter.svg';
import { ReactComponent as Instagram } from '../assets/images/footer/instagram.svg';
import { ReactComponent as LinkedIn } from '../assets/images/footer/linkedin.svg';

import { ReactComponent as Copyright } from '../assets/images/footer/copyright.svg';
import { ReactComponent as SendEmail } from '../assets/images/footer/sendemail.svg';

import '../assets/css/footer.css';

const Footer = () => {
  return (
    <div className="home-sections e-commerce-footer">
      <div className="e-commerce-footer-cont">
        <div className="footer-sec">
          <div className="e-com-logo footer-logo">Exclusive</div>
          <div className="subscription-form-cont">
            <h2 className="footer-sec-subhead">Subscribe</h2>
            <div className="subscription-form-wrapper">
              <p className="footer-links-items">Get 10% off your first order</p>
              <form className="e-com-form e-com-subscription-form">
                <input
                  className="e-com-input email-input"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="e-com-button telegram" type="submit">
                  <SendEmail />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-sec">
          <h2 className="footer-sec-head">Support</h2>
          <ul className="footer-links support-links">
            <li className="footer-links-items">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </li>
            <li className="footer-links-items">Exclusive@gmail.com</li>
            <li className="footer-links-items">+88015-88888-9999</li>
          </ul>
        </div>
        <div className="footer-sec">
          <h2 className="footer-sec-head">Account</h2>
          <ul className="footer-links account-links">
            <Link className="fnavigate">
              <li className="footer-links-items">My Account</li>
            </Link>
            <Link className="fnavigate">
              <li className="footer-links-items">Login/Register</li>
            </Link>
            <Link className="fnavigate">
              <li className="footer-links-items">Cart</li>
            </Link>
            <Link className="fnavigate">
              <li className="footer-links-items">Wishlist</li>
            </Link>
            <Link className="fnavigate">
              <li className="footer-links-items">Shop</li>
            </Link>
          </ul>
        </div>
        <div className="footer-sec">
          <h2 className="footer-sec-head">Quick Link</h2>
          <ul className="footer-links quick-links">
            <Link className="fnavigate">
              <li className="footer-links-items">Privacy Policy</li>
            </Link>
            <Link className="fnavigate">
              <li className="footer-links-items">Terms Of Use</li>
            </Link>
            <Link className="fnavigate">
              <li className="footer-links-items">FAQ</li>
            </Link>
            <Link className="fnavigate">
              <li className="footer-links-items">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="footer-sec download-social-sec">
          <div className="download">
            <h2 className="footer-sec-head">Download App</h2>
            <div className="download-links-cont">
              <p className="small-para">Save $3 with App New User Only</p>
              <div className="download-links">
                <div className="qr-code-cont">
                  <QRCode />
                </div>
                <div className="download-links-ways">
                  <div className="googleplay-cont">
                    <GooglePlay />
                  </div>
                  <div className="appstore-cont">
                    <AppStore />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="social-links">
            <div className="facebook">
              <Facebook />
            </div>
            <div className="twitter">
              <Twitter />
            </div>
            <div className="instagram">
              <Instagram />
            </div>
            <div className="linkedin">
              <LinkedIn />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-cont">
        <div className="copyright-icon">
          <Copyright />
        </div>
        <p className="copyright">Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  );
};
export default Footer;
