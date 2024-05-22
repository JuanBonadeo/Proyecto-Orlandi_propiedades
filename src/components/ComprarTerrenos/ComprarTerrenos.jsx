import React from 'react'
import '../ComprarCasas/Comprar.css'
import Hero4 from '../Hero4/Hero4'
import ProductsContainer from '../ProductsContainer/ProductsContainer'

const ComprarTerrenos = () => {
  return (
    <>
      <Hero4 title="Terrenos" img="https://firebasestorage.googleapis.com/v0/b/orlandi-propiedades.appspot.com/o/terrenos.jpg?alt=media&token=b6dad678-c6df-4164-ac7a-606e292cd516" />
      <div className="comprarContainer">
        <ProductsContainer categoria='terrenos' />
      </div>
    </>
  )
}
export default ComprarTerrenos
