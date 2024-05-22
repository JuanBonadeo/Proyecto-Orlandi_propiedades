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
import ComprarCasas from './components/ComprarCasas/ComprarCasas'
import ComprarDeptos from './components/ComprarDeptos/ComprarDeptos'
import ComprarLocales from './components/ComprarLocales/ComprarLocales'
import ComprarTerrenos from './components/ComprarTerrenos/ComprarTerrenos'
import ComprarDestacadas from './components/ComprarDestacadas/ComprarDestacadas'
import ComprarRurales from './components/ComprarRurales/ComprarRurales'
import { Contacto } from './components/Contacto/Contacto'
import { Nosotros } from './components/Nosotros/Nosotros'

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
          
            {/* <Route path="/comprar/urbana/subcategoria/:subCategoriaId" element={<Comprar/>}/> */}

          <Route path="/comprar/rurales" element={<ComprarRurales/>}/>
          <Route path="/comprar/rurales/:page" element={<ComprarRurales/>}/>
          <Route path="/comprar/casas" element={<ComprarCasas/>}/>
          <Route path="/comprar/casas/:page" element={<ComprarCasas/>}/>
          <Route path="/comprar/departamentos" element={<ComprarDeptos/>}/>
          <Route path="/comprar/departamentos/:page" element={<ComprarDeptos/>}/>
          <Route path="/comprar/locales" element={<ComprarLocales/>}/>
          <Route path="/comprar/locales/:page" element={<ComprarLocales/>}/>
          <Route path="/comprar/terrenos/:page" element={<ComprarTerrenos/>}/>
          <Route path="/comprar/terrenos" element={<ComprarTerrenos/>}/>
          <Route path="/comprar/destacadas/:page" element={<ComprarDestacadas/>}/>
          <Route path="/comprar/destacadas" element={<ComprarDestacadas/>}/>
          
          <Route path="/admin123" element={<Admin/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>


        </Routes>  
      </div>
      <WspButton/>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
