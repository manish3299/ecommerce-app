import React,{useContext, useState} from 'react'
import './cart.css'
import { ShopContext } from '../shop/Shop-context'

function CartItem(props) {
    const {cartItems,addItemToCart,removeItemFromCart,updateCartItemCount}=useContext(ShopContext);

    const [totalAmount,setTotalAmount]=useState(cartItems[props.data.id]*props.data.price*81);
  return (
    <div>
        <div>
            <div className='cart-item'>
                <img src={props.data.image}/>
                    <div className='description'>
                        <p><b>{props.data.title}</b></p>
                        <p>INR: Rs{props.data.price*81}</p>
                        <div className='quantity'>
                            <button onClick={()=>{removeItemFromCart(props.data.id)}}>-</button>
                            <input value={cartItems[props.data.id]} onChange={(e)=>{
                                updateCartItemCount(Number(e.target.value),props.data.id);
                                }}/>
                            <button onClick={()=>{addItemToCart(props.data.id)}}>+</button>

                        </div>
                    </div>
            </div>
        </div>
       
     
    </div>
    
  );
};

export default CartItem