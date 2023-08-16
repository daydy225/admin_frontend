import visualData from '../../../assets/images/Visual-data.png'
import { adminContext } from '../../../context/adminContext'
import { useCallback, useContext, useState } from 'react'
import { tokenContext } from '../../../context/tokenContext'
import { updateAdmin } from '../../../services/admin'
import { useParams } from 'react-router-dom'
import Loader from '../../../components/Loader'

const EditAdminInfo = () => {
  const { id } = useParams()
  const { admin, setAdmin } = useContext(adminContext)
  const [isLoading, setIsLoading] = useState(false)
  const { token } = useContext(tokenContext)
  const [formData, setFormData] = useState({
    username: '',
    fullname: '',
    email: '',
    phone: '',
    created_at: admin.created_at,
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const isFormEmpty = Object.values(formData).some(value => value === '')
    if (isFormEmpty) return alert('Veuillez remplir tous les champs')
    handleUpdate()
    setIsLoading(true)
  }

  const handleUpdate = useCallback(async () => {
    try {
      const result = await updateAdmin(id, formData, token)
      if (result.success) {
        setAdmin(prevAdmin => ({
          ...prevAdmin,
          username: formData.username,
          fullname: formData.fullname,
          email: formData.email,
          phone: formData.phone,
          created_at: formData.created_at,
        }))
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
      setFormData({
        username: '',
        fullname: '',
        email: '',
        phone: '',
        created_at: admin.created_at,
      })
    }
  }, [formData, id, setAdmin, token, admin.created_at])

  return (
    <div className="userUpdate">
      <span className="userUpdateTitle">Modifier</span>
      <form
        className="userUpdateForm"
        onSubmit={handleSubmit}
      >
        <div className="userUpdateLeft">
          {/* User update Item */}
          <div className="userUpdateItem">
            <label>Utilisateur</label>
            <input
              type="text"
              placeholder={admin.username}
              name="username"
              className="userUpdateInput"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          {/* User update Item */}
          <div className="userUpdateItem">
            <label>Nom Complet</label>
            <input
              type="text"
              placeholder={admin.fullname}
              name="fullname"
              className="userUpdateInput"
              value={formData.fullname}
              onChange={handleChange}
            />
          </div>
          {/* User update Item */}
          <div className="userUpdateItem">
            <label>Email</label>
            <input
              type="text"
              placeholder={admin.email}
              name="email"
              className="userUpdateInput"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {/* User update Item */}
          <div className="userUpdateItem">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder={admin.phone}
              className="userUpdateInput"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="userUpdateRight">
          <div className="userUpdateUpload">
            <img
              src={visualData}
              alt=""
              className="userUpdateImg"
            />
          </div>
          <button
            className="userUpdateButton"
            type="submit"
          >
            <span style={{ display: isLoading ? 'none' : '' }}>Modifier</span>

            {isLoading && (
              <Loader
                color="#fff"
                height="20px"
                size={10}
              />
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditAdminInfo
