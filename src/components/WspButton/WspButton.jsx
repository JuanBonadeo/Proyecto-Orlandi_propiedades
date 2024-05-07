import React from 'react'
import './wspButton.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const  WspButton = () => {
  return (
    <a className='btn-whatsapp' href='https://wa.me/todo'>
        <WhatsAppIcon/>
    </a>
  )
}
export default WspButton