import { useState } from 'react'
import { adminListContext, adminContext } from '../context/adminContext'
import { tokenContext } from '../context/tokenContext'

const AppProvider = ({ children }) => {
  const [allAdmins, setAllAdmins] = useState([])
  const [admin, setAdmin] = useState({})
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem('Admin_token')),
  )

  return (
    <adminListContext.Provider value={{ allAdmins, setAllAdmins }}>
      <adminContext.Provider value={{ admin, setAdmin }}>
        <tokenContext.Provider value={{ token, setToken }}>
          {children}
        </tokenContext.Provider>
      </adminContext.Provider>
    </adminListContext.Provider>
  )
}

export default AppProvider
