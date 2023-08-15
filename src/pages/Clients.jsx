import { useState } from 'react'
import { customersRows } from '../assets/data/customersRows'
import { Link } from 'react-router-dom'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { DataGrid } from '@mui/x-data-grid'

const Clients = () => {
  const [data, setData] = useState(customersRows)

  //  table columns
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

  return (
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

export default Clients
