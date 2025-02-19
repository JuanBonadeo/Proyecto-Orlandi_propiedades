import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import SelectAllOutlinedIcon from '@mui/icons-material/SelectAllOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BorderOuterIcon from '@mui/icons-material/BorderOuter';
import formatearMoneda from '../../services/formatearMoneda';


export default function ProductCard({ nombre, img1, id, precio, stock, categoria, descripcion, ubicacion, superficie, dormitorios, banios, ambientes, subcategoria, zona }) {
  const precioXHa = parseInt(precio / superficie) 
  
  const formatName = (name) => {
    if (!name) return '';
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  const formattedName = formatName(nombre);
  return (
    <div className='productCardContainer'>
      <Link to={`/producto/${id}`} className='img'>
        <img src={img1} alt={`${nombre}`} loading='lazy' className={`${!stock ? 'outOfStock' : ''} imgProduct`} />
      </Link>
      <div className="cardInfo">
        <div className="name"><h4><b>{formattedName}</b></h4></div>
        <div className="precioUbic">
          { categoria  === 'campos' && <div className="precio"><h5>{formatearMoneda(precioXHa)} USD/Ha</h5></div>}
          { categoria  != 'campos' && <div className="precio"><h5>{formatearMoneda(precio)} USD</h5></div>}
          <div className="location">
            <p><LocationOnOutlinedIcon /><b>{zona.toUpperCase()}</b> | {ubicacion}</p>
          </div>

        </div>
        {(categoria === 'departamentos' || categoria === "casas" || categoria === "locales") && (<>
          <div className="urbarnInfo">
            <p><SelectAllOutlinedIcon />{superficie} m2</p>
            <p><DashboardOutlinedIcon />{ambientes} Ambientes</p>
            <p><BedOutlinedIcon />{dormitorios} Dormitorios</p>
            <p><BathtubOutlinedIcon />{banios} Baños</p>
          </div>
        </>)}
        {categoria === 'campos' && (<>
          <div className="urbarnInfo">
            <p><BorderOuterIcon />{superficie} Ha</p>
            <p><DashboardOutlinedIcon />{ambientes} Ambientes</p>
            <p><BedOutlinedIcon />{dormitorios} Dormitorios</p>
            <p><BathtubOutlinedIcon />{banios} Baños</p>
          </div>
        </>)}
        
        {categoria === 'terrenos' && (<>
          <div className="urbarnInfo">
            <p><BorderOuterIcon />{superficie} m2</p>
            <p></p>
            <p></p>
          </div>
        </>)}


      </div>
      {!stock && <span className='outOfStockBadge'>Vendido</span>}
    </div>
  )

}
