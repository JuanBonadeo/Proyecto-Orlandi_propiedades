import '../Hero4/hero4.css'
import { motion } from 'framer-motion';


const Hero4 = (props) => {
  

  return (
    <div className="Hero4Container">
      <img
        className="imgHero"
        src={props.img}
        alt="hero img"
      />
      <motion.h1
      initial={{x:-1000, scale: 0}} 
      animate={{x:0, scale:1}} 
      transition={{ duration: .5, delay: .7, type:"spring"}}
      
      >{props.title}</motion.h1>

    </div>

  )
}
export default Hero4