import {
  useCallback,
  useContext,
  useEffect,
  useState,
  lazy,
  Suspense,
} from 'react'
// import { adminContext } from '../context/adminContext'
import { verify } from '../services/admin'
import { tokenContext } from '../context/tokenContext'
import Loader from '../components/Loader'
import Topbar from '../components/Topbar/Topbar'
import Sidebar from '../components/SideBar/Sidebar'
import Routers from '../routes/Routers'
const Login = lazy(() => import('../pages/Login'))

const Layout = () => {
  const { token } = useContext(tokenContext)
  const [isLoading, setIsLoading] = useState(true)
  const [newToken, setNewToken] = useState('')

  const verifyToken = useCallback(async () => {
    try {
      const result = await verify(token)
      if (result.success === true) {
        const { token: newToken } = result.user
        setNewToken(newToken)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [token])

  useEffect(() => {
    verifyToken()
  }, [verifyToken])

  if (isLoading) {
    return <Loader />
  }

  if (!newToken) {
    return (
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    )
  }

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
