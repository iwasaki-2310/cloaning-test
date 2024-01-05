import { Home } from '../components/pages/Home'
import { Setting } from '../components/pages/Setting'
import { UserManagement } from '../components/pages/UserManagement'

export const homeRoutes = [
  {
    path: '/',
    exact: true,
    element: <Home />,
  },
  {
    path: '/user_management',
    exact: false,
    element: <UserManagement />,
  },
  {
    path: '/setting',
    exact: false,
    element: <Setting />,
  },
]
