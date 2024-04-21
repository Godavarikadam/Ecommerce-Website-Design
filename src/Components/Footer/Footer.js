import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/shopper1.avif'
import { FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt=" "></img>
            <p>SHOPPER</p>
        </div>

        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    <div className='footer-social-icon'>
    <div  className='footer-icon-container'>
    <FaInstagram />
    </div>
    <div  className='footer-icon-container'>
    <BsWhatsapp />
    </div>
    <div  className='footer-icon-container'>
    <FaPinterest />
    </div>
    </div>
    <div className='footer-copyright'>
        <hr/>
        <p>Copyright @2024-All Right Reserved.</p>
    </div>

      
    </div>
  )
}

export default Footer
