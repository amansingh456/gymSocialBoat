import React, { createContext, useState } from 'react'

export const SendData = createContext()

const StateProvider = ({children}) => {
   const [allData, setAllData] = useState([])
   const [loading, setLoading] = useState(true)
   const [query, setQuery] = useState("" || "gym")

   const value = {allData, loading, setAllData, setLoading, query, setQuery}  

  return (
    <SendData.Provider value={value}>
      {children}
    </SendData.Provider>
  )
}

export default StateProvider
