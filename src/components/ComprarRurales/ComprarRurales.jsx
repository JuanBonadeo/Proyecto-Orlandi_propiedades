import React from 'react'
import './Comprar.css'
import Hero4 from '../Hero4/Hero4'
import ProductsContainer from '../ProductsContainer/ProductsContainer'

const ComprarRurales = () => {
  return (
    <div className="comprarContainer">
        <Hero4 title="Propiedades Rurales" img="https://firebasestorage.googleapis.com/v0/b/orlandi-propiedades.appspot.com/o/heroComprarRurales.jpg?alt=media&token=95d1a25b-b605-4d26-a788-bfd7539ae498"/>
        <ProductsContainer categoria='rurales'/>
    </div>
  )
}
export default ComprarRurales
