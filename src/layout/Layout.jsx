import Topbar from '../components/Topbar/Topbar'
import Sidebar from '../components/SideBar/Sidebar'
import Routers from '../routes/Routers'

const Layout = () => {
  return (
    <>
      <Topbar />
      <main className="conatainer">
        <Sidebar />
        <Routers />
      </main>
    </>
  )
}

export default Layout
