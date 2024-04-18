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
import {useCookies} from "next-client-cookies";
import isValidView from "@/components/Access_Component/access";
import React from "react"
import Link from "next/link";

function AdminComponent() {
    const cookies = useCookies(); // cookiek betöltése
    let vanjogod: boolean = false;
    if(cookies.get('user') != undefined){
        const jsonObj = JSON.parse(cookies.get('user') as string); //a user kiolvasása, ha van
        //jogosultságellenőrzés
        if(isValidView("admin",jsonObj.roles[0].id) == false){
            vanjogod = false;
        }else{
            vanjogod = true;
        }

        if(!vanjogod){
            return(<Container>
                    <h1>Nincs jogod ehhez!!!</h1>
                </Container>
            );
        }else{

            return(

                <Container>
                    <Link href="/">
                        <button className={"backButtonAdmin"}>
                            <i className='bx bx-chevron-left'></i>
                        </button>
                    </Link>
                <React.Fragment>
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
                        <Tab eventKey="MessageBoard" disabled title="Üzenőfal">
                            <DatagriDMessageBoards/>
                        </Tab>
                    </Tabs>
                    <br/>
                </React.Fragment>
                </Container>
            );
        }
    }
}

export default AdminComponent;


