import React from 'react';
import "./ItemListContainer.css";
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greetings}) => {
    return(
        <div>
            <h1 className="ItemListContainer text-center">{greetings}</h1>
            <div className='d-flex justify-content-center'>
                <ItemList />
            </div>
        </div>
    )

}

export default ItemListContainer