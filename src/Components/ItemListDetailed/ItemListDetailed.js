import React, {useState, useEffect } from 'react';
import "./ItemListDetailed.css";
import Item from '../Item/Item';
import Loading from "../../Images/loading-1.gif";
//import { getProduct } from "../../MockProducts";
import { useParams } from "react-router-dom";
//import { doc , getDoc } from 'firebase/firestore';
//import { db } from "../../services/firebase"
import {getProduct} from "../../services/firebase/Firestore"


const ItemListDetailed = ({greeting}) => {

    const [product, setProduct] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {

        /*const docRef = doc(db, "Productos", productId)

        getDoc(docRef).then(doc =>{
            console.log(docRef)

            const data = doc.data()
            const productAdapted = { id: doc.id, ...data }

            setProduct(productAdapted)}*/
        getProduct(productId).then(product =>{
            setProduct(product)}
        ).catch(error =>{
            setError(true)
        }).finally(()=>{
            setLoading(false)
        })
    },[])

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
            <h1 className="ItemListContainer text-center text-white">{greeting}</h1>
            <div className='d-flex justify-content-center'>
                <Item product={product} />
            </div>
        </div>
    )

}

export default ItemListDetailed