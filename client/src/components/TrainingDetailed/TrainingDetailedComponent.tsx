"use client"

import {Col, Container, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa6";
import {useCookies} from "next-client-cookies";
import isValidView from "@/components/Access_Component/access";
import Link from "next/link";
import axios from "axios";

type trainings = {
    id: number;
    Name: string;
    Text: string;
    Like: number;
    DisLike: number;
    Type: string;
    Author: string;
    UploadeDate: string;
}

function DetailedTrainingComponent({ id }: { id: number } ) {

    const [resultTD, setResultTD] = useState<trainings[]>([]);

    useEffect(() => {
        const api = async () => {
            const data = await fetch(`http://localhost/thrivetribe-server/public/api/trainings/getTraining/${id}`, {
                method: "GET"
            });
            const jsonData = await data.json();
            //console.log(jsonData)
            setResultTD(jsonData);
        };

        api();
    }, []);

    let plus = resultTD.Like;
    let minus = resultTD.DisLike;
    const cookies = useCookies(); // cookiek betöltése
    let vanjogod: boolean = false;
    if(cookies.get('user') != undefined) {
        const jsonObj = JSON.parse(cookies.get('user') as string); //a user kiolvasása, ha van
        //jogosultságellenőrzés
        if (isValidView("detailedtraining", jsonObj.roles[0].id) == false) {
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
                <Container className="trainingContainer">
                    <Link href="/training">
                        <button className={"backButtonDiet"}>
                            <i className='bx bx-chevron-left'></i>
                        </button>
                    </Link>
                            <>
                                <Row className="trainingHeader">
                                    <p className="trainingMain">Edzés</p>
                                    <Col className="titleDivider"></Col>
                                    <p className="trainingName">{resultTD.Type}</p>
                                    <p className="trainingTitle">{resultTD.Name}</p>
                                </Row>

                                <img className="trainingImage" src="/pictures/stretchingDetailed.jpg"/>
                                <Row>
                                    <Col className="trainDescriptionCol" md={{span: 6, offset: 3}}
                                         xs={{span: 10, offset: 1}}>


                                        <p className="trainingDescription">{resultTD.Text}</p>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col md={{span: 2, offset: 3}} xs={{span: 3, offset: 1}} className={" d-flex justify-center align-items-center"}>
                                        {resultTD.Like}<BiLike className="trainingLike" onClick={(event) => {
                                            //let D4te: Date = new Date(resultTD.Uploadedate);
                                            plus = resultTD.Like + 1;
                                            console.log(resultTD.UploadeDate)
                                            axios.put(`http://localhost/thrivetribe-server/public/api/trainings/update/${id}`, {
                                            Name: resultTD.Name,
                                            Text: resultTD.Text,
                                            Like: plus,
                                            DisLike: minus,
                                            Type: resultTD.Type,
                                            Author: resultTD.Author,
                                            UploadeDate: resultTD.UploadeDate
                                        }).then((res) => {
                                        })
                                    }}/>
                                        {resultTD.DisLike}<BiDislike className="trainingDislike" onClick={(event) => {
                                        //let D4te: Date = new Date(resultTD.Uploadedate);
                                            minus = resultTD.DisLike + 1;
                                        axios.put(`http://localhost/thrivetribe-server/public/api/trainings/update/${id}`, {
                                            Name: resultTD.Name,
                                            Text: resultTD.Text,
                                            Like: plus,
                                            DisLike: minus,
                                            Type: resultTD.Type,
                                            Author: resultTD.Author,
                                            UploadeDate: resultTD.UploadeDate
                                        }).then((res) => {
                                        })
                                    }}/>
                                    </Col>
                                    <Col md={{span: 2, offset: 3}} xs={{span: 6, offset: 1}}>
                                        <p className="trainingAuthor">- {resultTD.Author}</p>
                                        <p className="trainingDate">{resultTD.UploadeDate}</p>

                                    </Col>
                                </Row></>
                </Container>

            );
        }
    }
}

export default DetailedTrainingComponent;