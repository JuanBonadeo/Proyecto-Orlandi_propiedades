import React from 'react';
import ProductCard from "../ProductCard/ProductCard";
import UpButton from "../UpButton/UpButton";
import { motion } from "framer-motion";
import './productsContainer.css';

function ProductList({ products }) {
  return (
    <>
      <div className='productsContainer'>
        <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 2, delay: 0.6, type: "spring", ease: "easeInOut", stiffness: "100", damping: "10", mass: "1.0"}}
          className="ProductList">
          {products.map(product => <ProductCard key={product.id} {...product}/>)}
        </motion.div>
      </div>
      <UpButton/>
    </>
  );
}

export default ProductList;