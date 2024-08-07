import '../Footer/footer.css'
import Logo from '../Logo/Logo.jsx'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer>
            <div className="footerContainer">
                <div className='footer1'>
                    <Logo className='logo light' />
                   <p> Servicios inmobiliarios modernos, experiencias excepcionales.</p> 
                </div>
                <div className='footer2'>
                    <h4><b>Nuestras Redes</b></h4>
                    <div className="redes">
                        <a href='todo'><XIcon /></a>
                        <a href='https://www.instagram.com/orlandi_inmobiliaria/'><InstagramIcon /></a>
                        <a href='todo'><FacebookIcon /></a>
                    </div>


                </div>
                <div className="footer3">
                    <h4><b>Links</b></h4>
                    <div className='footerLinks'>
                        <Link to="/contacto" className="dark" label="Atencion al Cliente">Atencion al Cliente</Link>
                        <Link className="dark" label="Preguntas Frecuentes">orlandojlorlandi@gmail.com</Link>
                        <Link className="dark" label="Terminos & Condiciones">Direccion. fitz gerald 454 nogoya</Link>
                        <Link to="/quienesSomos" className="dark" label="Quienes Somos">Quienes Somos</Link>
                    </div>
                </div>

            </div>
            <h5>©Orlandi Inmobiliaria Copyright  todos los derechos reservados</h5>
            <h5>Develop by:   <a className='linkedin' href='https://www.linkedin.com/in/juan-cruz-bonadeo-55a243188/'>  Juan Bonadeo</a></h5>


        </footer>
    )
}
export default Footer