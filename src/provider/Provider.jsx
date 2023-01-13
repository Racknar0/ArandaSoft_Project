import React, {createContext, useState} from 'react'

export const Store = createContext()

const Provider = ({children}) => {

    const [cards , setCards] = useState([])

    const value = {
        cards,
        setCards,
    }

  return (
    <Store.Provider value={value}>
        {children}
    </Store.Provider>
  )
}

export default Provider
