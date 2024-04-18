"use client"
import {FormControlLabel, FormGroup, Switch} from "@mui/material";
import Link from "next/link";
import React, {ChangeEvent, useState} from "react";
import {Button, Col, Form} from "react-bootstrap";
import axios from "axios";

function RegistrationComponent() {
    const [checked, setChecked] = useState(false)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }
    const role = checked;
    let szam = 0;
    role == true ? szam = 5 : szam = 4


    return(
        <Col>
            <Link href="/">
                <button className={"backButton"}>
                    <i className='bx bx-chevron-left'></i>
                </button>
            </Link>
        <div className="testRegistration">
            <div className="containerRegistration">
                <h1>Regisztráció</h1>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    const form = event.target;

                    axios.post("http://localhost/thrivetribe-server/public/api/users/create", {
                        UserName: form.username.value,
                        Password: form.password.value,
                        Email: form.email.value,
                        FirstName: form.firstname.value,
                        LastName: form.lastname.value,
                        roles: szam
                    }).then((res) => {
                        alert("Sikeres felvitel!");
                    })
                }}>
                    <label>Vezetéknév</label>
                    <div className="custom-inputRegistration">
                        <input type="lastname" name="lastname"/>
                    </div>
                    <label>Keresztnév</label>
                    <div className="custom-inputRegistration">
                        <input type="firstname" name="firstname"/>
                    </div>
                    <label>Felhasználónév</label>
                    <div className="custom-inputRegistration">
                        <input type="username" name="username" autoComplete="off"/>
                    </div>
                    <label>Email</label>
                    <div className="custom-inputRegistration">
                        <input type="email" name="email" autoComplete="off"/>
                    </div>
                    <label>Jelszó</label>
                    <div className="custom-inputRegistration">
                        <input type="password" name="password"/>
                    </div>
                    <FormGroup>
                        <FormControlLabel label="Edző vagy?" control={<Switch checked={checked} onChange={handleChange}/>}/>
                    </FormGroup>
                    <Button className="registration" type="submit">Regisztráció</Button>
                    <div className="divider">
                        <div className="line"></div>
                    </div>
                    <label className="yesAccount">Már van fiókod?</label>
                    <Link href="/login">
                        <Button className="login">Belépés</Button>
                    </Link>
                </form>
            </div>
        </div>
        </Col>
    );
}

export default RegistrationComponent;