import React from 'react'
import './nosotros.css'
import Hero4 from '../Hero4/Hero4'
import { Hero2 } from '../Hero2/Hero2'
import { motion } from 'framer-motion'

export const Nosotros = () => {
  return (
    <>
      <Hero4 title="Orlandi Inmobliaria" img="https://firebasestorage.googleapis.com/v0/b/orlandi-propiedades.appspot.com/o/nosotros%20(1).png?alt=media&token=b2333d06-827f-4fc7-b9b9-29cac5a4de6e" />
      <div className="nosotrosContainer">
        <motion.h1 initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="nosotrosTitle"
        
        >Somos más que una inmobiliaria</motion.h1>
        <motion.p initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="nosotrosText"
        
        
        >Ofrecemos servicios inmobiliarios especializados en la compra y venta, así como en la tasación de propiedades urbanas y rurales, utilizando métodos modernos para que nuestros clientes alcancen sus metas rápidamente y sin estrés. Nuestro objetivo es generar una experiencia que quieran repetir y recomendar. Normalmente, nuestro proceso inicia con la valoración del inmueble, elaborando informes de alta calidad repletos de información valiosa, permitiendo a cada cliente tener una visión clara del mercado y comprender detalladamente los factores que influyen en el valor de su propiedad. </motion.p>
      </div>
      <Hero2/>
      




    </>
  )
}
