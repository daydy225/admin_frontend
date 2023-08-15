import { useState, useCallback, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { DataGrid } from '@mui/x-data-grid'
import { getAllAdmins } from '../services/admin'
import { adminContext } from '../context/adminContext'
import Loader from '../components/Loader'

const Admin = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const { adminData } = useContext(adminContext)
  //  table columns

  const fetchAllAdmins = useCallback(async () => {
    try {
      setLoading(true)
      const data = await getAllAdmins(adminData.token)
      if (data.success === true) {
        setData(data)
      }
    } catch (e) {
      console.log(e)
    }
  }, [adminData.token])

  useEffect(() => {
    fetchAllAdmins()
    if (loading) {
      setLoading(false)
    }
  }, [fetchAllAdmins, loading])

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'clients',
      headerName: 'Clients',
      width: 200,
      renderCell: params => (
        <div className="customerListClients">
          <img
            className="customerListImg"
            src={params.row.avatar}
            alt={params.row.username}
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
    },
    {
      field: 'amount',
      headerName: 'Montant Total',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: params => (
        <>
          <Link to={`/client/${params.row.id}`}>
            <button className="customerListEdit">Modifier</button>
          </Link>
          <RiDeleteBin6Line
            className="customerListDelete"
            onClick={() => handleDelete(params.row.id)}
          />
        </>
      ),
    },
  ]

  // function to handle delete
  const handleDelete = id => {
    setData(data.filter(item => item.id !== id))
  }

  if (loading) return <Loader loading={loading} />

  return !data ? (
    <Loader />
  ) : (
    <div className="customerList">
      <DataGrid
        rows={data}
        columns={columns}
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

export default Admin
