import React from 'react'
import { useEffect, useState } from 'react'
import { collection, getDocs, where, query } from 'firebase/firestore'
import './productsContainer.css'
import { db } from '../../services/firebase/firebaseConfig'
import ProductList from './ProductList'
import { Loader } from '../Loader/Loader'
import { useParams } from 'react-router-dom'
import OrderList from '../Order/Order'
import { motion, spring } from 'framer-motion';




export default function ProductsContainer(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [products, setProducts] = useState([]);
  const [orderBy, setOrderBy] = useState([])
  const [loading, setLoading] = useState(true)
  const [categoriaId, setCategoriaId] = useState(props.categoria)
  const fetchProducts = async () => {
    setLoading(true)
    try {
      let productsRef = categoriaId
        ? query(collection(db, 'propiedades'), where('categoria', '==', categoriaId))
        : collection(db, 'propiedades');
      
      const snapShot = await getDocs(productsRef);
      const productosAdapted = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productosAdapted);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [categoriaId]);

  const handleOrderChange = (event) => {
    setOrderBy(event.target.value);
  };

  if (loading) {
    return <Loader/>;
  }
  if(products.length === 0){
    return <motion.h1 className='noProducts'
    initial={{opacity: 0, scale: 0}} animate={{opacity:1, scale:1}} transition={{ duration: 2, type:"spring", stiffness: 160, damping: 20}}
    >No hay propiedades disponibles</motion.h1>
  } 

  return (
    <>
    <motion.div className='h1Order' initial={{opacity: 0, scale: 0}} animate={{opacity:1, scale:1}} transition={{ duration: 2, type:"spring", stiffness: 160, damping: 20}}>
      <h1>Nuestras Propiedades {categoriaId}</h1>
      <OrderList handleOrderChange={handleOrderChange}/>
    </motion.div>
    <ProductList products={products} orderBy={orderBy}/>
    </>
      
  )
}
