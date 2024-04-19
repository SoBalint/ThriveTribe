"use client"
import {Button, Col, Container} from "react-bootstrap";
import Link from "next/link";
import React from "react";
import axios from "axios";
import {useCookies} from "next-client-cookies";
import isValidView from "@/components/Access_Component/access";

export default function PasswordChange() {
    const cookies = useCookies(); // cookiek betöltése
    let vanjogod: boolean = false;
    if(cookies.get('user') != undefined) {
        const jsonObj = JSON.parse(cookies.get('user') as string); //a user kiolvasása, ha van
        //jogosultságellenőrzés
        if (isValidView("passwordchange", jsonObj.roles[0].id) == false) {
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
                    <Link href="/">
                        <button className={"backButton"}>
                            <i className='bx bx-chevron-left'></i>
                        </button>
                    </Link>
                    <div className="testRegistration">
                        <div className="containerRegistration">
                            <h1>Jelszó módosítás!</h1>
                            <form onSubmit={(event) => {
                                event.preventDefault();
                                const form = event.target;

                                axios.put(`http://localhost/thrivetribe-server/public/api/users/PasswordChange/${jsonObj.id}`, {
                                    Password: form.oldPassword.value,
                                    newPassword1: form.newPassword1.value,
                                    newPassword2: form.newPassword2.value
                                }).then((res) => {
                                    alert("Sikeres felvitel!");
                                }).catch(function (error) {
                                    if (error.response) {
                                        alert(error.response.data);
                                        //console.log(error.response.data);
                                        //console.log(error.response.status);
                                        //console.log(error.response.headers);
                                    }
                                })
                            }}>
                                <label>Régi jelszó</label>
                                <div className="custom-inputRegistration">
                                    <input type="password" name="oldPassword"/>
                                </div>
                                <label>Új jelszó</label>
                                <div className="custom-inputRegistration">
                                    <input type="password" name="newPassword1"/>
                                </div>
                                <label>Új jelszó ismét</label>
                                <div className="custom-inputRegistration">
                                    <input type="password" name="newPassword2"/>
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