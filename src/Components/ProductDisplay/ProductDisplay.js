import React, { useContext } from 'react'
import './ProductDisplay.css'
import { CiStar } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
            <img src={product.image} alt=""></img>
            <img src={product.image} alt=""></img>
            <img src={product.image} alt=""></img>
           
        </div>

        <div className='productdisplay-img'>
            <img className='productdisplay-main-img' src={product.image}></img>
        </div>
        </div>

        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-star'>
            <FaRegStar/>
            <FaRegStar/>
            <FaRegStar/>
            <FaRegStar/>
               <CiStar/>
               <p>(120)</p>
              
            </div>
            <div className='productdisplay-right-prices'>
            <div className='productdisplay-right-price-old'>
                ${product.old_price}
                
                </div>
                <div className='productdisplay-right-price-new'>
                ${product.new_price}
                
                 </div>
            </div>

            <div className='right-description'>A lightweight, usually knitted and close-fitting stylish garment.</div>

            <div className='product-display-right-size'>
                <h1>Select Size</h1>
                <div className='sizes'>
           <div>S</div>
           <div>M</div>
           <div>L</div>
           <div>XL</div>
           <div>XXL</div>
           </div>

           </div>
           <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
           <p className='productdisplay-right-category'><span>Category : </span>Women, TiShirts,Crop Top</p>
           <p className='productdisplay-right-category'><span>Tags : </span>Modern,Latest</p>

        </div>
      
    </div>
  )
}

export default ProductDisplay
