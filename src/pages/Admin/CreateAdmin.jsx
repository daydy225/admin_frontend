import { useCallback, useState } from 'react'
import { register } from '../../services/admin'
import Loader from '../../components/Loader'

const CreateAdmin = () => {
  // const { admin, } = useContext(adminContext)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    fullname: '',
    email: '',
    phone: '',
    password: '',
    role: 'Veuillez sélectionner un role',
  })

  const handleSubmit = e => {
    e.preventDefault()
    const isFormEmpty = Object.values(formData).some(
      value => value === '' || value === 'Veuillez sélectionner un role',
    )
    if (isFormEmpty) return alert('Veuillez remplir tous les champs')
    console.log('formData', formData)
    handleRegisterAdmin()
    setIsLoading(true)
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleRegisterAdmin = useCallback(async () => {
    try {
      const data = await register(formData)
      console.log('data', data)
      if (data.success) {
        alert('Utilisateur créé avec succès')
      }
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
      setFormData({
        username: '',
        fullname: '',
        email: '',
        phone: '',
        password: '',
        role: '',
      })
    }
  }, [formData, setIsLoading, setFormData])

  return (
    <div className="newUser">
      <h1 className="newUserTitle">Nouvel utilisateur</h1>
      <form
        className="newUserForm"
        onSubmit={handleSubmit}
      >
        {/* New User Item*/}
        <div className="newUserItem">
          <label>Utilisateur</label>
          <input
            type="text"
            name="username"
            placeholder="Utilisateur"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        {/* New User Item*/}
        <div className="newUserItem">
          <label>Nom Complet</label>
          <input
            type="text"
            name="fullname"
            placeholder="Nom Complet"
            value={formData.fullname}
            onChange={handleChange}
          />
        </div>
        {/* New User Item*/}
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Entrer une adresse email"
          />
        </div>
        {/* New User Item*/}
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Entrer un nouveau mot de passe"
          />
        </div>
        {/* New User Item*/}
        <div className="newUserItem">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Entrer un numéro de téléphone"
          />
        </div>
        <div className="newUserItem">
          <label>Role</label>
          <select
            name="role"
            id="role"
            className="newUserSelect"
            value={formData.role}
            onChange={handleChange}
          >
            {/* <option value="">Select an option</option> */}
            <option value="Veuillez remplir tous les champs">
              Veuillez sélectionner un role
            </option>
            <option value="superadmin">Super-Administrateur</option>
            <option value="admin">Administrateur</option>
          </select>
        </div>
        <button className="newUserButton">
          <span style={{ display: isLoading ? 'none' : '' }}>Créer</span>

          {isLoading && (
            <Loader
              color="#fff"
              height="20px"
              size={10}
            />
          )}
        </button>
      </form>
    </div>
  )
}

// export const CreaAdminInput = () => {
//   return (
//     <div className="newUserItem">
//       <label>Username</label>
//       <input
//         type="text"
//         placeholder="john"
//       />
//     </div>
//   )
// }

export default CreateAdmin
