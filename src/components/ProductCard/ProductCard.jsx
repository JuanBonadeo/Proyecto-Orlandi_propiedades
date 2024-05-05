import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import SelectAllOutlinedIcon from '@mui/icons-material/SelectAllOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BorderOuterIcon from '@mui/icons-material/BorderOuter';


export default function ProductCard({ nombre, img1, id, precio, stock, categoria, descripcion, ubicacion, metrosCuadrados, dormitorios, banios, ambientes, subcategoria, zona, hectareas }) {
  const precioXHa = parseInt(precio / hectareas)
  return (
    <div className='productCardContainer'>
      <Link to={`/producto/${id}`} className='img'>
        <img src={img1} alt={`${nombre}`} loading='lazy' className='imgProduct' />
      </Link>
      <div className="cardInfo">
      <div className="name"><h4><b>{nombre}</b></h4></div>
      <div className="precioUbic">
        <div className="precio"><h5>{precio} USD</h5></div>
        <div className="location">
          <p><LocationOnOutlinedIcon/><b>{zona.toUpperCase()}</b> | {ubicacion}</p>
        </div>
        
      </div>
      {categoria ==='urbanas' && (<>
      <div className="urbarnInfo">
        <p><SelectAllOutlinedIcon />{metrosCuadrados} m2</p>
        <p><DashboardOutlinedIcon />{ambientes} Ambientes</p>
        <p><BedOutlinedIcon />{dormitorios} Dormitorios</p>
        <p><BathtubOutlinedIcon />{banios} Baños</p>
      </div>
      </>)}
      {categoria ==='rurales' && (<>
      <div className="urbarnInfo">
        <p><BorderOuterIcon />{hectareas} Ha</p>
        
        <p><b>USD/Ha</b>{precioXHa} </p>
      </div>
      </>)}
      
      
      </div>
        {!stock && <span className='outOfStockBadge'>Sin Stock</span>}
    </div>
  )

}
