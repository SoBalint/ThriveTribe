"use client"

import {FormControlLabel, FormGroup, Switch} from "@mui/material";
import {Button, Col, Container} from "react-bootstrap";
import React, {useState} from "react";
import axios from "axios";
import {useCookies} from "next-client-cookies";
import isValidView from "@/components/Access_Component/access";
import Link from "next/link";

export default function CreateUser() {
    const [checked, setChecked] = useState(false)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }
    const role = checked;
    let szam = 0;
    role == true ? szam = 5 : szam = 4

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
                        <h1>Felhasználó létrehozás</h1>
                        <form onSubmit={(event) => {
                            event.preventDefault();
                            const form = event.target;
                            let ellenorzott = true;
                            const regex = /^[\+]?[(]?[36]{2}[)]?[0-9]{3}?[0-9]{6,6}$/;
                            let match = regex.test(form.phone.value);
                            if(match) {} else {alert("Nem megfelelő a telefonszám!")}
                            if (form.age.value < 14 && form.age.value > 100){alert("Nem megfelelő a kor!"); ellenorzott= false;}
                            if (form.height.value < 130 && form.height.value > 230){alert("Nem megfelelő a magasság!"); ellenorzott= false;}
                            if (form.weight.value < 40 && form.weight.value > 150){alert("Nem megfelelő a súly!"); ellenorzott= false;}
                            if(ellenorzott || match) {
                                axios.post("http://localhost/thrivetribe-server/public/api/users/create", {
                                    UserName: form.username.value,
                                    Password: form.password.value,
                                    Email: form.email.value,
                                    FirstName: form.firstname.value,
                                    LastName: form.lastname.value,
                                    Height: form.height.value,
                                    Weight: form.weight.value,
                                    Age: form.age.value,
                                    Phone: form.phone.value,
                                    roles: szam
                                }).then((res) => {
                                    alert("Sikeres felvitel!");
                                }).catch((res) => {
                                    alert("Már van ilyen felhasználónév!");
                                })
                            }else{}
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
                            <label>Magasság</label>
                            <div className="custom-inputRegistration">
                                <input type="number" name="height"/>
                            </div>
                            <label>Testsúly</label>
                            <div className="custom-inputRegistration">
                                <input type="number" name="weight"/>
                            </div>
                            <label>Életkor</label>
                            <div className="custom-inputRegistration">
                                <input type="number" name="age"/>
                            </div>
                            <label>Telefonszám/Mobilszám</label>
                            <div className="custom-inputRegistration">
                                <input type="phone" name="phone"/>
                            </div>
                            <FormGroup>
                                <FormControlLabel label="Edző profil?"
                                                  control={<Switch checked={checked} onChange={handleChange}/>}/>
                            </FormGroup>
                            <Button className="registration" type="submit">Mentés</Button>
                        </form>
                    </div>
                </div>
                </Col>
            )
        }
    }
}