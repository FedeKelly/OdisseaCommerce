import React from 'react';
import CartIcon from "../../Images/CartWidget.png";
import "./CartWidget.css"

const CartWidget = () => {
    return(
        <div className='w-auto border border-1 border-dark rounded p-1'>
            <img className='Cart p-1' src={CartIcon} alt="Carrito"/>
            0
        </div>
    )
}

export default CartWidget