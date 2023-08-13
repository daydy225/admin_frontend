import './sidebar.css'

import {
  LineStyle,
  PersonOutline,
  AttachMoney,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
} from '@mui/icons-material'
import LogoutIcon from '@mui/icons-material/Logout'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {/* Menu Sidebar */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link
              to="/"
              className="link"
            >
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Acceuil
              </li>
            </Link>
          </ul>
        </div>
        {/* Menu Sidebar */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Gestion client</h3>
          <ul className="sidebarList">
            <Link
              to="/clients"
              className="link"
            >
              <li className="sidebarListItem active">
                <PersonOutline className="sidebarIcon" />
                Clients
              </li>
            </Link>
            <Link
              to="/transactions"
              className="link"
            >
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Transactions
              </li>
            </Link>
          </ul>
        </div>
        {/* Menu Sidebar */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <Link
              to="/complaints"
              className="link"
            >
              <li className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                Réclamations
              </li>
            </Link>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        {/* Menu Sidebar */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <Link
              to="/admin"
              className="link"
            >
              <li className="sidebarListItem active">
                <WorkOutline className="sidebarIcon" />
                Administrateurs
              </li>
            </Link>
            <li className="sidebarListItem">
              <LogoutIcon className="sidebarIcon" />
              Déconnexion
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
