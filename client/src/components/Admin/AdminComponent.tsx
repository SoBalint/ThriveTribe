"use client"
import {Button, Col, Container, Nav, Row, Tab, Tabs} from "react-bootstrap";
import DatagriDUsers from "@/components/DataGrid/DatagriDUsers";
import DatagriDMessageBoards from "@/components/DataGrid/DatagriDMessageBoards";
import DatagriDMaps from "@/components/DataGrid/DatagriDMaps";
import DatagriDRoles from "@/components/DataGrid/DatagriDRoles";
import DatagriDTrainings from "@/components/DataGrid/DatagriDTrainings";
import DatagriDLocations from "@/components/DataGrid/DatagriDLocations";
import DatagriDFoods from "@/components/DataGrid/DatagriDFoods";
import DatagriDDiets from "@/components/DataGrid/DatagriDDiets";
import DatagriDCoachExperiences from "@/components/DataGrid/DatagriDCoachExperiences";
import DatagriDCityCentrums from "@/components/DataGrid/DatagriDCityCentrums";

function AdminComponent() {
    return(
        <Container>
        <Tabs
        >
            <Tab eventKey="Users" title="Felhasználók">
                <DatagriDUsers/>
            </Tab>
            <Tab eventKey="Roles" title="Jogok">
                <DatagriDRoles/>
            </Tab>
            <Tab eventKey="Trainings" title="Edzéstervek">
                <DatagriDTrainings/>
            </Tab>
            <Tab eventKey="Maps" title="Térkép">
                <DatagriDMaps/>
            </Tab>
            <Tab eventKey="Locations" title="Fokok">
                <DatagriDLocations/>
            </Tab>
            <Tab eventKey="Foods" title="Ételek">
                <DatagriDFoods/>
            </Tab>
            <Tab eventKey="Diets" title="Étrendek">
                <DatagriDDiets/>
            </Tab>
            <Tab eventKey="CoachExperiences" title="Edzők">
                <DatagriDCoachExperiences/>
            </Tab>
            <Tab eventKey="CityCentrums" title="Városok">
                <DatagriDCityCentrums/>
            </Tab>
        </Tabs>
            <br/>
            <div className="text-center">
            <Button variant="outline-success">Létrehozás</Button>{' '}
            <Button variant="outline-warning">Frissítés</Button>{' '}
            <Button variant="outline-danger">Törlés</Button>{' '}
            </div>
            <br/>
        </Container>

);
}

export default AdminComponent;