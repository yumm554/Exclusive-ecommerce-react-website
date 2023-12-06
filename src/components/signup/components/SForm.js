import '../assets/css/sform.css';
const SForm = () => {
  return (
    <div className="sform-cont">
      <form className="e-com-aform sform">
        <input
          type="name"
          id="sname"
          name="sname"
          className="e-com-page-input no-background-ecom-input "
          placeholder="Name"
        />
        <input
          type="email"
          id="semail"
          name="semail"
          className="e-com-page-input no-background-ecom-input "
          placeholder="Email or Phone Number"
        />
        <input
          type="password"
          id="spassword"
          name="spassword"
          className="e-com-page-input no-background-ecom-input "
          placeholder="Password"
        />
        <button
          type="submit"
          className="e-com-button e-com-red-button ssubmit-button"
        >
          Create Account
        </button>
      </form>
      <div className="google-signup">
        <button
          type="submit"
          className="e-com-button sform-button google-button"
        >
          Sign up with Google
        </button>
      </div>
    </div>
  );
};
export default SForm;
