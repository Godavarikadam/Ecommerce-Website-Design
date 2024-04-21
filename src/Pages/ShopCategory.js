import React, { useContext } from 'react'
import './ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import { IoMdArrowDropdown } from "react-icons/io";

import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopCategory-banner' src={props.banner}></img>
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing products</span> out of 28 products
        </p>
        <div className='shopcategory-sort'>Sort By
        <IoMdArrowDropdown />
</div>
      </div>
      <div className='shopcategory-products'>{all_product.map((item, i) => {
        if (props.category === item.category) {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        }
        else {
          return null;
        }
      })}
      </div>

      <div className='shopcategory-loadmore'>Explore More</div>



    </div>
  )
}

export default ShopCategory
