import '../assets/css/sform.css';
const SForm = () => {
  return (
    <div className="sform-cont">
      <form className="sform">
        <input
          type="name"
          id="sname"
          name="sname"
          className="sform-input"
          placeholder="Name"
        />
        <input
          type="email"
          id="semail"
          name="semail"
          className="sform-input"
          placeholder="Email or Phone Number"
        />
        <input
          type="password"
          id="spassword"
          name="spassword"
          className="sform-input"
          placeholder="Password"
        />
        <button
          type="submit"
          className="e-com-button sform-button ssubmit-button"
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
