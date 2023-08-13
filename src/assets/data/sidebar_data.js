export const sidebar_data = [
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
