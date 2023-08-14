import { NotificationsNone, Language, Settings } from '@mui/icons-material'
import './topbar.css'
import { Link } from 'react-router-dom'
import { RiBarChartHorizontalLine } from 'react-icons/ri'

const Topbar = () => {
  const toggleMenu = () => {
    const sidebar_menu = document.querySelector('.sidebar')
    sidebar_menu.classList.toggle('show_sidebar')
  }

  return (
    <div>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span
              className="toggle-menu"
              onClick={toggleMenu}
            >
              <RiBarChartHorizontalLine />
            </span>
            <Link
              to="/"
              style={{
                font: 'inherit',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <span className="logo">SOCIETY</span>
            </Link>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt="Top Avatar"
              className="topAvatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
