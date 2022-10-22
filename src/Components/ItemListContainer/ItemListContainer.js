import React, { useState,useEffect } from 'react';
//import { getProducts, getProductsByCategory } from '../../MockProducts';
import "./ItemListContainer.css";
import ItemList from '../ItemList/ItemList';
import Loading from "../../Images/loading-1.gif"
import { useParams } from "react-router-dom";
//import { getDocs, collection, query, where } from "firebase/firestore"
//import { db } from "../../services/firebase"
import {getProducts} from "../../services/firebase/Firestore"

const ItemListContainer = ({greetings}) => {

    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()
    console.log(categoryId)
    
    useEffect(() => {
        
        /*const collectionRef = categoryId ?
        query(collection(db, "Productos"), where("category", "==", categoryId))
        : collection(db, "Productos")

        console.log(collectionRef)

        getDocs(collectionRef).then(response => {
            console.log(response)
            const productsAddapted = response.docs.map(doc =>{
                const data = doc.data()
                return ({id: doc.id, ...data})
            })
            setProducts(productsAddapted)
        })*/
        getProducts(categoryId).then(products =>
            setProducts(products))
        .catch(error =>{
            setError(true)
        }).finally(()=>{
            setLoading(false)})
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
            <div className='d-flex justify-content-center'>
                <ItemList products={products} />
            </div>
        </div>
    )

}

export default ItemListContainer