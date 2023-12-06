import './assets/css/cform.css';
import React from 'react';
export function CForm() {
  return (
    <form className="e-com-aform cform">
      <input
        type="name"
        id="cname"
        name="cname"
        className="e-com-page-input g-background-ecom-input "
        placeholder="Your Name"
      />
      <input
        type="email"
        id="cemail"
        name="cemail"
        className="e-com-page-input g-background-ecom-input "
        placeholder="Your Email"
      />
      <input
        type="number"
        id="cphone"
        name="cphone"
        className="e-com-page-input g-background-ecom-input "
        placeholder="Your Phone"
      />
      <textarea
        rows="12"
        type="text"
        id="cmessage"
        name="cmessage"
        className="e-com-page-input g-background-ecom-input "
        placeholder="Your Message"
      />
      <button
        type="submit"
        className="e-com-button e-com-red-button csubmit-button"
      >
        Send Message
      </button>
    </form>
  );
}
