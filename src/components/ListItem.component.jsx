import React from 'react'
import { useAppContext } from '../context'
import { motion } from 'framer-motion'

import { ReactComponent } from '../images/icon-check.svg'

const Item = ({ item }) => {
  const { openModal, removeItem, editStatus } = useAppContext()

  return (
    <>
      <div className='colors text1 select-none h-16 w-full flex items-center'>
        <div
          className={`check cursor-pointer mx-4 flex-shrink-0 ${
            item.isCompleted && 'bgGradient'
          } text-light-bg1 flex justify-center items-center`}
          onClick={() => editStatus(item.id)}
        >
          {item.isCompleted && <ReactComponent />}
        </div>
        <div
          className={`flex-grow leading-tight block truncate text-sm md:text-base cursor-grab ${
            item.isCompleted &&
            'line-through text-light-text2 dark:text-dark-text2'
          }`}
        >
          {item.todo}
        </div>
        <button
          className='text-light-text2 dark:text-dark-text3 w-5 h-5 mr-2 ml-4 flex-shrink-0 cursor-pointer hoverr'
          onClick={() => {
            openModal(item.id)
          }}
        >
          <motion.svg
            whileHover={{ scale: 1.2 }}
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
            />
          </motion.svg>
        </button>
        <button
          className='text-light-text2 dark:text-dark-text3 w-5 h-5 ml-2 mr-4 flex-shrink-0 cursor-pointer hoverr'
          onClick={() => {
            removeItem(item.id)
          }}
        >
          <motion.svg
            whileHover={{ scale: 1.2 }}
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
            />
          </motion.svg>
        </button>
      </div>
    </>
  )
}

export default Item
