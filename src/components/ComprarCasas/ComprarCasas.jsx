import React from 'react'
import './Comprar.css'
import Hero4 from '../Hero4/Hero4'
import ProductsContainer from '../ProductsContainer/ProductsContainer'

const ComprarCasas = () => {

  return (
    <>
      <Hero4 title="Casas" img="https://firebasestorage.googleapis.com/v0/b/orlandi-propiedades.appspot.com/o/desta.png?alt=media&token=c70c1c75-8200-442c-a90c-5d0f12eb6c1a" />
      <div className="comprarContainer">
        <ProductsContainer categoria='casas' />

      </div>
    </>
  )
}
export default ComprarCasas
