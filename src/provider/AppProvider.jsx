import { useState } from 'react'
import { adminContext } from '../context/adminContext'

const AppProvider = ({ children }) => {
  const [adminData, setAdminData] = useState(null)

  return (
    <adminContext.Provider value={{ adminData, setAdminData }}>
      {children}
    </adminContext.Provider>
  )
}

export default AppProvider
