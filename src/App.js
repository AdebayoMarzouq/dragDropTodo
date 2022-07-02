import { motion } from 'framer-motion'

import Header from './components/Header.component'
import Input from './components/Input.component'
import List from './components/List.component'
import Bottom from './components/Bottom.component'
import Tab from './components/Tabs.component'
import Modal from './components/Modal.component'

function App() {
  return (
    <>
      <Header />
      <Modal />
      <main className='mt-6'>
        <Input />
        <List />
        <Bottom />
        <Tab />
      </main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6, ease: 'easeIn', duration: 0.5 }}
        className='text2 dark:text-dark-text3 w-full mt-8 flex flex-col justify-center items-center'
      >
        <span>Drag and drop to reorder list</span>
        <span>Click to open item</span>
      </motion.div>
    </>
  )
}

export default App
