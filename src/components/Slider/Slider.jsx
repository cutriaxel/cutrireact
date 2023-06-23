import React from 'react'
import images from '../../helpers/image';
import './slider.scss';
import { motion } from 'framer-motion';

const Slider = () => {
  return (
    <motion.div className='slider-container'>
        <motion.div className='slider' drag='x' 
        dragConstraints={{right: 0, left:-1100}} >
        {images.map(image => (
            <motion.div className='item' >
                <img src={image} alt="" />
            </motion.div>
        ))}
        </motion.div>
        
    </motion.div>
  )
}

export default Slider