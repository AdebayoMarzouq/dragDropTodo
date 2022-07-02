import React, { useContext, useState, useEffect } from 'react'

import { getData } from './utils'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [items, setItems] = useState(getData())
  const [darkMode, setDarkMode] = useState(false)
  const [showModal, setShowModal] = useState(false) // toggles modal
  const [current, setCurrent] = useState({}) //value passed into modal
  const [currentTab, setCurrentTab] = useState('all')

  const addItem = (input) => {
    if (!input) return
    setItems((prev) => [
      ...prev,
      { id: new Date().getTime().toString(), todo: input, isCompleted: false },
    ])
  }

  const filteredItems = () => {
    if (currentTab === 'all') {
      return items
    } else if (currentTab === 'active') {
      return items.filter((item) => !item.isCompleted)
    } else if (currentTab === 'completed') {
      return items.filter((item) => item.isCompleted)
    }
  }

  const clearCompleted = () => {
    setItems([...items.filter((item) => !item.isCompleted)])
  }

  const editItem = (input, id) => {
    const newState = items.map((item) => {
      if (item.id === id) {
        return { ...item, todo: input }
      }
      return item
    })

    setItems(newState)
  }

  const editStatus = (id) => {
    const newState = items.map((item) => {
      if (item.id === id) {
        const update = item.isCompleted
        return { ...item, isCompleted: !update }
      }
      return item
    })

    setItems(newState)
  }

  const removeItem = (id) => {
    setItems((prev) => [...prev.filter((item) => item.id !== id)])
  }

  const openModal = (id) => {
    setCurrent(filteredItems().find((item) => item.id === id))
    setShowModal(true)
  }

  const closeModal = (current) => {
    setCurrent({})
    setShowModal(false)
  }

  useEffect(() => {
    const el = document.getElementsByTagName('html')[0]
    el.classList.toggle('dark')
  }, [darkMode])

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(items))
  }, [items])

  return (
    <AppContext.Provider
      value={{
        items,
        filteredItems,
        setItems,
        addItem,
        editItem,
        removeItem,
        darkMode,
        setDarkMode,
        showModal,
        openModal,
        closeModal,
        current,
        currentTab,
        setCurrentTab,
        editStatus,
        clearCompleted,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
