import React from 'react'
import './Comprar.css'
import Hero4 from '../Hero4/Hero4'
import ProductsContainer from '../ProductsContainer/ProductsContainer'

const Comprar = () => {
  
  return (
    <div className="comprarContainer">
        <Hero4 title="Propiedades Urbanas" img="https://firebasestorage.googleapis.com/v0/b/orlandi-propiedades.appspot.com/o/heroComprarUrbano.jpg?alt=media&token=8c642439-cde1-4ad8-8316-21db9067e806"/>
        <ProductsContainer categoria='urbanas'/>
    
    </div>
  )
}
export default Comprar
