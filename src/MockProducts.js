const products =[
    { id:"1", name: "Remera Niño Odissea", category: "Remeras", img:"Producto1", stock:25, descripcion: "Remera Niño Odisea Trail, carrera del 23 de septiembre"},
    { id:"2", name: "Remera Mujer Odissea", category: "Remeras", img:"Producto2", stock:15, descripcion: "Remera mujer Odisea Trail, carrera del 23 de septiembre"},
    { id:"3", name: "Remera Hombre Odissea", category: "Remeras", img:"Producto3", stock:10, descripcion: "Remera hombre Odisea Trail, carrera del 23 de septiembre"},
    { id:"4", name: "Mate Odissea", category: "Accesorios", img:"Producto4", stock:12, descripcion: "Mate Odissea, de madera y logo calado"},
    { id:"5", name: "Tabla Odissea", category: "Accesorios", img:"Producto5", stock:5, descripcion: "Tabla de madera para asador, con logo calado"},
]


export const getProducts = () => {

    return new Promise((res)=>{
    setTimeout(() => {
        res(products)

    },2000)
    }
    )
}

export const getProduct = (id) => {
    console.log(products)

    return new Promise((res)=>{
    setTimeout(() => {
        res(products.find(prod => prod.id === id))
    },2000)
    }
    )
}

export const getProductsByCategory = (categoryId) => {

    return new Promise((res)=>{
    setTimeout(() => {
        res(products.filter(prod => prod.category === categoryId))
    },2000)
    }
    )
}