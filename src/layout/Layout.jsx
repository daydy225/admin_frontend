import { useCallback, useContext, useEffect } from 'react'
import { adminContext } from '../context/adminContext'
import { verify } from '../services/admin'

import Topbar from '../components/Topbar/Topbar'
import Sidebar from '../components/SideBar/Sidebar'
import Routers from '../routes/Routers'
import Login from '../pages/Login'
const Layout = () => {
  const { adminData, setAdminData } = useContext(adminContext)

  const verifyToken = useCallback(async () => {
    const token = JSON.parse(localStorage.getItem('Admin_token'))
    const result = await verify(token)
    if (result.success === true) {
      setAdminData(result.user)
    }
  }, [setAdminData])

  useEffect(() => {
    verifyToken()
  }, [verifyToken])

  if (!adminData) return <Login />

  return (
    <>
      <Topbar />
      <main className="container">
        <Sidebar />
        <Routers />
      </main>
    </>
  )
}

export default Layout
