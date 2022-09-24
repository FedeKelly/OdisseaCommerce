const products =[
    {id:1, name: "Remera Niño Odissea", category: "Remera", img:"Producto1", stock:25, descripcion: "Remera Niño Odisea Trail, carrera del 23 de septiembre"},
    {id:2, name: "Remera Mujer Odissea", category: "Remera", img:"Producto2", stock:15, descripcion: "Remera mujer Odisea Trail, carrera del 23 de septiembre"},
    {id:3, name: "Remera Hombre Odissea", category: "Remera", img:"Producto3", stock:10, descripcion: "Remera hombre Odisea Trail, carrera del 23 de septiembre"},
    {id:4, name: "Mate Odissea", category: "Accesorio", img:"Producto4", stock:12, descripcion: "Mate Odissea, de madera y logo calado"},
    {id:5, name: "Tabla Odissea", category: "Accesorio", img:"Producto5", stock:5, descripcion: "Tabla de madera para asador, con logo calado"},
]


export const getProducts = () => {

    return new Promise((res)=>{
    setTimeout(() => {
        res(products)

    },2000)
    })
}
