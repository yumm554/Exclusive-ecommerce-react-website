import '../assets/css/lform.css';
const LForm = () => {
  return (
    <div className="lform-cont">
      <form className="lform">
        <input
          type="email"
          id="lemail"
          name="lemail"
          className="lform-input"
          placeholder="Email or Phone Number"
        />
        <input
          type="password"
          id="lpassword"
          name="lpassword"
          className="lform-input"
          placeholder="Password"
        />
        <button
          type="submit"
          className="e-com-button lform-button lsubmit-button"
        >
          Log In
        </button>
      </form>
      <div className="forgot-password-cont">
        <button className="e-com-button forgot-password-button">
          Forgot Password?
        </button>
      </div>
    </div>
  );
};
export default LForm;
