import { Link } from 'react-router-dom';
import '../assets/css/signup.css';
import SForm from './SForm';
const Signup = () => {
  return (
    <div className="signup-cont">
      <div
        className="signup-image"
        style={{
          background: `url(
      ${require('../assets/images/signup.jpg')}
    ) no-repeat center`,
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="signup">
        <div className="signup-mains">
          <h1 className="signup-main-heading">Create an account</h1>
          <p className="signup-main-para">Enter your details below</p>
        </div>
        <SForm />
        <div className="already-account-cont">
          <p className="already-account-para medium-para">
            Already have account?
          </p>
          <Link to="/login">
            <button className="e-com-button already-account-button">
              Log in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Signup;
