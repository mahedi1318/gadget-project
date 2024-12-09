import React, { createContext, useState } from 'react'


export const productContext = createContext()

const ProviderData = ({children}) => {

    const [ cart, setCart] = useState([])
    const [ wish, setWish] = useState([])
    let allProductCart = {
        cart,
        setCart,
        wish,
        setWish,
    }

  return (
    <productContext.Provider value={allProductCart}>
      {children}
    </productContext.Provider>
  )
}

export default ProviderData
