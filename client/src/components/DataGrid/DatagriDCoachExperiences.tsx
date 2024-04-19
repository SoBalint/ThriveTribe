"use client"
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import {Button, Table} from "react-bootstrap";

const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'Skill', headerName: 'Skill', width: 200 },
    { field: 'School', headerName: 'School', width: 200 },
    { field: 'Experience', headerName: 'Experience', width: 200},
    { field: 'action', headerName: 'action', width: 200 }
]

function refreshPage() {
    window.location.reload(false);
}

const DatagriDCoachExperiences = () => {

    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch("http://localhost/thrivetribe-server/public/api/coachexperiences")
            .then((data) => data.json())
            .then((data) => setTableData(data))
    }, [])
    console.log(tableData)

    return (
        <div style={{ height: 500, width: '100%' }}>
            <Button variant={"success"} href="coachCRUD/create">Létrehozás</Button>
            <Table striped bordered hover>
                <thead>
                <th>ID</th>
                <th>Skill</th>
                <th>School</th>
                <th>Experience</th>
                </thead>
                <tbody>
                {tableData && tableData.map(row => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.Skill}</td>
                        <td>{row.School}</td>
                        <td>{row.Experience}</td>
                        <td>
                            <Button variant={"warning"} href={`coachCRUD/${row.id}`}>Szerkesztés</Button>
                            <Button variant={"danger"} onClick={() => {
                                fetch(`http://localhost/thrivetribe-server/public/api/coachexperiences/delete/${row.id}`, {
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

export default DatagriDCoachExperiences