import React from 'react'
import { useAppContext } from '../context'
import { motion, AnimatePresence } from 'framer-motion'

const headerVariants = {
  hidden: { y: '-100vh' },
  visible: {
    y: '0',
    transition: { duration: 0.8, type: 'spring', bounce: 0.3 },
  },
}

const toggleVariants = {
  hidden: { y: '-100vh' },
  visible: {
    y: '0',
    transition: {
      duration: 0.8,
      type: 'spring',
      bounce: 0.3,
      delay: 0.9,
    },
  },
}

const Header = () => {
  const { darkMode, setDarkMode } = useAppContext()

  return (
    <header className='flex justify-between items-start text-[#fafafa]'>
      <motion.h1
        className='font-bold text-4xl'
        initial='hidden'
        animate='visible'
        variants={headerVariants}
      >
        TODO
      </motion.h1>
      {darkMode ? (
        <AnimatePresence>
          <button onClick={() => setDarkMode((prev) => !prev)}>
            <motion.svg
              whileHover={{ scale: 1.2 }}
              className='w-10 h-8 cursor-pointer'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
              initial='hidden'
              animate='visible'
              variants={toggleVariants}
            >
              <path
                fillRule='evenodd'
                d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                clipRule='evenodd'
              />
            </motion.svg>
          </button>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <button onClick={() => setDarkMode((prev) => !prev)}>
            <motion.svg
              whileHover={{ scale: 1.2 }}
              className='w-10 h-8 cursor-pointer'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
              initial='hidden'
              animate='visible'
              variants={toggleVariants}
            >
              <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
            </motion.svg>
          </button>
        </AnimatePresence>
      )}
    </header>
  )
}

export default Header
