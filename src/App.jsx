import './App.css'
import {HashRouter as BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/NavBar/NavBar'
import HomeView from './components/HomeView/HomeView'
import WspButton from './components/WspButton/WspButton'
import Footer from './components/Footer/Footer'
import ProductInfoView from './components/ProductInfo/ProudctInfoView'
import ProductsContainer from './components/ProductsContainer/ProductsContainer'
import Admin from './components/Admin/Admin'
import Vender from './components/Vender/Vender'
import Comprar from './components/Comprar/Comprar'
import ComprarRurales from './components/ComprarRurales/ComprarRurales'
import { Contacto } from './components/Contacto/Contacto'

function App() {

  return (
    <div className='App'>
    <BrowserRouter>
      <Header/> 
      <div className="contain">
        <Routes>
          <Route path="/" element={<HomeView/>}/>
            <Route path="/producto/:productId" element={<ProductInfoView/>}/>
          <Route path="/vender" element={<Vender/>}/>
          <Route path="/comprar/urbana" element={<Comprar/>}/>
            <Route path="/comprar/urbana/subcategoria/:subCategoriaId" element={<Comprar/>}/>

          <Route path="/comprar/rurales" element={<ComprarRurales/>}/>
          <Route path="/comprar" element={<ProductsContainer/>}/>
          <Route path="/admin123" element={<Admin/>}/>
          <Route path="/contacto" element={<Contacto/>}/>


        </Routes>  
      </div>
      <WspButton/>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
