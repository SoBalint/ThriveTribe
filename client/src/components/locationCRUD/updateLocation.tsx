"use client"
import axios from "axios";
import {Button, Col, Container} from "react-bootstrap";
import React from "react";
import {useCookies} from "next-client-cookies";
import isValidView from "@/components/Access_Component/access";
import Link from "next/link";

export default function UpdateLocation({
    id,
    latitude,
    longitude
                                       }:{
    id: number,
    latitude: number,
    longitude: number
}) {
    const cookies = useCookies(); // cookiek betöltése
    let vanjogod: boolean = false;
    if(cookies.get('user') != undefined) {
        const jsonObj = JSON.parse(cookies.get('user') as string); //a user kiolvasása, ha van
        //jogosultságellenőrzés
        if (isValidView("admin", jsonObj.roles[0].id) == false) {
            vanjogod = false;
        } else {
            vanjogod = true;
        }

        if (!vanjogod) {
            return (<Container>
                    <Link href="/">
                        <button className={"backButton"}>
                            <i className='bx bx-chevron-left'></i>
                        </button>
                    </Link>
                    <h1>Nincs jogod ehhez!!!</h1>
                </Container>
            );
        } else {
            return (
                <Col>
                    <Link href="/admin">
                        <button className={"backButton"}>
                            <i className='bx bx-chevron-left'></i>
                        </button>
                    </Link>
                <div className="testRegistration">
                    <div className="containerRegistration">
                        <h1>Koordináta szerkesztése</h1>
                        <form onSubmit={(event) => {
                            event.preventDefault();
                            const form = event.target;

                            axios.put(`http://localhost/thrivetribe-server/public/api/locations/update/${id}`, {
                                latitude: Number(form.latitude.value),
                                longitude: Number(form.longitude.value)
                            }).then((res) => {
                                alert("Sikeres felvitel!");
                            }).catch((res) => {
                                alert("Számot adj meg!");
                            })
                        }}>
                            <label>Szélességi fok</label>
                            <div className="custom-inputRegistration">
                                <input type="lat" name="latitude" defaultValue={latitude}/>
                            </div>
                            <label>Hosszúsági fok</label>
                            <div className="custom-inputRegistration">
                                <input type="long" name="longitude" defaultValue={longitude}/>
                            </div>
                            <Button className="registration" type="submit">Mentés</Button>
                        </form>
                    </div>
                </div>
                </Col>
            )
        }
    }
}