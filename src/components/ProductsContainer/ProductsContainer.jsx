import React, { useEffect, useState } from 'react';
import { collection, getDocs, where, query, startAfter, limit } from 'firebase/firestore';
import { useSearchParams } from 'react-router-dom';
import './productsContainer.css';
import { db } from '../../services/firebase/firebaseConfig';
import ProductList from './ProductList';
import { Loader } from '../Loader/Loader';
import OrderList from '../Order/Order';
import { motion } from 'framer-motion';
import { SideBar } from '../SideBar/SideBar';
import Button from '../Button/Button';
import Pagination from '../Pagination/Pagination'

export default function ProductsContainer(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [products, setProducts] = useState([]);
  const [orderBy, setOrderBy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoriaId, setCategoriaId] = useState(props.categoria);
  const [destacadas, setDestacadas] = useState(props.destacadas);
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);
  const [lastDoc, setLastDoc] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(false);
  const pageSize = 10;
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 0,
    minSup: 0,
    maxSup: 0,
    ambientes: [],
    tipo: []
  });
  

  const fetchProducts = async (pageNumber = 1) => {
    setLoading(true);

    try {
      let productsRef = categoriaId
        ? query(collection(db, 'propiedades'), where('categoria', '==', categoriaId))
        : collection(db, 'propiedades');

      let queryRef = productsRef;
      if (pageNumber > 1 && lastDoc) {
        queryRef = query(productsRef, startAfter(lastDoc), limit(pageSize));
      } else {
        queryRef = query(productsRef, limit(pageSize));
      }
    

      const snapShot = await getDocs(queryRef);
      const productosAdapted = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      

      setLastDoc(snapShot.docs[snapShot.docs.length - 1]);
      setHasNextPage(snapShot.docs.length === pageSize);
      setProducts(productosAdapted);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLastDoc(null);
    setProducts([]);
    fetchProducts(page);
  }, [categoriaId, page]);

  const handleOrderChange = (event) => {
    setOrderBy(event.target.value);
  };

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
            <ProductList products={products} orderBy={orderBy} filters={filters} categoria={categoriaId} destacadas={destacadas} />
          </div>
          <Pagination hasNextPage={hasNextPage} hasPrevPage={page > 1} />
        </div>
      </div>
    </>
  );
}
