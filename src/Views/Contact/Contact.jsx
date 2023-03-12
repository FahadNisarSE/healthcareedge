import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";

import "./Contact.css";

const Contact = () => {
  const [values, setvalues] = useState({
    username: "",
    email: "",
    message: "",
  });

  console.info("Values", values);

  function preventDefault(e) {
    e.preventDefault();
  }

  function changeValues(e) {
    setvalues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <main id="contact">
      <div className="contact-inner-container">
        <h1 className="contact-heading blue-gradient">Contact Us</h1>
        <p className="contact-subheading">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify.
        </p>
        <div className="form-container">
          <form className="form-box" onSubmit={preventDefault}>
            <div className="form-sub-container-1">
              <div className="form-input-contact">
                <label for="username">Name</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  onChange={(e) => changeValues(e)}
                />
              </div>
              <div className="form-input-contact">
                <label for="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  onChange={(e) => changeValues(e)}
                />
              </div>
            </div>
            <div className="form-sub-container-2 form-textarea">
              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                onChange={(e) => changeValues(e)}
              />
            </div>
            <div className="form-button">
              <button>Send</button>
            </div>
          </form>
          <div className="info-box">
            <a className="contact-email" href="mailto: fnisar142@gmail.com">
              <AiOutlineMail /> example@email.com
            </a>
            <address className="contact-address">
              <ImLocation2 /> 49 Smith St. <br /> Saint Cloud, MN 56301
            </address>
            <div className="contact-icon">
              <a href="/">
                <FaFacebook />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
              <a href="/">
                <AiFillLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
