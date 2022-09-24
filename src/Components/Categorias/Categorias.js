import React from 'react';
import "./Categorias.css"

const Categorias = ({Categorias}) => {
    return(
        <li className='nav-item pe-3 ps-3' id="fondo">
            <a className="nav-link active" aria-current="page" href="#">{Categorias}</a>
        </li>
    )
}

export default Categorias