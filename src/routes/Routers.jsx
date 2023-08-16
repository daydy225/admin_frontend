import Home from '../pages/Home'
import Clients from '../pages/Clients'
import Transactions from '../pages/Transactions'
import { Routes, Route } from 'react-router-dom'
import AdminList from '../pages/Admin/AdminList'
import Admin from '../pages/Admin/Admin'
import CreateAdmin from '../pages/Admin/CreateAdmin'

const Routers = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/clients"
          element={<Clients />}
        />
        <Route
          path="/adminList"
          element={<AdminList />}
        />
        <Route
          path="/newAdmin"
          element={<CreateAdmin />}
        />
        <Route
          path="/admin/:id"
          element={<Admin />}
        />
        <Route
          path="/complaints"
          element={<Home />}
        />
        <Route
          path="/transactions"
          element={<Transactions />}
        />
        <Route
          path="*"
          element={<Home />}
        />
      </Routes>
    </>
  )
}

export default Routers
