import React from 'react';
import './order.css'

const OrderList = ({ handleOrderChange }) => {
    return (
        <select onChange={handleOrderChange} id="orderBy" name='orderBy' className="select" >
                <option value="nuevas" aria-label="Close">Nuevas Propiedades</option>
                <option value="antiguas" aria-label="Close">Propiedades mas Antiguas</option>
              <option value="precioAsc" aria-label="Close">Menor Precio</option>
              <option value="precioDesc" aria-label="Close">Mayor Precio</option>
        </select>
    );
}
export default OrderList