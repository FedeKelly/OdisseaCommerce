import React from "react";
import "./Checkout.css"
import { useForm } from "react-hook-form"
import { useContext, useState, useNavigate } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom"
import { getDocs, addDoc, collection, where, query, documentId, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase"
import swal from "@sweetalert/with-react"
//import {createOrder} from "../../services/firebase/Firestore"


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const {cart, getTotalAmount, clearCart} = useContext(CartContext)
    const totalAmount = getTotalAmount()
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const createOrder = async (datosComprador) =>{
       setLoading(true)
        try{
        const objOrder ={datosComprador, cart, totalAmount}
        console.log(objOrder)
    
    const ids = cart.map(prod => prod.id)
    const productsRef = collection(db, 'Productos')

    const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in' , ids)))
    const { docs } = productsAddedFromFirestore
    console.log(productsAddedFromFirestore)
    
    const batch = writeBatch(db)
    const outOfStock = []

    docs.forEach(doc => {
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock

        const productAddedToCart = cart.find(prod => prod.id === doc.id)
        const prodQuantity = productAddedToCart? productAddedToCart.count : 1000000

        if(stockDb >= prodQuantity) {
            batch.update(doc.ref, { stock: stockDb - prodQuantity })
        } else {
            outOfStock.push({ id: doc.id, ...dataDoc})
        }
    })

    if(outOfStock.length === 0) {
        await batch.commit()

        const orderRef = collection(db, 'orders')
        const orderAdded = await addDoc(orderRef, objOrder)

        swal({
            title: "Felicitaciones!",
            text: `Tu orden fue confirmada. Su ID de referencia es ${orderAdded.id}`,
            icon: "success",
            button: "OK",
          }          );
        console.log(`El id de su orden es: ${orderAdded.id}`)
        clearCart()
        navigate("/")
    } else {
        let nameSinStock = []
        outOfStock.forEach(prod => {
            nameSinStock.push(prod.name)
        })
        swal({
            title: "Hay productos SIN stock",
            text: `${nameSinStock.toString()}`,
            icon: "error",
            button: "OK",
          });
        console.log(nameSinStock.toString())
    }

} catch (error) {
    console.log(error)
} finally {
    setLoading(false)
}
}


if(loading) {
    return <h1 className="text-center text-white">Su orden se esta generando...</h1>
}
    return(
        <div className="mb-3 row d-flex justify-content-center">
            <h2 className="text-center text-white mb-3">Completa tus datos y confirma la compra</h2>
            <form id="form" onSubmit={handleSubmit((datosComprador)=>{createOrder(datosComprador)})}>
                <input className="form-control mb-3" type="text"{...register ("nombre", {required: "El campo es requerido"})} placeholder="Nombre"/>
                <input className="form-control mb-3" type="text" {...register ("apellido", {required: true})} placeholder="Apellido"/>
                <input className="form-control mb-3" type="email" {...register ("mail", {required: true})} placeholder="ejemplo@ejemplo.com"/>
                <input className="form-control mb-3" type="text" {...register ("telefono", {required: true})} placeholder="Teléfono de contacto"/>
                <input className="form-control mb-3" type="text" {...register ("direccion", {required: true})} placeholder="Av. Siempre viva 123, Ciudad, Provincia"/>  
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary m-2 p-2" type="submit">Confirmar</button>
                    <Link to="/Cart"><button className="btn btn-primary m-2 p-2" type="button">Volver</button></Link>
                </div>  
            </form>
        </div>
    )
}

export default Checkout