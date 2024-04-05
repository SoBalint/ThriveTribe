"use client"
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'Name', headerName: 'Name', width: 200 },
    { field: 'Text', headerName: 'Text', width: 200 },
    { field: 'Like', headerName: 'Like', width: 100 },
    { field: 'DisLike', headerName: 'DisLike', width: 100 },
    { field: 'Type', headerName: 'Type', width: 200 },
    { field: 'UploadeDate', headerName: 'UploadeDate', width: 200 },
]

const DatagriDTrainings = () => {

    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch("http://localhost/thrivetribe-server/public/api/trainings")
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

export default DatagriDTrainings