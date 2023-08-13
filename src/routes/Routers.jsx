import Home from '../pages/Home'
import Login from '../pages/Login'

import { Routes, Route } from 'react-router-dom'

const Routers = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
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
