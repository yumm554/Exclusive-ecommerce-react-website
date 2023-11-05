import { ReactComponent as Delivery } from '../assets/images/services/delivery.svg';
import { ReactComponent as CustomerService } from '../assets/images/services/customer-service.svg';
import { ReactComponent as Secure } from '../assets/images/services/secure.svg';

import '../assets/css/services.css';

const Services = () => {
  return (
    <div className="home-sections e-com-services">
      <div className="service">
        <div className="services-svg-icon">
          <div className="services-svg-icon-wrapper">
            <Delivery />
          </div>
        </div>
        <h1 className="services-head medium-heading">FREE AND FAST DELIVERY</h1>
        <p className="services-para medium-para">
          Free delivery for all orders over $140
        </p>
      </div>
      <div className="service">
        <div className="services-svg-icon">
          <div className="services-svg-icon-wrapper">
            <CustomerService />
          </div>
        </div>
        <h1 className="services-head medium-heading">24/7 CUSTOMER SERVICE</h1>
        <p className="services-para medium-para">
          Friendly 24/7 customer support
        </p>
      </div>
      <div className="service">
        <div className="services-svg-icon">
          <div className="services-svg-icon-wrapper">
            <Secure />
          </div>
        </div>
        <h1 className="services-head medium-heading">MONEY BACK GUARANTEE</h1>
        <p className="services-para medium-para">
          We return money within 30 days
        </p>
      </div>
    </div>
  );
};
export default Services;
