import { Link, useParams } from 'react-router-dom'
import EditAdminInfo from './widgets/EditAdminInfo'
import ShowAdminInfo from './widgets/ShowAdminInfo'
import { useContext, useEffect } from 'react'
import { adminListContext, adminContext } from '../../context/adminContext'

const Admin = () => {
  const { allAdmins } = useContext(adminListContext)
  const { setAdmin } = useContext(adminContext)
  const { id } = useParams()

  useEffect(() => {
    const foundAdmin = allAdmins.find(admin => admin._id === id)
    setAdmin(foundAdmin)
  }, [allAdmins, id, setAdmin])
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
          <ShowAdminInfo />
          <EditAdminInfo />
        </div>
      </div>
    </div>
  )
}

export default Admin
