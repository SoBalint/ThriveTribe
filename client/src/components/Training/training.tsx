"use client"
import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Image, Button} from "react-bootstrap";
import './training.css'
import {useCookies} from "next-client-cookies";
import isValidView from "@/components/Access_Component/access";
import Link from "next/link";


type trainings = {
    id: number;
    Name: string;
    Author: string;
    UploadeDate: string;
}

function Training() {

    const [resultT, setResultT] = useState<trainings[]>([]);

    useEffect(() => {
        const api = async () => {
            const data = await fetch("http://localhost/thrivetribe-server/public/api/trainings", {
                method: "GET"
            });
            const jsonData = await data.json();
            setResultT(jsonData);
        };

        api();
    }, []);

    const cookies = useCookies(); // cookiek betöltése
    let vanjogod: boolean = false;
    if(cookies.get('user') != undefined) {
        const jsonObj = JSON.parse(cookies.get('user') as string); //a user kiolvasása, ha van
        //jogosultságellenőrzés
        if (isValidView("training", jsonObj.roles[0].id) == false) {
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
                    <Container className="trainingArticlesCont">
                        <Link href="/">
                            <button className={"backButtonDiet"}>
                                <i className='bx bx-chevron-left'></i>
                            </button>
                        </Link>
                        <Row className="trainingCard">
                            <Row className="topOfTrainingCard">
                                <Col>
                                    <Col lg={12} md={12} xd={12} className="">
                                        <h5 className="nameOfTraining">Edzéstervek</h5>
                                        <h3 className="authorOfTraining">Miért fontos a jó edzésterv?</h3>
                                    </Col>
                                </Col>
                                <Col lg={8} md={12} xs={12}>
                                    <Image src="/pictures/training.jpg" className="trainingPicture" alt="Edzes" title={"Edzés"}/>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <p className="textOfTraining">
                                        A jó edzésterv összeállítása kulcs fontosságú lehet céljaink élérésében.
                                        Nem mindegy hogyan állunk neki a mozgásnak, ha nem megfelelően tesszük, akár súlyos sérüléseket is szenvedhetünk.
                                        Ebben segít ez az oldal, ahol az edzők megtudják osztani edzésterveiket azokkal, akik szeretnének odafigyelni a
                                        mozgásra és megtalálják a számukra kedvező edzési fajtákat.
                                    </p>
                                </Col>
                            </Row>
                        </Row>

                                {/*    <Row className="trainingCard">
                                    <Row className="topOfTrainingCard">
                                        <Col>
                                            <Col lg={12} md={12} xd={12} className="">
                                                <h3 className="nameOfTraining">{valueT.Name}</h3>
                                                <h5 className="authorOfTraining">{valueT.Author}</h5>
                                            </Col>
                                        </Col>
                                        <Col lg={8} md={12} xs={12}>
                                            <Image src="/pictures/training.jpg" className="trainingPicture"
                                                   alt="Training Image"/>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col>
                                            <h5 className="dateOfTraining">{valueT.UploadeDate}</h5>
                                            <Button className="trainingNext" href={`/detailedtraining/${valueT.id}`}>Olvasd
                                                el</Button>
                                        </Col>
                                    </Row>
                                </Row>*/}
                                <Row className={"articlesMain"} >
                                    {resultT.map((valueT) => {
                                        return (
                                            <>
                                    <Col  className={"mt-3"} xs={12} md={6} lg={4}>
                                        <a className="buttonClick" href={`/detailedtraining/${valueT.id}`}>
                                        <div className="mainArt" id="mainArt">
                                            <div className="iconArticle" id="iconArticle"><i className='bx bx-dumbbell'></i>
                                            </div>
                                            <h1 className="articleTitle">{valueT.Name}</h1>
                                            <h2 className="authorName">{valueT.Author}</h2>
                                            <h2 className="articleDate">{valueT.UploadeDate}</h2>
                                        </div>
                                    </a>
                                    </Col>
                                            </>
                                        );
                                    })}
                                </Row>

                    </Container>
            );
        }
    }
}

export default Training;