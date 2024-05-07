import React from 'react'
import { useEffect, useState, useContext } from 'react'
import './productInfo.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Button from '../Button/Button';
import Carousel from 'react-bootstrap/esm/Carousel'
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import SelectAllOutlinedIcon from '@mui/icons-material/SelectAllOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BorderOuterIcon from '@mui/icons-material/BorderOuter';
import { motion } from 'framer-motion';

export default function ProductInfo({ nombre, id, precio, stock, categoria, descripcion, ubicacion, superficie, dormitorios, banios, ambientes, subcategoria, zona, img1, img2, img3, img4, img5, img6, img7, }) {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const precioXHa = parseInt(precio / superficie)
  return (
    <>
      <div className='productInfoContainer'>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: .7, ease: "easeInOut", type: "spring", delay: .6 }}
          className="information">
          <h2>{nombre}</h2>
          <p>{descripcion}</p>



          <div className="priceAddto">
            <h5>Precio: {precio}</h5>
          </div>
          <h5>Ubicacion: {ubicacion}</h5>


          <div className="infoPayment">
            <h5>Informacion:</h5>
            {categoria === 'urbanas' && (
              <div className="paymentMethods">
                <div className="paymentItem"><BorderOuterIcon /><span>{superficie}m^2</span></div>
                <div className="paymentItem"><DashboardOutlinedIcon /><span>{ambientes} Ambientes</span></div>
                <div className="paymentItem"><BathtubOutlinedIcon /><span>{banios} Banios</span></div>
                <div className="paymentItem"><BedOutlinedIcon /><span>{dormitorios} Dormitorios</span></div>
                <div className="paymentItem"><span></span></div>
              </div>
            )}
            {categoria === 'rurales' && (
              <div className="paymentMethods">
                <div className="paymentItem"><BorderOuterIcon /><span>{superficie}Ha</span></div>
                <div className="paymentItem"><h6>Usd x Ha</h6><span>{precioXHa} Usd</span></div>
                <div className="paymentItem"><span></span></div>
              </div>
            )}

          </div>

        </motion.div>
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: .1, ease: "easeInOut", delay: 0.6, type: "tween" }}>
          <Carousel activeIndex={index} onSelect={handleSelect} className='carouselContainer'>
            {img1 && (
              <Carousel.Item interval={10000}>
                <img className="infoImg" src={img1} alt="Product" />
              </Carousel.Item>
            )}
            {img2 && (
              <Carousel.Item interval={10000}>
                <img className="infoImg" src={img2} alt="Product" />
              </Carousel.Item>
            )}
            {img3 && (
              <Carousel.Item interval={10000}>
                <img className="infoImg" src={img3} alt="Product" />
              </Carousel.Item>
            )}
          </Carousel>
        </motion.div>
      </div>

    </>

  )
}
