import '../Hero1/hero1.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from '../Button/Button';
import { motion } from 'framer-motion';


const Hero1 = () =>{
    return (
      <Carousel>
        <Carousel.Item className='Hero1Container'>
          <img
            className="imgHero1"
            src='https://firebasestorage.googleapis.com/v0/b/orlandi-propiedades.appspot.com/o/Frame.jpg?alt=media&token=e34f25e8-69b9-4a95-8ba4-1edad96945b2'
            alt="First-slide"
          />
          <Carousel.Caption className='HeroCaption'>
            <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }} 
            
            className='titu'>Orlandi Propiedades</motion.h1>
          </Carousel.Caption>
        </Carousel.Item> 

        
      </Carousel>
    );
}
export default Hero1