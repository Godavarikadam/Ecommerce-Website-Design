import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart from '../Assests/cart.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [Menu,setMenu]=useState("shop");

    const { getTotalCartItems}=useContext(ShopContext)
  return (
    <div className='navbar'>
         <div className='nav-logo'>
            <img src={logo}></img>
            <p>SHOPPER</p>
        </div>

        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none"}} to='/'>Shop </Link>{Menu==='shop'?<hr/>:<></>} </li>
            
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:"none"}}  to='/mens'>Men </Link>{Menu==='mens'?<hr/>:<></>} </li>

            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:"none"}}  to='/womens'>Women </Link>{Menu==='womens'?<hr/>:<></>} </li>

            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none"}}  to='/kids'>kids</Link>{Menu==='kids'?<hr/>:<></>} </li>
            
        </ul>

        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart}></img></Link> 
            <div className='nav-cart-count'>{ getTotalCartItems()}</div>
        </div>

      
    </div>
  )
}

export default Navbar
