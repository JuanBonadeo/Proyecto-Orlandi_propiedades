import React from 'react'
import '../ComprarCasas/Comprar.css'
import Hero4 from '../Hero4/Hero4'
import ProductsContainer from '../ProductsContainer/ProductsContainer'

const ComprarDeptos = () => {
  return (
    <>
      <Hero4 title="Departamentos" img="https://firebasestorage.googleapis.com/v0/b/orlandi-propiedades.appspot.com/o/deptos.jpg?alt=media&token=f5981d0d-3c88-4a13-800f-775efd541f27" />
      <div className="comprarContainer">
        <ProductsContainer categoria='departamentos' />
      </div>
    </>
  )
}
export default ComprarDeptos
