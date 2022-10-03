import React from 'react';
import "./Categorias.css"
import { Link } from "react-router-dom";

const Categorias = ({Categorias}) => {
    return(
        <li className='nav-item pe-3 ps-3' id="fondo">
            <Link to={`/category/${Categorias}`} className="nav-link active" aria-current="page">{Categorias}</Link>
        </li>
    )
}

export default Categorias