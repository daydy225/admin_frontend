import visualData from '../../../assets/images/Visual-data.png'

const EditAdminInfo = ({ admin }) => {
  const { fullname, username, email, phone } = admin

  return (
    <div className="userUpdate">
      <span className="userUpdateTitle">Modifier</span>
      <form className="userUpdateForm">
        <div className="userUpdateLeft">
          {/* User update Item */}
          <div className="userUpdateItem">
            <label>Utilisateur</label>
            <input
              type="text"
              placeholder={username}
              className="userUpdateInput"
            />
          </div>
          {/* User update Item */}
          <div className="userUpdateItem">
            <label>Nom Complet</label>
            <input
              type="text"
              placeholder={fullname}
              className="userUpdateInput"
            />
          </div>
          {/* User update Item */}
          <div className="userUpdateItem">
            <label>Email</label>
            <input
              type="text"
              placeholder={email}
              className="userUpdateInput"
            />
          </div>
          {/* User update Item */}
          <div className="userUpdateItem">
            <label>Phone</label>
            <input
              type="text"
              placeholder={phone}
              className="userUpdateInput"
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
            {/* <label htmlFor="file">
              <Icon
                icon="RiUploadCloudLine"
                className="userUpdateIcon"
              />
            </label>
            <input
              type="file"
              name=""
              id="file"
              style={{ display: 'none' }}
            /> */}
          </div>
          <button className="userUpdateButton">Update</button>
        </div>
      </form>
    </div>
  )
}

export default EditAdminInfo
