import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion"
import './Vender.css'
import Hero4 from '../Hero4/Hero4'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import TranscribeOutlinedIcon from '@mui/icons-material/TranscribeOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Button from '../Button/Button';


const Vender = () => {
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
    <div className="venderContainer">
      <Hero4 title="Vender" img="https://firebasestorage.googleapis.com/v0/b/orlandi-propiedades.appspot.com/o/heroVender.png?alt=media&token=7454a7f3-4eb2-4b9e-9116-1b09998bbfd7" />
      <div className="section1">
        <motion.h4 animate={{ y: [1000, -50, 20, 0] }} transition={{ duration: 1, delay: 0.5 }}
        >¿Por qué elegirnos?</motion.h4>
        <motion.h2 animate={{ y: [-1000, 50, -20, 0] }} transition={{ duration: 1, delay: 1 }}
        >Vender tu propiedad nunca fue tan <span>facil</span></motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.3 }}
        >En Orlandi Propiedades contamos con un equipo de profesionales altamente capacitados para asesorarte en la venta de tu propiedad.
          Nuestro objetivo es brindarte un servicio de calidad, eficiente y transparente. <b>Realizamos tasaciones y consignaciones.</b> 
</motion.p>
      </div>
      <div className="section2">
        <motion.div className="itemSetcion2"
          initial={{ y: 500, scale: 0 }} animate={isVisible && { y: 0, scale: 1 }} 
          transition={{ duration: 1, delay: 0, type: "spring" }} ref={ContainerRef}

        >
          <TranscribeOutlinedIcon />
          <h3>Te escuchamos</h3>
          <p>El primer contacto es fundamental para conocer tu deseo y planificar cuál es la mejor manera de trabajar.</p>
        </motion.div>

        <motion.div className="itemSetcion2"
          initial={{ y: 500, scale:0}} animate={isVisible && {y:0, scale:1}} 
          transition={{ duration: 1, delay: .2, type:"spring"}} ref={ContainerRef}
        >
          <WorkOutlineIcon />
          <h3>Relevamiento</h3>
          <p>En esta instancia visitamos la propiedad y evaluamos la situación legal de la misma.</p>
        </motion.div>

        <motion.div className="itemSetcion2"
          initial={{ y: 500, scale: 0 }} animate={isVisible && { y: 0, scale: 1 }} 
          transition={{ duration: 1, delay: .3, type: "spring" }} ref={ContainerRef}
        >
          <StackedBarChartIcon />
          <h3>Marketing</h3>
          <p>Realizamos un plan de marketing personalizado para tu propiedad.</p>
        </motion.div>
      </div>


      <div className="documentacionContainer">
        <motion.h2
        initial={{y:1000, scale:0}} animate={{y:0, scale:1}}
        transition={{duration: 1, delay: 1, type:"spring"}} 
        >Documentacion Necesaria: </motion.h2>
        <motion.div className="items"
        initial={{y:1000, scale:0}} animate={{y:0, scale:1}}
        transition={{duration: 1, delay: 1.3, type:"spring"}}
        >
          <div className="item"><TaskAltIcon /><h5>Fotocopia del DNI del/los titular/es.</h5></div>
          <div className="item"><TaskAltIcon /><h5>Fotocopia de escritura o boleto según corresponda.</h5></div>
          <div className="item"><TaskAltIcon /><h5>Fotocopia del impuesto inmobiliario.</h5></div>
          <div className="item"><TaskAltIcon /><h5>Fotocopia de la tasa municipal.</h5></div>
          <div className="item"><TaskAltIcon /><h5>Fotocopia de expensas (si las hubiere).</h5></div>
          <div className="item"><TaskAltIcon /><h5>Fotocopia del plano de la propiedad.</h5></div>
          <div className="item"><TaskAltIcon /><h5>Su firma en la autorización de comercialización por 120 días.</h5></div>
        </motion.div>
      </div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}}
      transition={{duration: 1, delay: 1.5}} 
      className="formContainer">
        <div className="form1">
          <h2>¿Queres vender tu propiedad?</h2>
          <p>Dejanos tus datos y nos pondremos en contacto a la brevedad.</p>
          <h4>Datos Personales</h4>
          <form>
            <input type="text" placeholder="Nombre y Apellido" />
            <input type="text" placeholder="Telefono" />
            <input type="text" placeholder="Email" />
          </form>
        </div>
        <div className="form2">
          <h4>Datos del Inmueble</h4>
          <form>
            <input type="text" placeholder="Direccion" />
            <input type="text" placeholder="Localidad" />
            <input type="text" placeholder="Tipo de propiedad" />
            <input type="text" placeholder="Cantidad de ambientes" />
            <input type="text" placeholder="Metros cuadrados" />
            <Button label="Solicitar Tasacion" />
          </form>
        </div>

      </motion.div>
    </div>
  )
}
export default Vender