import React from 'react';
import './footer.css';
import furnityLogo from '../../images/Ellipse 1133.svg';

const footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
      <div className="logo-img">
          <img src={furnityLogo} alt="" />
        </div>
        <div className="logo-item">
          Furnity.
        </div>
      </div>
      <div className="footer-links">
        <ul className="footer-link">
          <li className="footer-link-item"><a href="">Support</a></li>
          <li className="footer-link-item"><a href="">Privacy Policy</a></li>
          <li className="footer-link-item"><a href="">Terms and Conditions</a></li>
          <li className="footer-link-item"><a href=""></a></li>
        </ul>
      </div>

      <div className="footer-copyright">
        <span>
        &copy; 2020 Furnity, All Rights Reserved
        </span>
      </div>
    </div>
  )
}

export default footer