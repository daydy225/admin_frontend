import './sidebar.css'
import SidebarMenu from '../SidebarMenu'

export const Sidebar = () => {
  const sidebarData = [
    {
      sidebar_title: 'Dashboard',
      sidebar_menu: [
        {
          name: 'Accueil',
          icon: 'PersonOutline',
          path: '/',
        },
      ],
    },
    {
      sidebar_title: 'Gestions des utilisateurs',
      sidebar_menu: [
        {
          name: 'Clients',
          icon: 'PersonOutline',
          path: '/clients',
        },
        {
          name: 'Transactions',
          icon: 'AttachMoney',
          path: '/transactions',
        },
      ],
    },
    {
      sidebar_title: 'Notifications',
      sidebar_menu: [
        {
          name: 'Réclamations',
          icon: 'DynamicFeed',
          path: '/complaints',
        },
        {
          name: 'Messages',
          icon: 'ChatBubbleOutline',
          path: '',
        },
      ],
    },
    {
      sidebar_title: 'Staff',
      sidebar_menu: [
        {
          name: 'Administrateurs',
          icon: 'WorkOutline',
          path: '/admin',
        },
        {
          name: 'Déconnexion',
          icon: 'Logout',
        },
      ],
    },
  ]

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {sidebarData.map((item, index) => (
          <SidebarMenu
            key={index}
            sidebar_title={item.sidebar_title}
            sidebar_menu={item.sidebar_menu}
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar

// import { PropTypes } from 'react-prop-types'

// import {
//   LineStyle,
//   PersonOutline,
//   AttachMoney,
//   DynamicFeed,
//   ChatBubbleOutline,
//   WorkOutline,
// } from '@mui/icons-material'
// import LogoutIcon from '@mui/icons-material/Logout
// Sidebar.propTypes = {
//   sidebar_data: PropTypes.arrayOf({
//     sidebar_title: PropTypes.string,
//     sidebar_menu: PropTypes.arrayOf({
//       name: PropTypes.string,
//       icon: PropTypes.string,
//       path: PropTypes.string,
//     }),
//   }),
// }
