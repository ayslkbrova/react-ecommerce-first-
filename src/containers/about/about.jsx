import React from 'react';
import './about.css';
import { BiLoaderCircle, BiPackage } from "react-icons/bi";
import { PiPackage } from "react-icons/pi";
import { BiUserPin } from "react-icons/bi";
import { BiTargetLock } from "react-icons/bi";
import aboutIMg from '../../images/Rectangle 9546.png';


const about = () => {
    return (
        <div className='about-section'>
            <div className="about-section-items">
                <div className="about-section-left-items">
                    <div className="left-items-top">
                        <div className="item-top">
                            <div className="icon"><PiPackage  color='#A5F5FD' fontSize='1.5rem'/></div>
                            <span className="title">Fast and safe delivery</span>
                            <p className="content">please login and buy our products, safe delivery guaranteed</p>
                        </div>
                        <div className="item-top">
                            <div className="icon"><BiLoaderCircle color='#C5E2AC' fontSize='1.5rem' /></div>
                            <span className="title">Quick and easy returns</span>
                            <p className="content">Items that do not match we are ready to replace, please return</p>
                        </div>
                        <div className="item-top">
                            <div className="icon">< BiUserPin  color='E8B9C4' fontSize='1.5rem' /></div>
                            <span className="title">24 hour customer service</span>
                            <p className="content">Our customer service is ready to serve you at any time, don't hesitate to contact us</p>
                        </div>
                        <div className="item-top">
                            <div className="icon">< BiTargetLock  color='73CAB2' fontSize='1.5rem' /></div>
                            <span className="title">the price match is very fitting</span>
                            <p className="content">The price of the products we offer is very in accordance with the quality of the goods</p>
                        </div>
                    </div>
                    <div className="left-items-bottom">
                        <div className="button">
                            <a href='#'>
                            Start Shopping
                            </a>
                        </div>
                    </div>
                </div>
                <div className="about-section-right-item">
                    <div className="image">
                    <img src={aboutIMg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about