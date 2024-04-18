"use client"

import {FormControlLabel, FormGroup, Switch} from "@mui/material";
import {Button, Col, Container} from "react-bootstrap";
import React from "react";
import axios from "axios";
import {useCookies} from "next-client-cookies";
import isValidView from "@/components/Access_Component/access";
import Link from "next/link";

export default function CreateCityCentrum() {
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
                        <h1>Város létrehozás</h1>
                        <form onSubmit={(event) => {
                            event.preventDefault();
                            const form = event.target;

                            axios.post("http://localhost/thrivetribe-server/public/api/citycentrums/create", {
                                PostCode: form.postcode.value,
                                Name: form.name.value,
                                latitude: Number(form.lat.value),
                                longitude: Number(form.long.value)
                            }).then((res) => {
                                alert("Sikeres felvitel!");
                            })
                        }}>
                            <label>Irányítószám</label>
                            <div className="custom-inputRegistration">
                                <input type="number" name="postcode"/>
                            </div>
                            <label>Város neve</label>
                            <div className="custom-inputRegistration">
                                <input type="name" name="name"/>
                            </div>
                            <label>Szélességi fok</label>
                            <div className="custom-inputRegistration">
                                <input type="lat" name="lat"/>
                            </div>
                            <label>Hosszúsági fok</label>
                            <div className="custom-inputRegistration">
                                <input type="long" name="long"/>
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