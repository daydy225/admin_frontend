import { Link } from 'react-router-dom'
import Icon from '@mui/material/Icon'
import { PropTypes } from 'react-prop-types'
import './SideBar/sidebar.css'

export const SidebarMenu = ({ sidebar_title, sidebar_menu }) => {
  return (
    <div className="sidebarMenu">
      <h3 className="sidebarTitle">{sidebar_title}</h3>
      <ul className="sidebarList">
        {sidebar_menu.map(({ path, icon, name }, index) => (
          <Link
            to={path}
            className="link"
            key={index}
          >
            <li
              className={`sidebarListItem ${
                path === window.location.pathname && 'active'
              }`}
            >
              <Icon style="sidebarIcon">{icon}</Icon>
              {name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

SidebarMenu.propTypes = {
  sidebar_title: PropTypes.string.isRequired,
  sidebar_menu: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ),
}

export default SidebarMenu
