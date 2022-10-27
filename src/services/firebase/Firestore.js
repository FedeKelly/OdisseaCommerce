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

