import { useContext } from 'react'

import { userContext } from '../context/userContext'

const Home = () => {
  const { userData } = useContext(userContext)
  return <div>{userData}</div>
}

export default Home
