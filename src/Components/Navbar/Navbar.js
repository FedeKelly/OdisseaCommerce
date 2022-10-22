import React from 'react';
import LogoNavbar from '../../Images/LogoNavbar.jpg';
import CartWidget from "./CartWidget.js";
import "./Navbar.css";
import Categorias from '../Categorias/Categorias';
import { Link } from "react-router-dom"
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';



const Navbar = () => {

    const { getTotalQuantity} = useContext(CartContext)
    const totalQuantity = getTotalQuantity()

    return(
        <nav className='navbar navbar-expand-lg bg-light bg-opacity-50 pe-3 ps-3 pt-3'>
            <div className='container-fluid'>
                <Link to="/"><div className="navbar-brand"><img className="navbar-brand" src={LogoNavbar} alt="Logo"/></div></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse' id="navbarNav">
                    <ul className='navbar-nav me-auto mb-lg-0'>
                    <Categorias Categorias={"Remeras"}/>
                    <Categorias Categorias={"Pantalones"}/>
                    <Categorias Categorias={"Zapatillas"}/>
                    <Categorias Categorias={"Accesorios"}/>
                    </ul>
                </div>
                <Link to="/Cart">{totalQuantity>0 ? <CartWidget/>:""}</Link>
            </div>
        </nav>
    )
}

export default Navbar