import React from 'react'
import './RelatedProduct.css'
import Item from '../Item/Item'
import data_product from '../Assests/data'

const RelatedProduct = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
      <hr/>
      <div className='relatedproducts-item'>
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image}
            old_price={item.old_price} new_price={item.new_price}/>
        })}
      

    </div>

    </div>
  )
}

export default RelatedProduct
