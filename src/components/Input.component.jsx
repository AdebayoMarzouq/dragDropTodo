import React, { useState } from 'react'
import { useAppContext } from '../context'
import { motion, AnimatePresence } from 'framer-motion'

const svgVariant = {
  a: { opacity: 0, pathLength: 0 },
  b: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 1.2, ease: 'linear' },
  },
}

const Input = () => {
  const { addItem } = useAppContext()
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(input)
    setInput('')
  }

  return (
    <motion.form
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{
        duration: 0.7,
        ease: 'easeIn',
        type: 'spring',
        bounce: 0.3,
      }}
      className='relative w-full h-16'
      onSubmit={(e) => {
        e.preventDefault()
        addItem(input)
        setInput('')
      }}
    >
      <div className='absolute top-[20px] left-4 check'></div>
      <input
        type='text'
        className='colors text1 w-full h-full px-14'
        placeholder='Create a todo item...'
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      {input && (
        <button type='button' onClick={handleSubmit}>
          <svg
            className='absolute top-[20px] right-4 w-6 h-6 text-light-text2 dark:text-dark-text3 hover:text-light-text1 dark:hover:text-dark-text1 transform rotate-90'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <AnimatePresence>
              <motion.path
                variants={svgVariant}
                initial='a'
                animate='b'
                exit='a'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
              />
            </AnimatePresence>
          </svg>
        </button>
      )}
    </motion.form>
  )
}

export default Input
