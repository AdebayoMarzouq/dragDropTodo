import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppContext } from '../context'

import { ReactComponent } from '../images/icon-check.svg'

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const modal = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '200px',
    opacity: 1,
    transition: { delay: 0.5 },
  },
}

const svgVariant = {
  a: { opacity: 0, pathLength: 0 },
  b: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 1.2, ease: 'linear' },
  },
}

const Modal = () => {
  const { showModal, closeModal, editItem, current, editStatus } =
    useAppContext()
  const [editOn, setEditOn] = useState(false)
  const [input, setInput] = useState(current.todo)
  const [status, setStatus] = useState(current.isCompleted)

  const handleClick = () => {
    setEditOn((x) => !x)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEditOn((x) => !x)
    editItem(input, current.id)
  }

  useEffect(() => {
    setInput(current.todo)
  }, [current])

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className='fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-10'
          variants={backdrop}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <motion.div
            className='colors text1 relative max-w-sm md:max-w-lg mx-auto py-8 px-2 rounded-md'
            variants={modal}
          >
            {editOn ? (
              <>
                <form onSubmit={handleSubmit} className='relative w-full h-16'>
                  <input
                    type='text'
                    className='colors text1 w-full h-full px-4'
                    placeholder='Edit todo item...'
                    value={input}
                    onChange={(e) => {
                      setInput(e.target.value)
                    }}
                  />
                  <button type='button' onClick={handleSubmit}>
                    <svg
                      className='absolute top-4 right-4 w-6 h-6 text-light-text2 dark:text-dark-text2 hoverr transform rotate-90'
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
                </form>
                <button
                  className='absolute text2 dark:text-dark-text3 hoverr top-2 left-2'
                  onClick={handleClick}
                >
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </>
            ) : (
              <>
                <div className='mt-2 w-full grid grid-cols-12 gap-4'>
                  <div
                    className={`check cursor-pointer text-light-bg1 flex justify-center items-center ${
                      status && 'bgGradient'
                    }`}
                    onClick={() => {
                      editStatus(current.id)
                      setStatus((prev) => !prev)
                    }}
                  >
                    {status && <ReactComponent />}
                  </div>
                  <div className='col-span-11'>{input || current.todo}</div>
                </div>
                <button
                  className='absolute text2 dark:text-dark-text2 hoverr top-2 left-2'
                  onClick={handleClick}
                >
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
                    />
                  </svg>
                </button>
                <button
                  className='absolute text2 dark:text-dark-text3 hoverr top-2 right-2'
                  onClick={() => closeModal()}
                >
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
