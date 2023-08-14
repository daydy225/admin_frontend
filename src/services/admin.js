import axios from 'axios'

const baseUrl = 'api/auth/admin-login'

export const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}
