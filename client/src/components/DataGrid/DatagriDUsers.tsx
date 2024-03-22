import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'UserName', headerName: 'UserName', width: 200 },
    { field: 'Email', headerName: 'Email', width: 200 },
    { field: 'FirstName', headerName: 'FirstName', width: 200 },
    { field: 'LastName', headerName: 'LastName', width: 200 },
    { field: 'Height', headerName: 'Height', width: 100 },
    { field: 'Weight', headerName: 'Weight', width: 100 },
    { field: 'Age', headerName: 'Age', width: 100 },
    { field: 'Phone', headerName: 'Phone', width: 100 },
    { field: 'FavouriteDietId', headerName: 'FDietId', width: 100 },
    { field: 'FavouriteTrainingId', headerName: 'FTariningId', width: 100 },
    { field: 'CoachExperienceId', headerName: 'CoachEId', width: 100 },
    { field: 'LastLogin', headerName: 'LastLogin', width: 100 }

]

const DatagriDUsers = () => {

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

export default DatagriDUsers