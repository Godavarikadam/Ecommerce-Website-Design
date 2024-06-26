import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
       <div className='descriptionbox-navigator'>
       <div className='descriptionbox-nav-box'>Description</div>
       <div className='descriptionbox-nav-box fade'>Reviews(120)</div>
      
      </div>
     <div className='descriptionbox-description'>
        <p>
        A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.
        </p>

        <p>An eCommerce website is an online destination where buyers shop for goods and sellers offer products and services. You can sell just about anything through an eCommerce site. </p>
     </div>
    </div>
  )
}

export default DescriptionBox
