import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { motion, spring } from 'framer-motion';
import Button from '../Button/Button';
import '../Hero3/hero3.css';
import AddHomeWorkOutlinedIcon from '@mui/icons-material/AddHomeWorkOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import { Link } from 'react-router-dom';


export const Hero3 = () => {
  
  return (
    <div className="containerHero3">
      <motion.div className="title"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: .3, delay: .5, ease: "circOut" }}
      >
        <h2>Antes de realizar su negocio consultenos.</h2>
      </motion.div>
      <motion.div className="comprarVender"
        initial={{ y: 500, scale: 0 }} animate={{ y: 0, scale: 1 }}
        transition={{ duration: 1, delay: .8, type: "spring" }}

      >
        <div className="item">
          <Link to='/comprar/destacadas'>
            <div className="icon">
              <AddHomeWorkOutlinedIcon style={{ fontSize: 50 }} />
            </div>
          </Link>
          <div className="data">
            <h3><b>Quiero Comprar</b></h3>
            <p>En Orlandi Inmobiliaria te ayudamos a encontrar la casa de tus sueños.</p>
          </div>
        </div>
        <div className="item">
          <Link to='/vender'>
            <div className="icon">
              <HandshakeOutlinedIcon style={{ fontSize: 50 }} />
            </div>
          </Link>
          <div className="data">
            <h3><b>Quiero Vender</b></h3>
            <p>En Orlandi Inmobiliaria te ayudamos a vender tu casa al mejor precio.</p>
          </div>
        </div>

      </motion.div>
    </div>
  );
};




