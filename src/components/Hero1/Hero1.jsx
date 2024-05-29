import '../Hero1/hero1.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from '../Button/Button';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledComponent = styled.div`
  /* Estilos aquí */
  a.carousel-control-prev{
    display: none;
}a.carousel-control-next{
    display: none;
}
`;


const Hero1 = () => {
  return (
    <StyledComponent>
      <Carousel>
        <Carousel.Item className='Hero1Container'>
          <img
            className="imgHero1"
            src='https://firebasestorage.googleapis.com/v0/b/orlandi-propiedades.appspot.com/o/foto1.png?alt=media&token=555e2122-cf6a-4a38-9c81-a5a71c9985ec'
            alt="First-slide"
          />
          
          <Carousel.Caption className='HeroCaption'>
            <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }}

              className='titu'>Orlandi Propiedades</motion.h1>
          </Carousel.Caption>
        </Carousel.Item>


      </Carousel>
    </StyledComponent>
  );
}
export default Hero1