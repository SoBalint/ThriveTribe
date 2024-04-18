"use client"
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import {Button, Table} from "react-bootstrap";

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
    { field: 'LastLogin', headerName: 'LastLogin', width: 100 },
    { field: 'action', headerName: 'action', width: 200 }

]

function refreshPage() {
    window.location.reload(false);
}

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
            <Button variant={"success"} href="userCRUD/create">Létrehozás</Button>
            <Table striped bordered hover>
                <thead>
                <th>ID</th>
                <th>Email</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Height</th>
                <th>Weight</th>
                <th>Age</th>
                <th>Phone</th>
                <th>FavouriteDietId</th>
                <th>FavouriteTrainingId</th>
                <th>CoachExperienceId</th>
                <th>LastLogin</th>
                </thead>
                <tbody>
                {tableData && tableData.map(row => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.Email}</td>
                        <td>{row.FirstName}</td>
                        <td>{row.LastName}</td>
                        <td>{row.Height}</td>
                        <td>{row.Weight}</td>
                        <td>{row.Age}</td>
                        <td>{row.Phone}</td>
                        <td>{row.FavouriteDietId}</td>
                        <td>{row.FavouriteTrainingId}</td>
                        <td>{row.CoachExperienceId}</td>
                        <td>{row.LastLogin}</td>
                        <td>
                            <Button variant={"warning"} href={`userCRUD/${row.id}`}>Szerkesztés</Button>
                            <Button variant={"danger"} onClick={() => {
                                fetch(`http://localhost/thrivetribe-server/public/api/users/delete/${row.id}`, {
                                    method: 'DELETE'
                                }).then(refreshPage)
                            }}>Törlés</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
}

export default DatagriDUsers