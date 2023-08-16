import axios from 'axios'

// const baseUrl = 'http://127.0.0.1:3000/api'
const baseUrl = 'https://admin-backend-society.fly.dev/api/'

export const login = async credentials => {
  const response = await axios.post(`${baseUrl}/auth/admin-login`, credentials)
  return response.data
}
export const register = async credentials => {
  const response = await axios.post(`${baseUrl}/auth/register`, credentials)
  return response.data
}

export const verify = async token => {
  const response = await axios.get(`${baseUrl}/auth/verify-token`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

export const getAllAdmins = async token => {
  const response = await axios.get(`${baseUrl}/admin`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}
