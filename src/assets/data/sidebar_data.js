export const sidebarData = [
  {
    title: 'Dashboard',
    menu: [
      {
        name: 'Accueil',
        icon: 'RiHomeLine',
        path: '/',
      },
    ],
  },
  {
    title: 'Gestion des utilisateurs',
    menu: [
      {
        name: 'Clients',
        icon: 'RiUserLine',
        path: '/clients',
      },
      {
        name: 'Transactions',
        icon: 'RiExchangeDollarFill',
        path: '/transactions',
      },
    ],
  },
  {
    title: 'Notifications',
    menu: [
      {
        name: 'Réclamations',
        icon: 'RiErrorWarningLine',
        path: '/complaints',
      },
      {
        name: 'Messages',
        icon: 'RiChat3Line',
        // path: '/',
      },
    ],
  },
  {
    title: 'Staff',
    menu: [
      {
        name: 'Admininstrateurs',
        icon: 'RiUserSettingsLine',
        path: '/adminList',
      },
      {
        name: 'Déconnecter',
        icon: 'RiLogoutBoxRLine',
        // path: '/logout',
      },
    ],
  },
]
