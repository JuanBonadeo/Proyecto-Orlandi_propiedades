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
import { Modal } from 'react-bootstrap';
import formatearMoneda from '../../services/formatearMoneda';

export default function ProductInfo({ nombre, id, precio, stock, categoria, descripcion, ubicacion, superficie, dormitorios, banios, ambientes, subcategoria, zona, img1, img2, img3, img4, img5, img6, img7, }) {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const precioXHa = parseInt(precio / superficie) 

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.nombre.value);
  };
  const consultar = () => {
    const name = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('mensaje').value;

    let mensaje = `Hola soy ${name}, este es mi mail, ${email}:\n\n`;
    mensaje += `Estoy interesado en la propiedad ${nombre} \n\n`;
    if (message) {
      mensaje += `Mensaje: ${message}\n\n`;
    }

    const numeroWhatsApp = '543435615045';

    function esDispositivoMovil() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    let urlWhatsApp = '';

    if (esDispositivoMovil()) {
      urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;
    } else {
      urlWhatsApp = `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;
    }

    window.open(urlWhatsApp, '_blank');
  }

  return (
    <>
    <div className="navbarbg"></div>
      <div className='productInfoContainer'>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: .7, ease: "easeInOut", type: "spring", delay: .6 }}
          className="information">
          <h2>{nombre}</h2>
          <p>{descripcion}</p>
          <Button label="Contactar" action={() => setShow(true)} />



          <div className="priceAddto">
            
            { categoria  === 'campos' && <><h5>{formatearMoneda(precioXHa)} USD/Ha</h5><span className="tooltiptext">Dolar Estadounidense</span></>}
            { categoria  != 'campos' && <><h5>{formatearMoneda(precio)} USD</h5><span className="tooltiptext">Dolar Estadounidense</span></>}
          </div>
          <h5>Ubicacion: {ubicacion}</h5>


          <div className="infoPayment">
            <h5>Informacion:</h5>
            {(categoria === 'casas' || categoria === 'departamentos' || categoria === 'locales') && (
              <div className="paymentMethods">
                <div className="paymentItem"><BorderOuterIcon /><span>{superficie}m^2</span></div>
                <div className="paymentItem"><DashboardOutlinedIcon /><span>{ambientes} Ambientes</span></div>
                <div className="paymentItem"><BathtubOutlinedIcon /><span>{banios} Banios</span></div>
                <div className="paymentItem"><BedOutlinedIcon /><span>{dormitorios} Dormitorios</span></div>
                <div className="paymentItem"><span></span></div>
              </div>
            )}
            {categoria === 'campos' && (
              <div className="paymentMethods">
                <div className="paymentItem"><BorderOuterIcon /><span>{superficie}Ha</span></div>
                <div className="paymentItem"><DashboardOutlinedIcon /><span>{ambientes} Ambientes</span></div>
                <div className="paymentItem"><BathtubOutlinedIcon /><span>{banios} Banios</span></div>
                <div className="paymentItem"><BedOutlinedIcon /><span>{dormitorios} Dormitorios</span></div>
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
            {img4 && (
              <Carousel.Item interval={10000}>
                <img className="infoImg" src={img4} alt="Product" />
              </Carousel.Item>
            )}
            {img5 && (
              <Carousel.Item interval={10000}>
                <img className="infoImg" src={img5} alt="Product" />
              </Carousel.Item>
            )}
            {img6 && (
              <Carousel.Item interval={10000}>
                <img className="infoImg" src={img6} alt="Product" />
              </Carousel.Item>
            )}
            {img7 && (
              <Carousel.Item interval={10000}>
                <img className="infoImg" src={img7} alt="Product" />
              </Carousel.Item>
            )}
          </Carousel>
        </motion.div>
      </div>







      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg" centered className="modal-dark">
        <Modal.Header closeButton>
          <Modal.Title>Contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="modalBody">
              <input type="text" placeholder="Nombre" name="nombre" id='nombre' />
              <input type='mail' placeholder='Email' name='email' id='email'/>
              <textarea placeholder='Mensaje' name='mensaje' id='mensaje'/>
            </div>
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button label="Contactar" type='sumbit' action={consultar} />
        </Modal.Footer>
      </Modal>
    </>

  )
}
