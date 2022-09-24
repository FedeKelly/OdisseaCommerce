import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({stockExistente}) => {

    const [count, setCount] = useState(0);
    let compra = 0;

    const increment = () => {setCount(count + 1)}
    const decrement = () => {
        if(count>0){setCount(count - 1)}
    }

     const onAdd = () => {
        {compra=count}
        console.log(compra)
    }

    return (
        <div className="d-flex flex-row">
            <div className="btn-group me-2" role="group" aria-label="Basic outlined example">
                <button onClick={decrement} type="button" className="btn btn-light border btn-sm">-</button>
                <span className="bg-light border p-1 text-center" id="Count">{count}</span>
                <button onClick={count<stockExistente? increment : null} type="button" className="btn btn-light border btn-sm">+</button>
            </div>
            <div className="d-flex">
                <button className="btn btn-light btn-sm" onClick={onAdd}>Agregar al Carrito</button>
            </div>
        </div>
    );
}

export default ItemCount