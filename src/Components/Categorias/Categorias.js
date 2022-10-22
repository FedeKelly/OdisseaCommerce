import React from 'react';
import "./Categorias.css"
import { NavLink } from "react-router-dom";

const Categorias = ({Categorias}) => {
    return(
        <li className='nav-item pe-3 ps-3' id="fondo">
            <NavLink to={`/category/${Categorias}`} activeclassname="currentCategory" className="nav-link" aria-current="page">{Categorias}</NavLink>
        </li>
    )
}

export default Categorias