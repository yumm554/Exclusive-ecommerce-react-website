import { CForm } from './CForm';
import './assets/css/contact.css';
import Breadcrumbs from '../Breadcrumbs';
import { ReactComponent as Phone } from './assets/images/phone.svg';
import { ReactComponent as Email } from './assets/images/email.svg';

const CLayout = () => {
  return (
    <div className="e-com-padded-sec e-com-contact-sec">
      <Breadcrumbs />
      <div className="home-sections contact-info-container">
        <div className="contact-info-section shadded-box-sec">
          <div className="call-to-us-sec to-us-sec">
            <div className="call-to-us-heading to-us-heading">
              <div className="contact-icon phone">
                <Phone />
              </div>

              <h1 className="medium-heading">Call To Us</h1>
            </div>
            <p className="medium-para">We are available 24/7, 7 days a week.</p>
            <p className="medium-para">Phone: +8801611112222</p>
          </div>
          <div className="write-to-us-sec to-us-sec">
            <div className="write-to-us-heading to-us-heading">
              <div className="contact-icon email">
                <Email />
              </div>
              <h1 className="medium-heading">Write To Us</h1>
            </div>
            <p className="medium-para">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="medium-para">Emails: customer@ecxclusive.com</p>
            <p className="medium-para">Emails: support@exlusive.com</p>
          </div>
        </div>
        <div className="contact-form-section shadded-box-sec">
          <CForm />
        </div>
      </div>
    </div>
  );
};
export default CLayout;
