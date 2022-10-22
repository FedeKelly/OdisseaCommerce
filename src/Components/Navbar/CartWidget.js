import React from 'react';
import CartIcon from "../../Images/CartWidget.png";
import "./CartWidget.css"
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';


const CartWidget = () => {
  const {getTotalQuantity} =useContext(CartContext)
  const totalQuantity = getTotalQuantity()

    return(
        <div className='w-auto border border-1 border-dark rounded p-1'>
            <img className='Cart p-1' src={CartIcon} alt="Carrito"/>
            {totalQuantity}
        </div>
    )
}

export default CartWidget