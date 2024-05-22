import ProductCard from "../ProductCard/ProductCard";
import UpButton from "../UpButton/UpButton";
import './productsContainer.css'
import { motion } from "framer-motion";
import React from 'react'


 function ProductList({ products, orderBy, filters, destacadas}) {
let filteredProducts = [...products];   
let { minPrice, maxPrice, minSup, maxSup, ambientes, tipo} = filters;
if (orderBy === "precioAsc") {
    filteredProducts.sort((a, b) => (a.precio > b.precio) ? 1 : -1);
} else if (orderBy === "precioDesc") {
    filteredProducts.sort((a, b) => (a.precio < b.precio) ? 1 : -1);
}  else if (orderBy === "nuevas") {
    filteredProducts.sort((a, b) => (a.id < b.id) ? 1 : -1);
}
else if (orderBy === "antiguas") {
    filteredProducts.sort((a, b) => (a.id > b.id) ? 1 : -1);
}
if(minPrice != 0){
    filteredProducts = filteredProducts.filter(product => product.precio >= minPrice)
}
if(maxPrice != 0){
    filteredProducts = filteredProducts.filter(product => product.precio <= maxPrice)
}
if(minSup != 0){
    filteredProducts = filteredProducts.filter(product => product.superficie >= minSup)
}
if(maxSup != 0){
    filteredProducts = filteredProducts.filter(product => product.superficie <= maxSup)
}
if(ambientes.length > 0){
    filteredProducts = filteredProducts.filter(product => ambientes.includes(product.ambientes))
} 
if(tipo.length > 0){
    filteredProducts = filteredProducts.filter(product => tipo.includes(product.subcategoria))
}
if(destacadas){
    filteredProducts = filteredProducts.filter(product => product.destacados === true)
}
  return (
    <>
    <div className='productsContainer'>
        

        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2, delay: 0.6, type: "spring", ease: "easeInOut", stiffness: "100", damping: "10", mass: "1.0"}}
        className="ProductList">
          {filteredProducts.map(product => <ProductCard key={product.id} {...product}/>)}
        </motion.div>
    </div> 
    <UpButton/>
</>
  )
}

export default ProductList
