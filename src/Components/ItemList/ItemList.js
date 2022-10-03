import React from 'react';
import "./ItemList.css";
import { Link } from "react-router-dom";

const ItemList = ({products}) => {
    return(
/*         <div className='container-fluid row justify-content-around mt-3'>  
            {products.map(product => <Link to={`/detail/${product.id}`} className="card m-3 p-3 bg-success" id="Cards" key={product.id}>
                                        <img src={require("../../Images/"+ (product.img) +".png")} className="card-img-top" alt="IMAGEN"></img>
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                        </div>
                                    </Link>)}
            
        </div> */ 
                <ul className='list-group container-fluid justify-content-center' id='Listado'>
                    {products.map(product => <Link to={`/detail/${product.id}`} className="list-group-item m-3 bg-info bg-opacity-75 fs-4" key={product.id}>{product.name}</Link>)}
                </ul>
                
    )
}
export default ItemList