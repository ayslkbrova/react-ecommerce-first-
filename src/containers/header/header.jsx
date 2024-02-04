import React from 'react';
import './header.css';
const header = () => {
  return (
    <div className='header-section'>
      <div className="header-section-items">
        <h1 className='head-title'>Offer products to make your interior<span> Minimalist.</span></h1>
        <div className="content"><p>we have helped more than 1000+ people to give perfect comfort to the interior of their home</p></div>
        <div className="header-button">
                <a className="button">Contact us</a>
            </div>
      </div>
    </div>
  ) 
}

export default header