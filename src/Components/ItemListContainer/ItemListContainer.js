import React, { useState,useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../MockProducts';
import "./ItemListContainer.css";
import ItemList from '../ItemList/ItemList';
import Loading from "../../Images/loading-1.gif"
import { useParams } from "react-router-dom";

const ItemListContainer = ({greetings}) => {

    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()
    console.log(categoryId)
    
    useEffect(() => {
        if(!categoryId){
        getProducts().then(res =>{
            setProducts(res)
        }).catch(err =>{
            setError(true)
        }).finally(()=>{
            setLoading(false)
        })} else{       
            getProductsByCategory(categoryId).then(res =>{
            setProducts(res)
        }).catch(err =>{
            setError(true)
        }).finally(()=>{
            setLoading(false)
        })

        }
    },[categoryId])

if(error === true){
    return <h1>No se encontraron Productos</h1>
}

if(loading === true){
    return (
    <div className='d-flex justify-content-center h-25'>
        <img src={Loading} alt="Loading"></img>
    </div>)
}

    return(
        <div>
            <h1 className="ItemListContainer text-center text-white">{greetings}</h1>
            <ItemList products={products} />
        </div>
    )

}

export default ItemListContainer