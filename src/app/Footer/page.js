import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./page.css";

const Footer = () => {
  return (
    <div className="bg-container">
      <div className="mobile-footer-container">
        <div className="footer-top-card">
          <div className="head-desc-card">
            <h2 className="footer-head">BE THE FIRST TO KNOW</h2>
            <p className="fooer-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. this is simply dummy text.
            </p>
          </div>
          <div className="subscribe-card">
            <input
              className="input"
              type="text"
              placeholder="Enter your e-mail..."
            />
            <button className="button">SUBSCRIBE</button>
          </div>
        </div>
        <hr />
        <div className="contact-card">
          <h2 className="call">CALL US</h2>
          <p className="phn-number">
            +44 221 133 5360 * customercare@mettamuse.com
          </p>
        </div>
        <hr />
        <div className="currency-card">
          <h2 className="currency-heading">CURRENCY</h2>
          <div className="country-card">
            <img
              src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1711624056/png-transparent-flag-of-the-united-states-national-flag-usa-flag-flag-logo-united-states_job3pc.png"
              alt="country"
              className="country-flag-img"
            />
            <p className="country-name">* USA</p>
          </div>
        </div>
        <hr />
        <div className="more-details-card">
          <h2 className="more-details-head">mettā muse</h2>
          <MdKeyboardArrowDown style={{ color: "#ffffff" }} />
        </div>
        <hr />
        <div className="more-details-card">
          <h2 className="more-details-head">Quick Links</h2>
          <MdKeyboardArrowDown style={{ color: "#ffffff" }} />
        </div>
        <hr />
        <div className="more-details-card">
          <h2 className="more-details-head">FOLLOW US</h2>
          <MdKeyboardArrowDown style={{ color: "#ffffff" }} />
        </div>
        <hr />
        <div>
          <h2 className="payment-head">mettā muse Accepts</h2>
          <div>
            <img
              className="payment-method-img"
              src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1711624780/png-transparent-google-pay-or-tez-hd-logo-thumbnail_jx71k8.png"
              alt="payment"
            />
            <img
              className="payment-method-img"
              src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1711625441/pngimg.com_-_paypal_PNG7_eqyvzn.png"
              alt="payment"
            />
            <img
              className="payment-method-img"
              src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1711624710/amex-card1708_bruhb8.jpg"
              alt="payment"
            />
            <img
              className="payment-method-img"
              src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1711624692/5968601_x0yjvu.png"
              alt="payment"
            />
          </div>
        </div>
        <div>
          <p className="about-copyright">
            Copyright © 2023 mettamuse. All rights reserved.
          </p>
        </div>
      </div>
      <div className="fullscreen-footer-container">
        <div className="footer-top-card">
          <div className="footer-detail-card">
            <div className="head-desc-card">
              <h2 className="footer-head">BE THE FIRST TO KNOW</h2>
              <p className="fooer-description">
                Sign up for updates from mettā muse.
              </p>
            </div>
            <div className="subscribe-card">
              <input
                className="input"
                type="text"
                placeholder="Enter your e-mail..."
              />
              <button className="button">SUBSCRIBE</button>
            </div>
          </div>
          <div className="contact-card">
            <h2 className="call">CALL US</h2>
            <p className="phn-number">
              +44 221 133 5360 * customercare@mettamuse.com
            </p>
            <div className="currency-card">
              <h2 className="currency-heading">CURRENCY</h2>
              <div className="country-card">
                <img
                  src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1711624056/png-transparent-flag-of-the-united-states-national-flag-usa-flag-flag-logo-united-states_job3pc.png"
                  alt="country"
                  className="country-flag-img"
                />
                <p className="country-name"> * USA</p>
              </div>
              <p className="transaction-detail">
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom-card">
          <div className="more-details-card">
            <h2 className="more-details-head">mettā muse</h2>
            <p className="detail-item">About Us</p>
            <p className="detail-item">Stories</p>
            <p className="detail-item">Artisans</p>
            <p className="detail-item">Boutiques</p>
            <p className="detail-item">Contact Us</p>
            <p className="detail-item">EU Compliances Docs</p>
          </div>
          <div className="more-details-card">
            <h2 className="more-details-head">Quick Links</h2>
            <p className="detail-item">Orders & Shipping</p>
            <p className="detail-item">Join/Login as a Seller</p>
            <p className="detail-item">Payment & Pricing</p>
            <p className="detail-item">Return & Refunds</p>
            <p className="detail-item">FAQs</p>
            <p className="detail-item">Privacy Policy</p>
            <p className="detail-item">Terms & Conditions</p>
          </div>
          <div className="more-details-card">
            <h2 className="more-details-head">FOLLOW US</h2>
            <div className="follow-logo-card">
              <FaInstagram
                size={36}
                style={{
                  color: "#ffffff",
                  marginLeft: "5px",
                  marginRight: "10px",
                }}
              />
              <FaLinkedin size={36} style={{ color: "#ffffff" }} />
            </div>
            <div>
              <h2 className="payment-head">mettā muse Accepts</h2>
              <div>
                <img
                  className="payment-method-img"
                  src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1711624780/png-transparent-google-pay-or-tez-hd-logo-thumbnail_jx71k8.png"
                  alt="payment"
                />
                <img
                  className="payment-method-img"
                  src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1711625441/pngimg.com_-_paypal_PNG7_eqyvzn.png"
                  alt="payment"
                />
                <img
                  className="payment-method-img"
                  src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1711624710/amex-card1708_bruhb8.jpg"
                  alt="payment"
                />
                <img
                  className="payment-method-img"
                  src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1711624692/5968601_x0yjvu.png"
                  alt="payment"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-card">
          <p className="about-copyright">
            Copyright © 2023 mettamuse. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
