import React from 'react'
import '../ComprarCasas/Comprar.css'
import Hero4 from '../Hero4/Hero4'
import ProductsContainer from '../ProductsContainer/ProductsContainer'

const ComprarLocales = () => {
  return (
    <>
      <Hero4 title="Locales Comerciales" img="https://firebasestorage.googleapis.com/v0/b/orlandi-propiedades.appspot.com/o/locales.jpg?alt=media&token=4cbaaf82-3fd4-43ec-90b8-3684d073c7fd" />
      <div className="comprarContainer">
        <ProductsContainer categoria='locales' />
      </div></>
  )
}
export default ComprarLocales
