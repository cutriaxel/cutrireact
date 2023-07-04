import React from 'react'
import images from '../../helpers/image2';
import './VendidoSlider.scss';
import { motion } from 'framer-motion';

const VendidoSlider = () => {
  return (
    <motion.div className='slider-container'>
        <motion.div className='slider' drag='x' 
        dragConstraints={{right: 0, left:-1100}} >
        {images.map(image => (
            <motion.div className='item' key={image.id} >
              <a>
                <img src={image} alt="" />
                </a>
            </motion.div>
        ))}
        </motion.div>
        
    </motion.div>
  )
}

export default VendidoSlider