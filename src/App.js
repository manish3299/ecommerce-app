import React, { useContext, useEffect, useState } from 'react'
import get from 'axios'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import {Shop} from './pages/shop/Shop'
import {Cart} from './pages/cart/Cart'
import { ShopContextProvider } from './pages/shop/Shop-context';

function App() {
  const [productData,setProductData]=useState([]);
  useEffect(function(){
    get("https://fakestoreapi.com/products")
    .then((response)=>setProductData(response.data))
    .catch((error)=>console.log(error))
})
  return (
    <div className="App">
      <ShopContextProvider productData={productData}>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Shop productData={productData}/>}/>
            <Route path="/cart" element={<Cart productData={productData}/>}/>
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
        
    </div>
  );
}

export default App;
