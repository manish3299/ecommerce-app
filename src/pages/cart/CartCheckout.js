import React from 'react'
import './cart.css'

function CartCheckout(props) {
  return (
    props.totalAmount > 0 ?
        (<div>
        
        <div className='checkout'>
            <p>Total Amount : INR: Rupees{props.totalAmount} </p>
            <button onClick={()=>props.navigate("/")}>Continue Shopping</button>
            <button>CheckOut</button>
        </div>
    </div>)
    :
    (<h1>Your Cart is Empty</h1>)

  );
}

export default CartCheckout