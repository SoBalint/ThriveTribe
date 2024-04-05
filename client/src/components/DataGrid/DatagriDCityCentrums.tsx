"use client"
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'PostCode', headerName: 'PostCode', width: 200 },
    { field: 'Name', headerName: 'Name', width: 200 },
    { field: 'latitude', headerName: 'latitude', width: 200 },
    { field: 'longitude', headerName: 'longitude', width: 200 },
]

const DatagriDCityCentrums = () => {

    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch("http://localhost/thrivetribe-server/public/api/citycentrums")
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

export default DatagriDCityCentrums