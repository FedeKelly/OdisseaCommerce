import React, { useState, useEffect, useContext } from "react";
import "./ItemCount.css";
import { CartContext } from "../../Context/CartContext"

const ItemCount = ({product}) => {

    const [count, setCount] = useState(0);
    let productToAdd = 0;
    const {addItem} = useContext(CartContext)
    const {cart} = useContext(CartContext)

    useEffect(() => {
    const itemAgregado = cart.find(prod => prod.id === product.id) || 0
    if(itemAgregado.count>0){
        setCount(itemAgregado.count)
    }},[])

    const increment = () => {setCount(count + 1)}
    const decrement = () => {
        if(count>0){setCount(count - 1)}
    }

     const onAdd = () => {
        productToAdd={...product, count}
        console.log(productToAdd)
        addItem(productToAdd)
    }

    
    
    return (
        <div className="d-flex flex-row">
            <div className="btn-group me-2" role="group" aria-label="Basic outlined example">
                <button onClick={decrement} type="button" className="btn btn-light border btn-sm">-</button>
                <span className="bg-light border p-1 text-center" id="Count">{count}</span>
                <button onClick={count<product.stock? increment : null} type="button" className="btn btn-light border btn-sm">+</button>
            </div>
            <div className="d-flex">
                <button className="btn btn-light btn-sm" onClick={onAdd}>Agregar al Carrito</button>
            </div>
        </div>
    );
}

export default ItemCount