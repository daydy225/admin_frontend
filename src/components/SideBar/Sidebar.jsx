// import { useState } from 'react'
import { sidebarData } from '../../assets/data/sidebar_data'
import SidebarMenu from '../SidebarMenu'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {sidebarData.map(item => (
          <SidebarMenu
            key={item.title} // Use a unique key, such as the title
            sidebarData={item}
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
