import { useState } from 'react'
import { adminContext } from '../context/adminContext'
import { tokenContext } from '../context/tokenContext'

const AppProvider = ({ children }) => {
  const [allAdmins, setAllAdmins] = useState([])
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem('Admin_token')),
  )

  return (
    <adminContext.Provider value={{ allAdmins, setAllAdmins }}>
      <tokenContext.Provider value={{ token, setToken }}>
        {children}
      </tokenContext.Provider>
    </adminContext.Provider>
  )
}

export default AppProvider
