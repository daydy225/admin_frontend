import { useState } from 'react'
// import { Link } from 'react-router-dom'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { DataGrid } from '@mui/x-data-grid'
import { transactionsRows } from '../assets/data/transactionsRows'

const Transactions = () => {
  const [data, setData] = useState(transactionsRows)

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
    { field: 'date', headerName: 'Date', width: 200 },
    {
      field: 'status',
      headerName: 'Statut',
      width: 120,
      renderCell: params => <Button type={params.row.status} />,
    },
    {
      field: 'amount',
      headerName: 'Montant',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: params => (
        <>
          {/* <Link to={`/client/${params.row.id}`}>
            <button className="customerListEdit">Modifier</button>
          </Link> */}
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

const Button = ({ type }) => {
  const convertType = type => {
    switch (type) {
      case 'Approved':
        return 'Approvée'
      case 'Pending':
        return 'En attente'
      case 'Declined':
        return 'Réfusée'
      default:
        return ''
    }
  }

  return (
    <button className={`widgetLgButton ${type}`}>{`${convertType(
      type,
    )}`}</button>
  )
}

export default Transactions
