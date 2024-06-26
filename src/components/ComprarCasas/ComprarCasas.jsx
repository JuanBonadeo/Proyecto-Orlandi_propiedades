import React from 'react'
import './Comprar.css'
import Hero4 from '../Hero4/Hero4'
import ProductsContainer from '../ProductsContainer/ProductsContainer'

const ComprarCasas = () => {

  return (
    <>
      <Hero4 title="Casas" img="https://firebasestorage.googleapis.com/v0/b/orlandi-propiedades.appspot.com/o/casas.jpg?alt=media&token=34d4f670-e4a7-444c-82d8-3bbfdff60320" />
      <div className="comprarContainer">
        <ProductsContainer categoria='casas' />

      </div>
    </>
  )
}
export default ComprarCasas
