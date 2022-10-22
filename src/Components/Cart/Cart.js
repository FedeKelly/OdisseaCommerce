import React from 'react';
import "./Cart.css"
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";



const Cart = () => {

    const {cart} = useContext(CartContext)
    const products = cart
    const { getTotalAmount } = useContext(CartContext)
    const totalAmount = getTotalAmount()
    const { removeItem } = useContext(CartContext)
    console.log(products)
    
    if(totalAmount === 0){
        return(
            <>
            <h1 className="text-center text-white">Tu carrito de compras está vacío</h1>
            <Link to="/">
                <h2 className="text-center text-white">Haz click aquí para ver nuestros productos</h2>
            </Link>
            </>
        )
    }

    return(
        <div>
            <h1 className="text-center text-white">Este es tu Carrito de Compras</h1>
            <h2 className="text-center text-white">Total a comprar: $ {totalAmount}</h2>
            <div className='d-flex justify-content-center'>
                <Link to="/Checkout" className='btn btn-primary m-2 p-2'>Confirmar Compra</Link>
            </div>
            <div className='container-fluid row justify-content-around mt-3'> 
                {products.map(product =>
                <div className="card m-3 p-3 bg-success" id="Cards" key={product.id}>
                    <img src={require("../../Images/"+ (product.img) +".png")} className="card-img-top" alt="IMAGEN"></img>
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.descripcion}</p>
                    </div>
                    <button className="btn btn-light btn-sm" onClick={(e)=>removeItem(product.id)}>Eliminar</button>
                    <h5 className="card-title p-2 m-2">{product.count} unidades x $ {product.price}</h5>
                </div>
                )}
            </div>
        </div>
    )
}

export default Cart
