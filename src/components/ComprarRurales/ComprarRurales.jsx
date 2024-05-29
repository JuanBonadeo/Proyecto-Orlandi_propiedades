import React from 'react'
import '../ComprarCasas/Comprar.css'
import Hero4 from '../Hero4/Hero4'
import ProductsContainer from '../ProductsContainer/ProductsContainer'

const ComprarRurales = () => {
  return (
    <>
      <Hero4 title="Propiedades Rurales" img="https://firebasestorage.googleapis.com/v0/b/orlandi-propiedades.appspot.com/o/heroComprarRurales.jpg?alt=media&token=7459e447-ed2d-4f41-b457-442cd6c21807" />
      <div className="comprarContainer">
        <ProductsContainer categoria='campos' />
      </div>
    </>
  )
}
export default ComprarRurales
