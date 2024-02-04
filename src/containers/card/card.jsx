import React from 'react';
import './card.css';


const card = () => {
    return (
        <div className='card-section'>
            <div className="card-title"><span>
                Various collections of furniture to fill your interior</span>
                <p className="content">We provide a variety of goods with the best quality for you to find the right one to meet your interior needs</p>
            <div className="card-link">
                <ul className="link-items">
                    <li className="link-item"><a href="">Badroom</a></li>
                    <li className="link-item"><a href="">Living Room</a></li>
                    <li className="link-item"><a href="">Dining Room</a></li>
                    <li className="link-item"><a href="">Office</a></li>
                    <li className="link-item"><a href="">Kitchen</a></li>
                    <li className="link-item"><a href="">Sofa</a></li>
                </ul>
            </div>
            </div>

            <div className="card-container">

            </div>
        </div>

    )
}

export default card