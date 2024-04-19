"use client"
import {Button, Col, Container} from "react-bootstrap";
import React from "react";
import {useCookies} from "next-client-cookies";
import isValidView from "@/components/Access_Component/access";
import axios from "axios";
import Link from "next/link";

function DataModification() {
    const cookies = useCookies(); // cookiek betöltése
    let vanjogod: boolean = false;
    if(cookies.get('user') != undefined) {
        const jsonObj = JSON.parse(cookies.get('user') as string); //a user kiolvasása, ha van
        //jogosultságellenőrzés
        if (isValidView("datamodification", jsonObj.roles[0].id) == false) {
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
                    <Col xs={10} md={12} lg={12}>
                        <Link href="/">
                            <button className={"backButton"}>
                                <i className='bx bx-chevron-left'></i>
                            </button>
                        </Link>
                        <div className="testDataModification">
                            <div className="containerDataModification">
                                <h1>Adatmódosítás</h1>
                                <form onSubmit={(event) => {
                                    event.preventDefault();
                                    const form = event.target;
                                    let ellenorzott = true;
                                    if (form.age.value < 14 && form.age.value > 100){alert("Nem megfelelő a kor!"); ellenorzott= false;}
                                    if (form.height.value < 130 && form.height.value > 230){alert("Nem megfelelő a magasság!"); ellenorzott= false;}
                                    if (form.weight.value < 40 && form.weight.value > 150){alert("Nem megfelelő a súly!"); ellenorzott= false;}
                                    if(ellenorzott) {
                                        axios.put(`http://localhost/thrivetribe-server/public/api/users/update/${jsonObj.id}`, {
                                            UserName: jsonObj.UserName,
                                            LastName: form.lastname.value,
                                            FirstName: form.firstname.value,
                                            Email: form.email.value,
                                            Age: form.age.value,
                                            Weight: form.weight.value,
                                            Height: form.height.value
                                        }).then((res) => {
                                            alert("Sikeres felvitel!");
                                        })
                                    } else {}
                                }}>
                                    <label className="lastName">Vezetéknév</label>
                                    <div className="custom-inputDataModification">
                                        <input
                                            type="text"
                                            name="lastname"
                                            autoComplete="off"
                                            defaultValue={jsonObj.LastName}
                                        />
                                    </div>
                                    <label className="firstName">Keresztnév</label>
                                    <div className="custom-inputDataModification">
                                        <input
                                            type="text"
                                            name="firstname"
                                            autoComplete="off"
                                            defaultValue={jsonObj.FirstName}
                                        />
                                    </div>
                                    <label className="email">Email</label>
                                    <div className="custom-inputDataModification">
                                        <input
                                            type="text"
                                            name="email"
                                            autoComplete="off"
                                            defaultValue={jsonObj.Email}
                                        />
                                    </div>
                                    <hr/>
                                    <label className="age">Életkor</label>
                                    <div className="custom-inputDataModification">
                                        <input
                                            type="text"
                                            name="age"
                                            autoComplete="off"
                                            defaultValue={jsonObj.Age}
                                            min="14"
                                            max="100"
                                        />
                                    </div>
                                    <label className="weight">Súly <sub>(kg)</sub></label>
                                    <div className="custom-inputDataModification">
                                        <input
                                            type="text"
                                            name="weight"
                                            autoComplete="off"
                                            defaultValue={jsonObj.Weight}
                                        />
                                    </div>
                                    <label className="height">Magasság <sub>(cm)</sub></label>
                                    <div className="custom-inputDataModification">
                                        <input
                                            type="text"
                                            name="height"
                                            autoComplete="off"
                                            defaultValue={jsonObj.Height}
                                        />
                                    </div>
                                    <Link href="/passwordchange">Jelszó módosítás!</Link>
                                    <Button className="dataChangeSave" type="submit">Mentés</Button>
                                </form>
                            </div>
                        </div>
                    </Col>
            );
        }
    }
}

export default DataModification;