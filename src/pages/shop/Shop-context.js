import React, { createContext, useState } from 'react'


export const ShopContext=createContext(null);

function getDefaultCart(){
    let cart={}
    for (let i=1;i<21;i++)
    {
        cart[i]=0;
    }
    return cart;
}

export function ShopContextProvider(props) {
    
   
    const [cartItems,setCartItems]=useState(getDefaultCart());
    const [itemAdded,setItemAdded]= useState(false);

    function getTotalAmount(){
        let totalAmount=0;
        for (const item in cartItems){
            if (cartItems[item]>0){
                let itemInfo = props.productData.find((product)=>product.id === Number(item))
                totalAmount += cartItems[item]*itemInfo.price*81;
            }
        }
        return totalAmount
       }

    function addItemToCart(itemId){
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        setItemAdded(true)
    };
    function removeItemFromCart(itemId){
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    };
    function updateCartItemCount(newAmount,itemId){
        setCartItems((prev)=>({...prev,[itemId]:newAmount}));
    };
    const contextValue = {cartItems, addItemToCart,removeItemFromCart,itemAdded,updateCartItemCount,getTotalAmount}
  
  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
  
}

// export default Shop-context