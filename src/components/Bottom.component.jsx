import React from 'react'
import { motion } from 'framer-motion'

import { useAppContext } from '../context'

const Bottom = () => {
  const { items, clearCompleted } = useAppContext()
  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{
        delay: 1.8,
        duration: 0.8,
        ease: 'easeIn',
        type: 'spring',
        bounce: 0.3,
      }}
      className='colors text2 select-none h-16 w-full px-4 flex items-center justify-between rounded-b-md border-t border-light-text3 dark:border-dark-texts'
    >
      <p>
        <span>{items.length} </span>items left
      </p>
      <button
        className='cursor-pointer hover:text-light-text1 dark:hover:text-dark-text1'
        onClick={() => clearCompleted()}
      >
        Clear Completed
      </button>
    </motion.div>
  )
}

export default Bottom
