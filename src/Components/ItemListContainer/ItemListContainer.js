import React from 'react';
import "./ItemListContainer.css";

const ItemListContainer = ({greetings}) => {
    return(
        <h1 className="ItemListContainer text-center">{greetings}</h1>
    )

}

export default ItemListContainer