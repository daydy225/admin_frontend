import { useContext } from 'react'
import { adminContext } from '../context/adminContext'

import Topbar from '../components/Topbar/Topbar'
import Sidebar from '../components/SideBar/Sidebar'
import Routers from '../routes/Routers'
import Login from '../pages/Login'
const Layout = () => {
  const { adminData } = useContext(adminContext)

  if (!adminData) return <Login />

  // useEffect(() => {
  //   const testConnection = async () => {
  //     try {
  //       const response = await axios.get('http://127.0.0.1:3000/')
  //       console.log(response.data)
  //       setAdminData(response.data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   testConnection()
  // }, [setAdminData])

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
