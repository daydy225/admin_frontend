import { useState, useCallback, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { DataGrid } from '@mui/x-data-grid'
import { getAllAdmins } from '../../services/admin'
import { tokenContext } from '../../context/tokenContext'
import { adminContext } from '../../context/adminContext'
import Loader from '../../components/Loader'
import Icon from '../../components/Icon'

const AdminList = () => {
  const { allAdmins, setAllAdmins } = useContext(adminContext)
  const [isLoading, setisLoading] = useState(false)
  const { token } = useContext(tokenContext)

  //  table columns

  const fetchAllAdmins = useCallback(async () => {
    try {
      setisLoading(true)
      const result = await getAllAdmins(token)
      if (result?.success) {
        setAllAdmins(result?.admins)
      }
    } catch (e) {
      console.error(e)
    } finally {
      setisLoading(false)
    }
  }, [token, setAllAdmins])

  useEffect(() => {
    fetchAllAdmins()
  }, [fetchAllAdmins])

  const columns = [
    {
      field: 'admins',
      headerName: 'Admins',
      width: 200,
      renderCell: params => (
        <div className="admin-info">
          <Icon
            icon="RiAdminFill"
            style={{
              fontSize: '2rem',
              marginRight: '0.5rem',
              border: '1px solid transparent',
              borderRadius: '50%',
              padding: '0.4rem',
              backgroundColor: '#666',
              color: 'white',
            }}
          />
          {params.row.username}
        </div>
      ),
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Statut',
      width: 120,
      renderCell: params => (
        <DisplayStatus
          data={params.row.status}
          key={params.row._id}
        />
      ),
    },
    {
      field: 'role',
      headerName: 'Role',
      width: 180,
      renderCell: params => (
        <div className="role">
          <span>
            {params.row.role === 'superadmin'
              ? 'Super-Administrateur'
              : 'Administrateur'}
          </span>
        </div>
      ),
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: params => (
        <>
          <Link to={`/admin/${params.row._id}`}>
            <button className="customerListEdit">Modifier</button>
          </Link>
          <RiDeleteBin6Line
            className="customerListDelete"
            onClick={() => handleDelete(params.row._id)}
          />
        </>
      ),
    },
  ]

  // function to handle delete
  const handleDelete = id => {
    setAllAdmins(prev => prev.filter(item => item._id !== id))
  }

  return !allAdmins ? (
    <Loader loading={isLoading} />
  ) : (
    <div className="customerList">
      <DataGrid
        rows={allAdmins}
        columns={columns}
        getRowId={r => r._id}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

const DisplayStatus = ({ data }) => {
  return (
    <div className={data === 'active' ? 'status-active' : 'status-inactive'}>
      <span>{data}</span>
    </div>
  )
}

export default AdminList
