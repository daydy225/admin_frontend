import Admin from '../pages/Admin'
import Complaints from '../pages/Complaints'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Clients from '../pages/Clients'
import Transactions from '../pages/Transactions'
import { Routes, Route } from 'react-router-dom'

const Routers = () => {
  return (
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
        path="/admin"
        element={<Admin />}
      />
      <Route
        path="/complaints"
        element={<Complaints />}
      />
      <Route
        path="/transactions"
        element={<Transactions />}
      />
      <Route
        path="/messages"
        element={<div>Messages</div>}
      />
      <Route
        path="/logout"
        element={<div>Logout</div>}
      />

      <Route
        path="/login"
        element={<Login />}
      />
      {/* <Route
        path="/register"
        element={<Signup />}
      /> */}
    </Routes>
  )
}

export default Routers
