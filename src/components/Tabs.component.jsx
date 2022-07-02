import React from 'react'
import { motion } from 'framer-motion'

import { useAppContext } from '../context'

const Tabs = () => {
  const { currentTab, setCurrentTab } = useAppContext()

  return (
    <motion.div
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{
        delay: 2.7,
        duration: 0.8,
        ease: 'easeIn',
        type: 'spring',
        bounce: 0.3,
      }}
      className='colors text2 h-16 w-full px-4 flex items-center justify-center rounded-md space-x-4 font-bold mt-4'
    >
      <span
        className={`cursor-pointer ${
          currentTab === 'all'
            ? 'text-[#3a7bfd]'
            : 'dark:hover:text-[#e4e5f1] hover:text-light-text1'
        }`}
        onClick={() => setCurrentTab('all')}
      >
        All
      </span>
      <span
        className={`cursor-pointer ${
          currentTab === 'active'
            ? 'text-[#3a7bfd]'
            : 'dark:hover:text-[#e4e5f1] hover:text-light-text1'
        }`}
        onClick={() => setCurrentTab('active')}
      >
        Active
      </span>
      <span
        className={`cursor-pointer ${
          currentTab === 'completed'
            ? 'text-[#3a7bfd]'
            : 'dark:hover:text-[#e4e5f1] hover:text-light-text1'
        }`}
        onClick={() => setCurrentTab('completed')}
      >
        Completed
      </span>
    </motion.div>
  )
}

export default Tabs
