import { sidebarData } from '../../assets/data/sidebar_data'
import SidebarMenu from '../SidebarMenu'

const Sidebar = () => {
  const logout = () => {
    localStorage.removeItem('Admin_token')
    window.location.reload()
  }

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {sidebarData.map(item => (
          <SidebarMenu
            key={item.title} // Use a unique key, such as the title
            sidebarData={item}
            onClick={logout}
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
