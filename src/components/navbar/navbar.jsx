import React from 'react';
import './navbar.css';
import furnityLogo from '../../images/Ellipse 1133.svg';
import { IoSearch } from "react-icons/io5";
import { BiBasket } from "react-icons/bi";
import { TiThMenu } from "react-icons/ti";
import { MdClose } from "react-icons/md";
const navbar = ({ show, setShow, search, setSearch, menu, setMenu }) => {

  return (
    <div className='header'>
      <div className="logo">
        <div className="logo-img">
          <img src={furnityLogo} alt="" />
        </div>
        <div className="logo-item">
          Furnity.
        </div>
      </div>

      <div className={`navbar ${menu ? "open" : ""}`}>

        <ul className="nav-links">
          <li className="nav-link-item"><a href='#'> Badroom </a></li>
          <li className="nav-link-item"><a href='#'> Living Room</a></li>
          <li className="nav-link-item"><a href='#'> Dininig Room</a></li>
          <li className="nav-link-item"><a href='#'> Office </a></li>
          <li className="nav-link-item"><a href='#'> Kitchen </a></li>
          <li className="nav-link-item"><a href='#'>Sofa</a> </li>
          <div className='menu-close' onClick={() => setMenu(false)}>    <MdClose  fontSize={'1.5rem'} /></div>
        </ul>
      </div>
      <div className="search-basket-icons">
        <div className="search-icon" onClick={() => setSearch(true)} ><IoSearch fontSize={'1.2rem'} /></div>
        <div className="basket-icon" onClick={() => setShow(true)} ><BiBasket fontSize={'1.2rem'} /></div>
        <div className="navbar-menu" onClick={() => setMenu(true)}><TiThMenu fontSize={'1.2rem'} /></div>
      </div>
 
    </div>
  )
}

export default navbar