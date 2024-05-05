import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { motion, spring } from 'framer-motion';
import Button from '../Button/Button';
import '../Hero3/hero3.css';
import AddHomeWorkOutlinedIcon from '@mui/icons-material/AddHomeWorkOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';


export const Hero3 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ContainerRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const topOffset = ContainerRef.current.offsetTop;
      const bottomOffset = topOffset + ContainerRef.current.offsetHeight;

      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition > topOffset && scrollPosition < bottomOffset) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="containerHero3">
      <motion.div className="title"
      initial={{ scaleX: 0 }} animate={isVisible && { scaleX: 1 }} 
      transition={{ duration: .3 , delay:.5, ease:"circOut"}} ref={ContainerRef}
      >
        <h2>Conoce las ventajas de Trabajar con nosotros.</h2>
      </motion.div>
      <div className="comprarVender">
        <motion.div className="item"
         initial={{ y: 500, scale:0}} animate={isVisible && {y:0, scale:1}} 
         transition={{ duration: 1, delay: .8, type:"spring"}} ref={ContainerRef}>
          <div className="icon">
            <AddHomeWorkOutlinedIcon style={{ fontSize: 50 }} />
          </div>
          <div className="data">
            <h3><b>Quiero Comprar</b></h3>
          <p>En Orlandi Inmobiliaria te ayudamos a encontrar la casa de tus sueños.</p>
          </div>
        </motion.div>
        <motion.div className="item"
         initial={{ y: 500, scale:0}} animate={isVisible && {y:0, scale:1}} 
         transition={{ duration: 1, delay: 1, type:"spring"}} ref={ContainerRef}>
          <div className="icon">
            <HandshakeOutlinedIcon style={{ fontSize: 50 }} />
          </div>
          <div className="data">
            <h3><b>Quiero Vender</b></h3>
          <p>En Orlandi Inmobiliaria te ayudamos a vender tu casa al mejor precio.</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};




