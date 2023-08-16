import { Link, useParams } from 'react-router-dom'
import EditAdminInfo from './widgets/EditAdminInfo'
import ShowAdminInfo from './widgets/ShowAdminInfo'
import { useContext, useEffect, useState } from 'react'
import { adminContext } from '../../context/adminContext'

const Admin = () => {
  const { allAdmins } = useContext(adminContext)
  const { id } = useParams()
  const [admin, setAdmin] = useState({})

  useEffect(() => {
    const foundAdmin = allAdmins.find(admin => admin._id === id)
    setAdmin(foundAdmin)
  }, [allAdmins, id])
  return (
    <div>
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Modifier</h1>
          <Link to="/newAdmin">
            <button className="userAddButton">Ajouter</button>
          </Link>
        </div>
        <div className="userContainer">
          <ShowAdminInfo admin={admin} />
          <EditAdminInfo admin={admin} />
        </div>
      </div>
    </div>
  )
}

export default Admin
