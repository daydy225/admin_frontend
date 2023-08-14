import { useState, useCallback, useContext, useEffect } from 'react'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import LoginForm from '../components/LoginForm/LoginForm'
import { login } from '../services/admin'
import { adminContext } from '../context/adminContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [formdata, setFormdata] = useState({})
  const [loading, setLoading] = useState(false)
  const { setAdminData } = useContext(adminContext)
  const navigate = useNavigate()
  const handleSubmit = e => {
    e.preventDefault()
    const { admin, password } = e.target.elements

    if (admin.value === '' || password.value === '') {
      return
    }
    setFormdata({
      admin: admin.value,
      password: password.value,
    })
    setLoading(true)
  }
  // const { admin, password } = formdata
  console.log('formdata', formdata)

  // const adminLogin = useCallback(async () => {
  //   try {
  //     const data = await login(admin, password)
  //     console.log('user data', data)
  //     setAdminData(data)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }, [admin, password, setAdminData])

  // useEffect(() => {
  //   adminLogin()
  //   if (loading) {
  //     setLoading(false)
  //     navigate('/')
  //   }
  // }, [adminLogin, loading, navigate])

  if (loading) return <div>loading...</div>

  return (
    <LoginForm onSubmit={handleSubmit}>
      <Input
        placeholder="Admin"
        type="text"
        name="admin"
      />
      <Input
        placeholder="Mot de passe"
        type="password"
        name="password"
      />
      <Button text="Se Connecter" />
    </LoginForm>
  )
}

export default Login
