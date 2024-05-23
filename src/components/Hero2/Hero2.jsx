import React from 'react';
import { motion, spring } from 'framer-motion';
import Button from '../Button/Button';
import '../Hero2/hero2.css';

export const Hero2 = () => {

  return (
    <motion.div
      className="CombosContainer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 4, delay: 1, type: "spring", stiffness: 160, damping: 20 }}
    >
      <img
        src='https://firebasestorage.googleapis.com/v0/b/orlandi-propiedades.appspot.com/o/OIP.jpg?alt=media&token=e3106cb8-32b2-4e63-b8c4-e58712ef75e9'
        alt='inmobiliaria'
        className='combosImg'
      />
      <div className="info">
        <div className="infoItem">
          <h2>Nuestra Misión</h2>
          <p>
            La misión de todos en Orlandi Inmobiliaria es contribuir al bienestar de sus clientes brindándoles seguridad en sus operaciones inmobiliarias.
            <br></br><br></br>Los bienes inmuebles son la mejor inversión en épocas de bonanza y a su vez el mejor resguardo para los tiempos difíciles.
          </p>
        </div>

        <div className="infoItem1">
          <h2>Visión del Futuro</h2>
          <p>
            
            Creemos que el mercado inmobiliario de la Argentina está creciendo y tiene un gran futuro.
            <br></br><br></br>
            Vamos hacia allí.
            <br></br><br></br>
            Lo invitamos a crecer con nosotros.

          </p>
          <div className="button"><Button label='Contacto' to='/contacto' /></div>
          
        </div>
      </div>
    </motion.div>
  );
};




