"use client"

import {Button, Col, Container} from "react-bootstrap";
import React, {useState} from "react";
import axios from "axios";
import {useCookies} from "next-client-cookies";
import isValidView from "@/components/Access_Component/access";
import Link from "next/link";

export default function UpdateUser({
    id, username,
        email,
        firstname,
        lastname,
        height,
        weight,
        age,
        phone,
        szam,
        coachE
} : {
  id: number,
  username: string,
  email: string,
  firstname: string,
  lastname: string,
  height: string,
  weight: string,
  age: number,
  phone: string,
  szam: number,
    coachE: number
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
                        <h1>Felhasználó szerkesztés</h1>
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
                            if(ellenorzott) {
                                axios.put(`http://localhost/thrivetribe-server/public/api/users/update/${id}`, {
                                    UserName: form.username.value,
                                    Email: form.email.value,
                                    FirstName: form.firstname.value,
                                    LastName: form.lastname.value,
                                    Height: form.height.value,
                                    Weight: form.weight.value,
                                    Age: form.age.value,
                                    Phone: form.phone.value,
                                    roles: szam,
                                    CoachExperienceId: coachE
                                }).then((res) => {
                                    alert("Sikeres frissítés!");
                                }).catch((res) => {
                                    alert("Már van ilyen felhasználónév!");
                                })
                            } else {}
                        }}>
                            <label>Vezetéknév</label>
                            <div className="custom-inputRegistration">
                                <input type="lastname" name="lastname" defaultValue={lastname}/>
                            </div>
                            <label>Keresztnév</label>
                            <div className="custom-inputRegistration">
                                <input type="firstname" name="firstname" defaultValue={firstname}/>
                            </div>
                            <label>Felhasználónév</label>
                            <div className="custom-inputRegistration">
                                <input type="username" name="username" autoComplete="off" defaultValue={username}/>
                            </div>
                            <label>Email</label>
                            <div className="custom-inputRegistration">
                                <input type="email" name="email" autoComplete="off" defaultValue={email}/>
                            </div>
                            <label>Magasság</label>
                            <div className="custom-inputRegistration">
                                <input type="number" name="height" defaultValue={height}/>
                            </div>
                            <label>Testsúly</label>
                            <div className="custom-inputRegistration">
                                <input type="number" name="weight" defaultValue={weight}/>
                            </div>
                            <label>Életkor</label>
                            <div className="custom-inputRegistration">
                                <input type="number" name="age" defaultValue={age}/>
                            </div>
                            <label>Telefonszám/Mobilszám</label>
                            <div className="custom-inputRegistration">
                                <input type="phone" name="phone" defaultValue={phone}/>
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