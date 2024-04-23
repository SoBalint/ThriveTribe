"use client"
import React, { useState, useEffect } from 'react'
import {Button, Row, Table} from "react-bootstrap";

const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'Name', headerName: 'Name', width: 200 },
    { field: 'Text', headerName: 'Text', width: 200 },
    { field: 'Like', headerName: 'Like', width: 100 },
    { field: 'DisLike', headerName: 'DisLike', width: 100 },
    { field: 'Type', headerName: 'Type', width: 200 },
    { field: 'UploadeDate', headerName: 'UploadeDate', width: 200 },
    { field: 'Author', headerName: 'Author', width: 200 },
    { field: 'action', headerName: 'action', width: 200 }
]

function refreshPage() {
    window.location.reload(false);
}

const DatagriDTrainings = () => {

    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch("http://localhost/thrivetribe-server/public/api/trainings")
            .then((data) => data.json())
            .then((data) => setTableData(data))

    }, [])


    return (
        <Row>
        <React.Fragment>
        <div style={{ height: 500, width: '100%' }} className={"nem"}>
            <Button variant={"success"} href="trainingCRUD/create">Létrehozás</Button>
            <Table striped bordered hover>
                <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Text</th>
                <th>Like</th>
                <th>DisLike</th>
                <th>Type</th>
                <th>UploadeDate</th>
                <th>Author</th>
                </thead>
                <tbody>
                {tableData && tableData.map(row => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.Name}</td>
                        <td>{row.Text}</td>
                        <td>{row.Like}</td>
                        <td>{row.DisLike}</td>
                        <td>{row.Type}</td>
                        <td>{row.UploadeDate}</td>
                        <td>{row.Author}</td>
                        <td>
                            <Button variant={"warning"} href={`/trainingCRUD/${row.id}`}>Szerkesztés</Button>
                            <Button variant={"danger"} onClick={() => {
                                fetch(`http://localhost/thrivetribe-server/public/api/trainings/delete/${row.id}`, {
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
        </React.Fragment>
        </Row>
            )
}

export default DatagriDTrainings