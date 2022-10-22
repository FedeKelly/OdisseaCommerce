import React from 'react';
import { useState, createContext } from "react"

export const CartContext=createContext()

export const CartContextProvider = ({children})=>{
const [cart, setCart] = useState([])
console.log(cart)

const addItem = (productToAdd) => {

    if(!isInCart(productToAdd.id)){
        setCart([...cart, productToAdd])
    }else{
        const cartWithoutItem = cart.filter(prod => prod.id !== productToAdd.id)
        setCart([...cartWithoutItem, productToAdd])
    }
}

const isInCart=(id) => {
    return(
        cart.some(prod => prod.id === id)

)}

const getTotalQuantity = () => {
    let totalQuantity = 0

    cart.forEach(prod => {
        totalQuantity += prod.count
    })

    return totalQuantity
}

const getTotalAmount = () => {
    let totalAmount = 0
    cart.forEach(prod => {
        totalAmount += (prod.count * prod.price)
    })

    return totalAmount
}

const removeItem = (id) => {
    const cartWithoutItem = cart.filter(prod => prod.id !== id)
    setCart(cartWithoutItem)
  }

const clearCart =() => {
    setCart([])
}

return (
    <CartContext.Provider value={{cart, getTotalQuantity, addItem, removeItem, getTotalAmount, clearCart}}>
        {children}
    </CartContext.Provider>
)
}