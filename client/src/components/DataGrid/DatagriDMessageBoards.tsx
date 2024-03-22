import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'Text', headerName: 'Text'},
    { field: 'Like', headerName: 'Like'},
    { field: 'ShareDate', headerName: 'ShareDate'},
    { field: 'UserId', headerName: 'UserId'},
]

const DatagriDMessageBoards = () => {

    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch("http://localhost/thrivetribe-server/public/api/messages")
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

export default DatagriDMessageBoards