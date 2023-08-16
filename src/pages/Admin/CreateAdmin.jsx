import { useContext, useEffect } from 'react'
import { adminContext } from '../../context/adminContext'

const CreateAdmin = () => {
  const { admin } = useContext(adminContext)

  console.log('admin', admin)

  useEffect(() => {
    if (admin === undefined || admin === null) {
      window.location.href = '/adminList'
    }
  }, [admin])

  return (
    <div className="newUser">
      <h1 className="newUserTitle">Nouvel utilisateur</h1>
      <form className="newUserForm">
        {/* New User Item*/}
        <div className="newUserItem">
          <label>Utilisateur</label>
          <input
            type="text"
            name="username"
            placeholder={admin.username}
          />
        </div>
        {/* New User Item*/}
        <div className="newUserItem">
          <label>Nom Complet</label>
          <input
            type="text"
            name="fullname"
            placeholder={admin.fullname}
          />
        </div>
        {/* New User Item*/}
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder={admin.email}
          />
        </div>
        {/* New User Item*/}
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Entrer un nouveau mot de passe"
          />
        </div>
        {/* New User Item*/}
        <div className="newUserItem">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder={`+225 ${admin.phone}`}
          />
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select
            name="active"
            id="active"
            className="newUserSelect"
          >
            {/* <option value="">Select an option</option> */}
            <option value="active">Yes</option>
            <option value="inactive">No</option>
          </select>
        </div>
        <button className="newUserButton">Créer</button>
      </form>
    </div>
  )
}

export const CreaAdminInput = () => {
  return (
    <div className="newUserItem">
      <label>Username</label>
      <input
        type="text"
        placeholder="john"
      />
    </div>
  )
}

export default CreateAdmin

// <form className="newUserForm">
// {/* New User Item*/}
// <div className="newUserItem">
//   <label>Username</label>
//   <input
//     type="text"
//     placeholder="john"
//   />
// </div>
// {/* New User Item*/}
// <div className="newUserItem">
//   <label>Full Name</label>
//   <input
//     type="text"
//     placeholder="john Smith"
//   />
// </div>
// {/* New User Item*/}
// <div className="newUserItem">
//   <label>Email</label>
//   <input
//     type="text"
//     placeholder="john Smith"
//   />
// </div>
// {/* New User Item*/}
// <div className="newUserItem">
//   <label>Password</label>
//   <input
//     type="text"
//     placeholder="password"
//   />
// </div>
// {/* New User Item*/}
// <div className="newUserItem">
//   <label>Phone</label>
//   <input
//     type="text"
//     placeholder="+ 1 252 552 25"
//   />
// </div>
// <div className="newUserItem">
//   <label>Active</label>
//   <select
//     name="active"
//     id="active"
//     className="newUserSelect"
//   >
//     {/* <option value="">Select an option</option> */}
//     <option value="yes">Yes</option>
//     <option value="no">No</option>
//   </select>
// </div>
// <button className="newUserButton">Create</button>
// </form>
