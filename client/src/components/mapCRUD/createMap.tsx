"use client"
import axios from "axios";
import {Button, Col, Container} from "react-bootstrap";
import React from "react";
import {useCookies} from "next-client-cookies";
import isValidView from "@/components/Access_Component/access";
import Link from "next/link";

export default function CreateMap() {
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
                        <h1>Gym létrehozás</h1>
                        <form onSubmit={(event) => {
                            event.preventDefault();
                            const form = event.target;

                            axios.post("http://localhost/thrivetribe-server/public/api/maps/create", {
                                Address: form.address.value,
                                GymName: form.gymname.value,
                                OpenHour: form.openhour.value,
                                CordinationId: form.cordinationid.value
                            }).then((res) => {
                                alert("Sikeres felvitel!");
                            })
                        }}>
                            <label>Cím</label>
                            <div className="custom-inputRegistration">
                                <input type="address" name="address"/>
                            </div>
                            <label>Edzőterem neve</label>
                            <div className="custom-inputRegistration">
                                <input type="gymname" name="gymname"/>
                            </div>
                            <label>Nyitvatartás</label>
                            <div className="custom-inputRegistration">
                                <textarea name="openhour" rows={4} cols={40}/>
                            </div>
                            <label>Koordináta id</label>
                            <div className="custom-inputRegistration">
                                <input type="number" name="cordinationid"/>
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