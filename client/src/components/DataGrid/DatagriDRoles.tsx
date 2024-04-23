"use client"
import React, { useState, useEffect } from 'react'
import {Button, Table} from "react-bootstrap";

const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'Name', headerName: 'Name', width: 200 },
    { field: 'action', headerName: 'action', width: 200 }
]

function refreshPage() {
    window.location.reload(false);
}

const DatagriDRoles = () => {

    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch("http://localhost/thrivetribe-server/public/api/roles")
            .then((data) => data.json())
            .then((data) => setTableData(data))

    }, [])


    return (
        <div style={{ height: 500, width: '100%' }}>
            <Button variant={"success"} href="roleCRUD/create">Létrehozás</Button>
            <Table striped bordered hover>
                <thead>
                <th>ID</th>
                <th>Name</th>
                </thead>
                <tbody>
                {tableData && tableData.map(row => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.Name}</td>
                        <td>
                            <Button variant={"warning"} href={`/roleCRUD/${row.id}`}>Szerkesztés</Button>
                            <Button variant={"danger"} onClick={() => {
                                fetch(`http://localhost/thrivetribe-server/public/api/roles/delete/${row.id}`, {
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

export default DatagriDRoles