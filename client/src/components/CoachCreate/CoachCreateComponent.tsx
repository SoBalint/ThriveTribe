"use client";
import React from "react";
import {Button, Col, Container} from "react-bootstrap";
import {useCookies} from "next-client-cookies";
import isValidView from "@/components/Access_Component/access";
import axios from "axios";
import Link from "next/link";

function CoachC() {
    const cookies = useCookies(); // cookiek betöltése
    let vanjogod: boolean = false;
    if(cookies.get('user') != undefined) {
        const jsonObj = JSON.parse(cookies.get('user') as string); //a user kiolvasása, ha van
        //jogosultságellenőrzés
        //ID lekérdezése --- jsonObj.id
        if (isValidView("coachcreate", jsonObj.roles[0].id) == false) {
            vanjogod = false;
        } else {
            vanjogod = true;
        }
        let vanM = false;
        if(jsonObj.CoachExperienceId != null) {
            vanM = true;
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
                <Container>
                    <Link href="/">
                        <button className={"backButtonAdmin"}>
                            <i className='bx bx-chevron-left'></i>
                        </button>
                    </Link>
                    <Col className="coachCont" lg={12} md={12} xs={12}>
                        <div className="testCoachCreate">
                        <div className="coachCreate">
                            <h1>Hozd létre edző profilodat</h1>
                            <form onSubmit={(event) => {
                                event.preventDefault();
                                const form = event.target;
                                let coachId = 0;

                                axios.post("http://localhost/thrivetribe-server/public/api/coachexperiences/create", {
                                    Skill: form.skill.value,
                                    School: form.school.value,
                                    Experience: form.experience.value
                                }).then((res) => {
                                    coachId = res.data.last_insert_id;
                                    let ellenorzott = true;
                                    if (form.age.value < 14 && form.age.value > 100){alert("Nem megfelelő a kor!"); ellenorzott= false;}
                                    const regex = /^[\+]?[(]?[36]{2}[)]?[0-9]{3}?[0-9]{6,6}$/;
                                    let match = regex.test(form.phone.value);
                                    if(match) {} else {alert("Nem megfelelő a telefonszám!")}
                                    if(ellenorzott){
                                    axios.put(`http://localhost/thrivetribe-server/public/api/users/update/${jsonObj.id}`, {
                                        CoachExperienceId: coachId,
                                        UserName: jsonObj.UserName,
                                        Email: jsonObj.Email,
                                        FirstName: jsonObj.FirstName,
                                        LastName: jsonObj.LastName,
                                        Age: form.age.value,
                                        Phone: form.phone.value
                                    })
                                    alert("Sikeres felvitel!");
                                    } else {}
                                })
                            }}>
                                {
                                    vanM ? <>Már van profilod!!!</> : <>
                                <label className="createSchool">Végzettség</label>
                                <div className="custom-inputCreateCoach">
                                    <textarea name="school" rows={4} cols={40}/>
                                </div>
                                <label className="createSkill">Készség</label>
                                <div className="custom-inputCreateCoach">
                                    <textarea name="skill" rows={4} cols={40}/>
                                </div>
                                <label className="createExperience">Tapasztalat</label>
                                <div className="custom-inputCreateCoach">
                                    <textarea name="experience" rows={4} cols={40}/>
                                </div>
                                <div className="divider">
                                    <div className="line"></div>
                                </div>
                                <label className="createPhone">Telefonszám/Mobilszám</label>
                                <div className="custom-inputCreateCoach">
                                    <input type="text" name="phone"/>
                                </div>
                                <label className="createAge">Életkor</label>
                                <div className="custom-inputCreateCoach">
                                    <input type="number" name="age" autoComplete="off"/>
                                </div>
                                <Button className="createSaveBtn" type="submit">Mentés</Button>
                                    </>
                                }
                                </form>
                        </div>
                        </div>
                    </Col>
                </Container>
            );
        }
    }
}

export default CoachC;