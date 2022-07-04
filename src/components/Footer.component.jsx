import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3.6, ease: 'easeIn', duration: 0.5 }}
      className='text2 dark:text-dark-text3 w-full mt-8 flex flex-col justify-center items-center'
    >
      <span>Drag and drop to reorder list</span>
      <span>Click to open item</span>
    </motion.div>
  )
}

export default Footer
