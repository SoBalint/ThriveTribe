"use client"
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import {Button, Table} from "react-bootstrap";

const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'PostCode', headerName: 'PostCode', width: 200 },
    { field: 'Name', headerName: 'Name', width: 200 },
    { field: 'latitude', headerName: 'latitude', width: 200 },
    { field: 'longitude', headerName: 'longitude', width: 200 },
    { field: 'action', headerName: 'action', width: 200 }
]

function refreshPage() {
    window.location.reload(false);
}

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
            <Button variant={"success"} href="citycentrumCRUD/create">Létrehozás</Button>
            <Table striped bordered hover>
                <thead>
                    <th>ID</th>
                    <th>PostCode</th>
                    <th>Name</th>
                    <th>latitude</th>
                    <th>longitude</th>
                </thead>
                <tbody>
                    {tableData && tableData.map(row => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.PostCode}</td>
                            <td>{row.Name}</td>
                            <td>{row.latitude}</td>
                            <td>{row.longitude}</td>
                            <td>
                                <Button variant={"warning"} href={`citycentrumCRUD/${row.id}`}>Szerkesztés</Button>
                                <Button variant={"danger"} onClick={() => {
                                    fetch(`http://localhost/thrivetribe-server/public/api/citycentrums/delete/${row.id}`, {
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

export default DatagriDCityCentrums