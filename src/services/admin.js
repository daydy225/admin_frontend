import axios from 'axios'

const baseUrl = 'http://127.0.0.1:3000/api/auth'
// const baseUrl = 'https://admin-backend-society.fly.dev/api/auth'

export const login = async credentials => {
  const response = await axios.post(`${baseUrl}/admin-login`, credentials)
  return response.data
}

export const verify = async token => {
  const response = await axios.get(`${baseUrl}/verify-token`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
  return response.data
}
