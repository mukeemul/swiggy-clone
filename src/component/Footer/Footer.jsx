import React from 'react';
// import './Footer.css';
import { BsInstagram, BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-section">
        <div className="top-footer">
          <ul className='footer-links'>
            <li className='clr'><a href="/">Company</a></li>
            <li><a href="/">About us</a></li>
            <li><a href="/">Team</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Swiggy Blog</a></li>
            <li><a href="/">Bug Bounty</a></li>
            <li><a href="/">Swiggy One</a></li>
            <li><a href="/">Swiggy Corporate</a></li>
            <li><a href="/">Swiggy Instamart</a></li>
            <li><a href="/">Swiggy Genie</a></li>
          </ul>
        </div>
        <div className="top-footer">
          <ul className='footer-links'>
            <li className='clr'><a href="/">Contact</a></li>
            <li><a href="/">Help & Support</a></li>
            <li><a href="/">Partner with us</a></li>
            <li><a href="/">Ride with us</a></li>
          </ul>
        </div>
        <div className="top-footer">
          <ul className='footer-links'>
            <li className='clr'><a href="/">Terms & Conditions</a></li>
            <li><a href="/">Refund & Cancellation</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Cookie Policy</a></li>
            <li><a href="/">Offer Terms</a></li>
            <li><a href="/">Phishing & Fraud</a></li>
            <li><a href="/">Corporate - Swiggy Money Codes Terms and <br />Conditions</a></li>
            <li><a href="/">Corporate - Swiggy Discount Voucher Terms and<br /> Conditions</a></li>
          </ul>
        </div>
        <div className="top-footer">
          <ul className='footer-links'>
            <img alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" />
            <img alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" />
          </ul>
        </div>
      </div>
      <div className="footer-icon">
        <div className="owner">
          <h4>Mukeemul Haque</h4>
        </div>
        <div className="copyright">
          <p>@Copyright2023 By Mukeemul Haque || All rights reserved</p>
        </div>
        <div className="social-icon">
          <div className="insta">
            <a href="https://www.instagram.com/mukeemul_haque/"><BsInstagram /></a>
          </div>
          <div className="linkedin">
            <a href="https://www.linkedin.com/in/mukeemul-haque-55bb2525a/"></a> <BsLinkedin />
          </div>
          <div className="github">
            <a href="https://github.com/mukeemul"></a><BsGithub />
          </div>
          <div className="twitter">
            <a href="https://twitter.com/mukeemul"></a><BsTwitter />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
