import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../shop/Shop-context';
import get from 'axios'
import CartItem from './CartItem';
import './cart.css'
import CartCheckout from './CartCheckout';
import App from '../../App';
import {useNavigate} from 'react-router-dom'


export function Cart(props) {
  // const [productData,setProductData]=useState([]);
  
  const {removeItemFromCart,cartItems,getTotalAmount}=useContext(ShopContext);
  const totalAmount=getTotalAmount();
  const navigate=useNavigate();
    // useEffect(function(){
    //     get("https://fakestoreapi.com/products")
    //     .then((response)=>setProductData(response.data))
    //     .catch((error)=>console.log(error))
    // })

  return (
    <div className='cart'>
      <div>
      <h1>Your Cart Items</h1>
      </div>
      <div className='CartItems'>
          {
            props.productData.map((data)=>{
              if (cartItems[data.id] !==0){
                return <CartItem data={data}/>
              }
            })
          }
      </div>
      <div>
              <CartCheckout totalAmount={totalAmount} navigate={navigate}/>
      </div>
    </div>
  )
}

export default Cart