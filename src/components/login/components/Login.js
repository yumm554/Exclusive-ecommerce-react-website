import '../assets/css/login.css';
import LForm from './LForm';
const Login = () => {
  return (
    <div className="login-cont">
      <div
        className="login-image"
        style={{
          background: `url(
      ${require('../assets/images/login.jpg')}
    ) no-repeat center`,
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="login">
        <div className="login-mains">
          <h1 className="login-main-heading">Log in to Exclusive</h1>
          <p className="login-main-para">Enter your details below</p>
        </div>
        <LForm />
      </div>
    </div>
  );
};
export default Login;
