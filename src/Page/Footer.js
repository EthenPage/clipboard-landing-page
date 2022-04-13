import React from "react";
import IMAGES from "../Assets/Images";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-img"><img className="resize" src={IMAGES.logo} alt="logo" /></div>
        <div className="content">
          <ul>
            <li><a href="">FAQs</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Press Kit</a></li>
            <li><a href="">Install Guide</a></li>
          </ul>
        </div>
        <div className="social">
          <a href=""><img className="resize" src={IMAGES.facebook} alt="facebook" /></a>
          <a href=""><img className="resize" src={IMAGES.twitter} alt="twitter" /></a>
          <a href=""><img className="resize" src={IMAGES.instragram} alt="instragram" /></a>
        </div>
      </div>
    </>
  );
}

export default Footer;
