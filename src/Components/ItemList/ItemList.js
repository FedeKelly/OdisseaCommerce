import React from 'react';
import "./ItemList.css";
import { Link } from "react-router-dom";

const ItemList = ({products}) => {
    return(
                <ul className='list-group container-fluid justify-content-center' id='Listado'>
                    {products.map(product =><div className='m-3'key={product.id}>
                        <Link to={`/detail/${product.id}`} className="d-block list-group-item bg-info bg-opacity-75 fs-4" >{product.name}
                        <img src={require("../../Images/"+ (product.img) +".png")} className="d-block rounded align-center p-2" style={{width: 150}} alt="IMAGEN"></img></Link>
                    </div>)}
                </ul>
                
    )
}
export default ItemList