import { useState } from 'react'
import { userContext } from '../context/userContext'

const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState('client')

  return (
    <userContext.Provider value={{ userData, setUserData }}>
      {children}
    </userContext.Provider>
  )
}

export default AppProvider
