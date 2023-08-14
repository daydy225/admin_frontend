import { useContext } from 'react'
import { useCallback } from 'react'
import { login } from '../services/admin'
import { adminContext } from '../context/adminContext'
import { useEffect } from 'react'

export const useAuthAdmin = credentials => {
  const { email, password } = credentials
  const { setAdminData } = useContext(adminContext)

  const adminLogin = useCallback(async () => {
    try {
      const data = await login(email, password)
      console.log('user data', data)
      setAdminData(data)
    } catch (e) {
      console.log(e)
    }
  }, [email, password, setAdminData])

  useEffect(() => {
    adminLogin()
  }, [adminLogin])
}
