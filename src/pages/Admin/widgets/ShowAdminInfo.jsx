import Icon from '../../../components/Icon'
import { formatDate } from '../../../utils/dateHelper'
import { adminContext } from '../../../context/adminContext'
import { useContext } from 'react'

const ShowAdminInfo = () => {
  const { admin } = useContext(adminContext)

  if (admin === undefined || admin === null) {
    window.location.href = '/adminList'
  }

  const { fullname, role, username, created_at, email, phone } = admin
  const date = formatDate(created_at)

  return (
    <div className="userShow">
      <div className="userShowTop">
        <img
          src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          className="userShowImg"
        />
        <div className="userShowTopTitle">
          <span className="userShowUsername">{fullname}</span>
          <span className="userShowUserTitle">
            {role === 'superadmin' ? 'Super-Administrateur' : 'Administrateur'}
          </span>
        </div>
      </div>
      <div className="userShowBottom">
        <span className="userShowTitle">Détails du compte</span>
        {/* User Info */}
        <div className="userShowInfo">
          <Icon
            icon="RiUserLine"
            className="userShowIcon"
          />
          <span className="userShowInfoTitle">{username}</span>
        </div>
        {/* User Info */}
        <div className="userShowInfo">
          <Icon icon="RiCalendarLine" />
          <span className="userShowInfoTitle">{date}</span>
        </div>
        <span className="userShowTitle">Contact Details</span>
        {/* User Info */}
        <div className="userShowInfo">
          <Icon icon="RiPhoneLine" />
          <span className="userShowInfoTitle">+225 {phone}</span>
        </div>
        {/* User Info */}
        <div className="userShowInfo">
          <Icon
            icon="RiMailLine"
            className="userShowIcon"
          />
          <span className="userShowInfoTitle">{email}</span>
        </div>
      </div>
    </div>
  )
}
export default ShowAdminInfo
