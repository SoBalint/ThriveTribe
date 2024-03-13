import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'UserName', headerName: 'UserName', width: 200 },
    { field: 'Email', headerName: 'Email', width: 200 },
    { field: 'FirstName', headerName: 'FirstName', width: 200 },
    { field: 'LastName', headerName: 'LastName', width: 200 }
]

const DataGriD = () => {

    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch("http://localhost/thrivetribe-server/public/api/users")
            .then((data) => data.json())
            .then((data) => setTableData(data))

    }, [])

    console.log(tableData)

    return (
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid
                rows={tableData}
                columns={columns}
            />
        </div>
    )
}

export default DataGriD