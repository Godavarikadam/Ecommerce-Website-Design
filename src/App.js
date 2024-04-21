import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom' ;
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product  from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';

import men_banner from './Components/Assests/menbanner1.webp'
import women_banner from './Components/Assests/wbanner1.webp'
import kid_banner from './Components/Assests/kidsbanner.jpg'

function App() {
  return (
    // <React.StrictMode>
    <div >
      {/* <Navbar/> */}
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>

        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" style={{ width: '300px', height: '100px' }}/>}></Route>

        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"style={{ width: '300px', height: '100px' }}/>}></Route>

        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" style={{ width: '300px', height: '100px' }}/>}></Route>

        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}></Route>
        </Route>

        <Route path='/cart' element={<Cart/>}></Route>

        <Route path='/login' element={<LoginSignup/>}></Route>



      </Routes>
      <Footer/>



      </BrowserRouter>
      
      
    </div>
    // </React.StrictMode>
  );
}

export default App;
