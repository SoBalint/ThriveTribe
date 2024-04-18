"use client"
import axios from "axios";
import {FormControlLabel, FormGroup, Switch} from "@mui/material";
import {Button, Col, Container} from "react-bootstrap";
import React from "react";
import {useCookies} from "next-client-cookies";
import isValidView from "@/components/Access_Component/access";
import Link from "next/link";

export default function CreateCoach() {
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
                        <h1>Edző létrehozás</h1>
                        <form onSubmit={(event) => {
                            event.preventDefault();
                            const form = event.target;

                            axios.post("http://localhost/thrivetribe-server/public/api/coachexperiences/create", {
                                Skill: form.skill.value,
                                School: form.school.value,
                                Experience: form.experience.value
                            }).then((res) => {
                                alert("Sikeres felvitel!");
                            })
                        }}>
                            <label>Készség</label>
                            <div className="custom-inputRegistration">
                                <textarea name="skill" rows={4} cols={40}/>
                            </div>
                            <label>Iskola</label>
                            <div className="custom-inputRegistration">
                                <textarea name="school" rows={4} cols={40}/>
                            </div>
                            <label>Tapasztalat</label>
                            <div className="custom-inputRegistration">
                                <textarea name="experience" rows={4} cols={40}/>
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