import Header from './components/Header.component'
import Input from './components/Input.component'
import List from './components/List.component'
import Bottom from './components/Bottom.component'
import Tab from './components/Tabs.component'
import Modal from './components/Modal.component'
import Footer from './components/Footer.component'

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
      <Footer />
    </>
  )
}

export default App
