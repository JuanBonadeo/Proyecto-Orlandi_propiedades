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
            src='https://firebasestorage.googleapis.com/v0/b/orlandi-propiedades.appspot.com/o/Frame.jpg?alt=media&token=606e8df1-d48e-4187-8cbc-0d162249f892'
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