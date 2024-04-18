"use client"
import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {IoMdMail} from "react-icons/io";
import {FaMobileAlt} from "react-icons/fa";
import { useState, useEffect } from "react";
import {useCookies} from "next-client-cookies";
import isValidView from "@/components/Access_Component/access";
import Link from "next/link";

type users = {
    FirstName: string;
    LastName: string;
    Age: number;
    Email: string;
    Phone: string;
    CoachExperienceId: number;
};

type coachE = {
    id: number;
    Skill: string;
    School: string;
    Experience: string;
}

function CoachComponent() {

    const [resultU, setResultU] = useState<users[]>([]);

    useEffect(() => {
        const api = async () => {
            const data = await fetch("http://localhost/thrivetribe-server/public/api/users", {
                method: "GET"
            });
            const jsonData = await data.json();
            setResultU(jsonData);
        };

        api();
    }, []);

    const [resultCE, setResultCE] = useState<coachE[]>([]);

    useEffect(() => {
        const api = async () => {
            const data = await fetch("http://localhost/thrivetribe-server/public/api/coachexperiences", {
                method: "GET"
            });
            const jsonData = await data.json();
            setResultCE(jsonData);
        };

        api();
    }, []);

    const cookies = useCookies(); // cookiek betöltése
    let vanjogod: boolean = false;
    if(cookies.get('user') != undefined) {
        const jsonObj = JSON.parse(cookies.get('user') as string); //a user kiolvasása, ha van
        //jogosultságellenőrzés
        if (isValidView("coach", jsonObj.roles[0].id) == false) {
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
                <Container className="coachContainer">
                    <Link href="/">
                        <button className={"backButtonDiet"}>
                            <i className='bx bx-chevron-left'></i>
                        </button>
                    </Link>
                    <Row className="coachHeaderText">
                        <p className="personalTrainers">Személyi edzők</p>
                        <p className="coachQuestion">Miért a Thrive Tribe edzői?</p>
                        <p className="trainersText">Egy tapasztalt személyi tréner nem csupán egy egyszerű segítőtárs
                            lesz
                            számodra a fogyásban, izomépítésben, alakformálásban és az erőnlét növelésében. <br/>
                            Nálunk biztos lehetsz abban, hogy a figyelem, amit megérdemelsz, személyre szabott
                            edzéstervben és
                            mindennapi motivációban ölt testet, melyek kizárólag a te egyéni igényeidre és céljaidra
                            szabva
                            lesznek megtervezve. <br/>
                            Továbbá, ha a fitnesz céljaid megvalósításaira törekszel, biztos lehetsz a magas szintű,
                            hatékony
                            támogatásra!
                        </p>
                    </Row>
                    {resultU.map((valueU) => {
                        return (
                            <>
                                {resultCE.map((valueCE) => {
                                    return (
                                        valueU.CoachExperienceId == valueCE.id ?
                                            <>
                                                <Row className="coachCard">
                                                    <Col lg={6} md={6} xs={12}>
                                                        <Image src="/pictures/profilePic.png" title={"Személyi edző"} alt={"Személyi edző"} className="coachImage"/>
                                                    </Col>
                                                    <Col lg={6} md={6} xd={12} className="coachText">
                                                        <h3 className="coachName">{valueU.LastName} {valueU.FirstName} ({valueU.Age})</h3>

                                                        <h5 className="coachTitle">Végzettség</h5>
                                                        <ul className="coachInformation">
                                                            <li className="coachSchool">{valueCE.School}</li>
                                                        </ul>

                                                        <h5 className="coachTitle">Készség</h5>
                                                        <ul className="coachInformation">
                                                            <li className="coachSkill">{valueCE.Skill}</li>
                                                        </ul>
                                                        <h5 className="coachTitle">Tapasztalat</h5>
                                                        <ul className="coachInformation">
                                                            <li className="coachExperience">{valueCE.Experience}</li>
                                                        </ul>
                                                        <p className="coachContact"><IoMdMail
                                                            className={"coachIcons"}/> {valueU.Email}
                                                            | <FaMobileAlt className={"coachIcons"}/> {valueU.Phone}</p>

                                                    </Col>
                                                </Row>
                                            </>
                                            :
                                            <></>
                                    );
                                })}
                            </>
                        );
                    })}
                </Container>
            );
        }
    }
}

export default CoachComponent;