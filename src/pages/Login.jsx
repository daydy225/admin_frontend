import { useState, useCallback, useContext, useEffect } from 'react'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import LoginForm from '../components/LoginForm/LoginForm'
import { login } from '../services/admin'
import { adminContext } from '../context/adminContext'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'

const Login = () => {
  const [formdata, setFormdata] = useState({})
  const [loading, setLoading] = useState(false)
  const { setAdminData } = useContext(adminContext)
  const navigate = useNavigate()
  const handleSubmit = e => {
    e.preventDefault()
    const { username, password } = e.target.elements

    if (username.value === '' || password.value === '') {
      return
    }
    setFormdata({
      username: username.value,
      password: password.value,
    })
    setLoading(true)
  }

  const adminLogin = useCallback(async () => {
    if (!formdata.username || !formdata.password) return
    try {
      const data = await login(formdata)
      if (data.success === true) {
        setAdminData(data)
        localStorage.setItem('Admin_token', JSON.stringify(data.result.token))
      }
    } catch (e) {
      console.log(e)
    }
  }, [formdata, setAdminData])

  useEffect(() => {
    adminLogin()
    if (loading) {
      setLoading(false)
      navigate('/')
    }
  }, [adminLogin, loading, navigate])

  if (loading) return <Loader loading={loading} />

  return (
    <LoginForm onSubmit={handleSubmit}>
      <Input
        placeholder="Admin"
        type="text"
        name="username"
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
