import React from 'react';
import "./Item.css";
import ItemCount from '../ItemCount/ItemCount';


const Item = ({product}) => {
    return(
        <div className='container-fluid row justify-content-around mt-3'>  
            <div className="card m-3 p-3 bg-success" id="Cards" key={product.id}>
                <img src={require("../../Images/"+ (product.img) +".png")} className="card-img-top" alt="IMAGEN"></img>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.descripcion}</p>
                </div>
                <ItemCount className="p-2 m-2" stockExistente={product.stock} />
            </div>
            
        </div>
    )
}
export default Item