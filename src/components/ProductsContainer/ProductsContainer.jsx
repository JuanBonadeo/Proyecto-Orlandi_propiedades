import React, { useEffect, useState } from 'react';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { db } from '../../services/firebase/firebaseConfig';
import ProductList from './ProductList';
import { Loader } from '../Loader/Loader';
import OrderList from '../Order/Order';
import { SideBar } from '../SideBar/SideBar';
import Button from '../Button/Button';

export default function ProductsContainer(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [products, setProducts] = useState([]);
  const [orderBy, setOrderBy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoriaId, setCategoriaId] = useState(props.categoria);
  const [destacadas, setDestacadas] = useState(props.destacadas);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 0,
    minSup: 0,
    maxSup: 0,
    ambientes: [],
    tipo: []
  });

  const fetchProducts = async () => {
    setLoading(true);

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
    filterProducts();
    fetchProducts();
  }, [categoriaId]);

  const handleOrderChange = (event) => {
    setOrderBy(event.target.value);
  };

  const filterProducts = () => {
    let filteredProducts = [...products];
    const { minPrice, maxPrice, minSup, maxSup, ambientes, tipo } = filters;

    if (orderBy === "precioAsc") {
      filteredProducts.sort((a, b) => a.precio - b.precio);
    } else if (orderBy === "precioDesc") {
      filteredProducts.sort((a, b) => b.precio - a.precio);
    } else if (orderBy === "nuevas") {
      filteredProducts.sort((a, b) => b.id - a.id);
    } 

    if (minPrice != 0) {
      filteredProducts = filteredProducts.filter(product => product.precio >= minPrice);
    }
    if (maxPrice != 0) {
      filteredProducts = filteredProducts.filter(product => product.precio <= maxPrice);
    }
    if (minSup != 0) {
      filteredProducts = filteredProducts.filter(product => product.superficie >= minSup);
    }
    if (maxSup != 0) {
      filteredProducts = filteredProducts.filter(product => product.superficie <= maxSup);
    }
    if (ambientes.length > 0) {
      filteredProducts = filteredProducts.filter(product => ambientes.includes(product.ambientes));
    }
    if (tipo.length > 0) {
      filteredProducts = filteredProducts.filter(product => tipo.includes(product.subcategoria));
    }
    if (destacadas) {
      filteredProducts = filteredProducts.filter(product => product.destacados === true);
    }

    return filteredProducts;
  };

  const filteredProducts = filterProducts();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (loading) {
    return <Loader />;
  }

  if (products.length === 0) {
    return (
      <div className="gridCont">
        <div className="side"><SideBar /></div>
        <motion.h1
          className='noProducts'
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, type: "spring", stiffness: 160, damping: 20 }}
        >
          No hay propiedades disponibles
        </motion.h1>
      </div>
    );
  }

  return (
    <>
      <div className="gridCont margintop">
        <div className="side">
          <SideBar filters={filters} setFilters={setFilters} categoria={categoriaId} show={show} setShow={setShow} />
        </div>
        <div className="faaa">
          <motion.div
            className='h1Order'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, type: "spring", stiffness: 160, damping: 20 }}
          >
            <h1></h1>
            <OrderList handleOrderChange={handleOrderChange} />
            <Button label="Filtros" action={() => setShow(true)} />
          </motion.div>
          <div className="comprarContainer">
            <ProductList products={filteredProducts} />
          </div>
        </div>
      </div>
    </>
  );
}
