import { Link } from 'react-router-dom'
import Icon from './Icon'
import './SideBar/sidebar.css'

const SidebarMenu = ({ sidebarData, onClick }) => {
  const { title, menu } = sidebarData
  const currentPath = window.location.pathname

  const iconStyle = {
    marginRight: '15px',
    fontSize: '40px !important',
  }

  const menuItems = menu
    ? menu.map(({ path, icon, name }, index) => (
        <Link
          to={path}
          className="link"
          key={index}
        >
          <li
            className={`sidebarListItem ${path === currentPath && 'active'}`}
            onClick={name === 'Déconnecter' ? onClick : null}
          >
            <Icon
              icon={icon}
              style={iconStyle}
            />
            {name}
          </li>
        </Link>
      ))
    : null

  return (
    <div className="sidebarMenu">
      <h3 className="sidebarTitle">{title}</h3>
      <ul className="sidebarList">{menuItems}</ul>
    </div>
  )
}

export default SidebarMenu
