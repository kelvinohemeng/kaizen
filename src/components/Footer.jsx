import React from "react";
import { Link } from "react-router-dom";
import { DefaultButton } from "./Components";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="layer-up">
          <div className="biggest-cta">
            <h1 className="biggest">Connect with us</h1>
            <DefaultButton>hop on a call with us.</DefaultButton>
          </div>
          <div className="social-ctas">
            <DefaultButton>LinkedIn</DefaultButton>
            <DefaultButton>Instagram</DefaultButton>
            <DefaultButton>Twitter</DefaultButton>
            <DefaultButton>Tiktok</DefaultButton>
          </div>
        </div>
        <div className="links">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              soluta aperiam quae quod amet tenetur vero eos modi quo provident.
              Lorem ipsum,
            </p>
          </div>
          <div className="linkss">
            <div className="n-links">
              {/* <h3>Quick Links</h3> */}
              <ul>
                <Link to="/about">
                  <li>About Us</li>
                </Link>
                <Link to="/">
                  <li>Audio Visual</li>
                </Link>
                <Link to="/">
                  <li>System Intergration</li>
                </Link>
                <Link to="/">
                  <li>Conferencing</li>
                </Link>
              </ul>
            </div>
            <div className="n-links">
              <ul>
                <Link to="/about">
                  <li>Call Us</li>
                </Link>
                <Link to="/">
                  <li>Email Us</li>
                </Link>
                <Link to="/">
                  <li>WhatsApp Us</li>
                </Link>
                <Link to="/">
                  <li>Book a service</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="kaizen-slide-infinite">
          <h1>kaizen</h1>
          <h1>kaizen</h1>
          <h1>kaizen</h1>
          <h1>kaizen</h1>
        </div>
      </div>
    </footer>
  );
};
