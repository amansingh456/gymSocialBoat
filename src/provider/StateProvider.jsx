import React, { createContext, useState } from 'react'

export const SendData = createContext()

const StateProvider = ({children}) => {
   const [allData, setAllData] = useState([])
   const [loading, setLoading] = useState(true)

   const value = {allData, loading, setAllData, setLoading}  

  return (
    <SendData.Provider value={value}>
      {children}
    </SendData.Provider>
  )
}

export default StateProvider
