import React from "react";
import { doc, getDoc, getDocs, collection, query, where, writeBatch, addDoc, documentId } from "firebase/firestore"
import { db } from "."
import { useContext } from 'react';
import { CartContext } from "../../Context/CartContext"


export const getProducts = (categoryId) => {
    return new Promise((resolve, reject)=>{
        const collectionRef = categoryId ?
        query(collection(db, "Productos"), where("category", "==", categoryId))
        : collection(db, "Productos")

        console.log(collectionRef)

        getDocs(collectionRef).then(response => {
            console.log(response)
            const productsAddapted = response.docs.map(doc =>{
                const data = doc.data()
                return ({id: doc.id, ...data})
            })
            resolve(productsAddapted)
        })
        .catch(error=>{
            reject(error)
        })
    })
}


export const getProduct = (productId) =>{

    return new Promise ((resolve, reject)=>{
        const docRef = doc(db, "Productos", productId)

        getDoc(docRef).then(doc =>{
            console.log(docRef)

            const data = doc.data()
            const productAdapted = { id: doc.id, ...data }

            resolve(productAdapted)
        })
        .catch(error =>{
            reject(error)
        })
})
}

export const createOrder = async (datosComprador) =>{
    const {cart, getTotalAmount} = useContext(CartContext)
    const totalAmount = getTotalAmount()
    let nameSinStock = []
    let orderAdded = {}
    let outOfStock = []
    try{       
    const objOrder ={datosComprador, cart, totalAmount}
    console.log(objOrder)
    
    const ids = cart.map(prod => prod.id)
    const productsRef = collection(db, 'Productos')

    const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in' , ids)))
    const { docs } = productsAddedFromFirestore
    console.log(productsAddedFromFirestore)
    
    const batch = writeBatch(db)
    //const outOfStock = []

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
        //const 
        orderAdded = await addDoc(orderRef, objOrder)

    } else {
        //let nameSinStock = []
        outOfStock.forEach(prod => {
            nameSinStock.push(prod.name)
        })
        console.log(nameSinStock.toString())
    }
}
 catch (error) {
    console.log(error)
}

return new Promise ((resolve, reject)=>{
    (outOfStock.length === 0).then(resolve(orderAdded.id))
    .catch(reject(nameSinStock.toString()))
}) 
}

