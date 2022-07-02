import { useAppContext } from '../context'
import { motion, Reorder, AnimatePresence } from 'framer-motion'

import Item from './ListItem.component'

const itemsVariants = {
  hidden: { opacity: 0 },
  visible: (custom) => ({ opacity: 1, transition: { delay: custom } }),
}

const List = () => {
  const { items, filteredItems, setItems } = useAppContext()

  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{
        delay: 0.9,
        duration: 0.8,
        ease: 'easeIn',
        type: 'spring',
        bounce: 0.3,
      }}
    >
      {filteredItems().length ? (
        <Reorder.Group
          axis='y'
          values={items}
          onReorder={setItems}
          className='colors grid grid-cols-1 divide-y divide-light-text3 dark:divide-dark-texts rounded-t-md mt-4 overflow-hidden'
        >
          <AnimatePresence>
            {filteredItems().map((item, index) => (
              <Reorder.Item
                key={item.id}
                value={item}
                initial='hidden'
                animate='visible'
                variants={itemsVariants}
                exit='hidden'
                custom={(index + 1) * 0.1}
                layoutId={item.id}
              >
                <Item item={item} />
              </Reorder.Item>
            ))}
          </AnimatePresence>
        </Reorder.Group>
      ) : (
        <div className='colors text2 dark:text-dark-text3 min-h-[50vh] w-full rounded-t-md mt-4 divide-light-text3 dark:divide-dark-texts justify-center flex flex-col items-center'>
          <p className='text-base capitalize'>No list item added yet</p>
          <p className='text-base capitalize'>Add some to view them here</p>
        </div>
      )}
    </motion.div>
  )
}

export default List
