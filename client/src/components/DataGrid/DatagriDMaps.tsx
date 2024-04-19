"use client"
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import {Button, Table} from "react-bootstrap";

const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'Address', headerName: 'GymName', width: 200 },
    { field: 'OpenHour', headerName: 'OpenHour', width: 200 },
    { field: 'CordinationId', headerName: 'CordinationId', width: 100 },
    { field: 'action', headerName: 'action', width: 200 }
]

function refreshPage() {
    window.location.reload(false);
}

const DatagriDMaps = () => {

    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch("http://localhost/thrivetribe-server/public/api/maps")
            .then((data) => data.json())
            .then((data) => setTableData(data))
    }, [])
    console.log(tableData)

    return (
        <div style={{ height: 500, width: '100%' }}>
            <Button variant={"success"} href="mapCRUD/create">Létrehozás</Button>
            <Table striped bordered hover>
                <thead>
                <th>ID</th>
                <th>Address</th>
                <th>GymName</th>
                <th>OpenHour</th>
                </thead>
                <tbody>
                {tableData && tableData.map(row => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.Address}</td>
                        <td>{row.GymName}</td>
                        <td>{row.OpenHour}</td>
                        <td>
                            <Button variant={"warning"} href={`mapCRUD/${row.id}`}>Szerkesztés</Button>
                            <Button variant={"danger"} onClick={() => {
                                fetch(`http://localhost/thrivetribe-server/public/api/maps/delete/${row.id}`, {
                                    method: 'DELETE'
                                }).then((res) => {
                                    alert("Sikeres törlés!");
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

export default DatagriDMaps