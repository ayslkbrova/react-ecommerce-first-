import React from 'react';
import '../../containers/card/card.css';
import { IoCloseSharp } from "react-icons/io5";
import './basket.css'
const Basket = ({ basket, cost, show, setShow }) => {
  return (
    <div className='basket-menu'>
      <div className='basket-item'>
        <span className='your-cart'>Your Cart</span>
        <IoCloseSharp cursor={'pointer'} fontSize={'1.5em'} onClick={() => setShow(false)} />
      </div>
      <div className='divider'></div>
      {basket.length === 0 && <p className='not-found'>There are no items in your bag</p> || null}
      {
        basket.map(chair => (
          <div className="basket-item-content">
            <div className='image'>
              <img src={chair.img} />
            </div>
            <div className='chair-name'>
              <div className='name'><span>$</span>{chair.name}</div>
              <div className='category'>{chair.category}</div>
            </div>
            <div className='price'>
              <div className='price-item'><span>$</span>{chair.price * chair.amount}</div>

            </div>

          </div>
        ))
      }
      {
        cost &&
        <div className='element'>
          <div className='divider'></div>
          <div className='total'>
            <p>  Total  Payment:</p>
            <span>${cost}</span></div>

          <a className='button'>
            Pay Now
          </a>
        </div> || null
      }
    </div>
  )
}

export default Basket