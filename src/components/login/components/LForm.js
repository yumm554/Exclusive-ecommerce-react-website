import '../assets/css/lform.css';
const LForm = () => {
  return (
    <div className="lform-cont">
      <form className="e-com-aform lform">
        <input
          type="email"
          id="lemail"
          name="lemail"
          className="e-com-page-input no-background-ecom-input "
          placeholder="Email or Phone Number"
        />
        <input
          type="password"
          id="lpassword"
          name="lpassword"
          className="e-com-page-input no-background-ecom-input "
          placeholder="Password"
        />
        <button
          type="submit"
          className="e-com-button e-com-red-button lsubmit-button"
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
