"use client"
import React, {useEffect, useState} from 'react';
import {Container, Tab, Tabs, Row, Col, Image, Button} from "react-bootstrap";
import './Diet.css'
import {useCookies} from "next-client-cookies";
import isValidView from "@/components/Access_Component/access";
import Link from "next/link";
import Alkaline from "@/components/Diet/Alkaline";
import Husevo from "@/components/Diet/Husevo";
import Ketogen from "@/components/Diet/Ketogen";
import Mediterran from "@/components/Diet/Mediterran";
import Paleoit from "@/components/Diet/Paleoit";
import Vegan from "@/components/Diet/Vegan";

function DietTabs() {
    const cookies = useCookies(); // cookiek betöltése
    let vanjogod: boolean = false;

    if(cookies.get('user') != undefined) {
        const jsonObj = JSON.parse(cookies.get('user') as string); //a user kiolvasása, ha van
        //jogosultságellenőrzés
        if (isValidView("diet", jsonObj.roles[0].id) == false) {
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
                <Container>
                    <Row>

                        <Col className={"DietInformation"} lg={6} md={8} xs={12}>
                            <Link href="/">
                                <button className={"backButtonAdminDiet"}>
                                    <i className='bx bx-chevron-left'></i>
                                </button>
                            </Link>
                            <h1 className="Etrend">Étrend</h1>
                            <p>Az emberek gyakran „diétaként” egy specifikus fogyókúrás tervre gondolnak, de a diéta
                                egyszerűen
                                az ember
                                által elfogyasztott ételek típusait és mennyiségét jelenti.
                            </p>
                            <p>Bár sok információ áll rendelkezésre, így az egészséges étrend kialakítása nyomasztónak
                                tűnhet,
                                azonban
                                néhány egyszerű változtatás növelheti az étrend tápláló értékét és csökkentheti a
                                sokféle
                                egészségügyi
                                probléma kockázatát.
                            </p>
                        </Col>
                    </Row>

                    <Row className="dietPhotos">
                        <Col>
                            <Image src="/pictures/paprika.jpg" alt={"Az idő fontossága"} title={"Az idő fontossága"} className="w-100" rounded/>
                        </Col>

                        <Col>
                            <Image src="/pictures/hus.jpg" alt={"Hús fontossága"} title={"Hús fontossága"} className="w-100" rounded/>
                        </Col>

                        <Col>
                            <Image src="/pictures/korte.jpg" alt={"Kiegyensúlyozott diéta"} title={"Kiegyensúlyozott diéta"} className="w-100" rounded/>
                        </Col>
                    </Row>


                    <Row className="Diets">

                        <Tabs
                            defaultActiveKey="profile"
                            id="fill-tab-example"
                            justify

                        >

                            {/*1. lépés lekérni a diet táblát*/}
                            {/*2. lépés for ciklusba az összes diet*/}
                            {/*3. lépés a for cikluson belül lekérni az adott diétához tartozó foodokat*/}
                            {/*4. adatok kiirása*/}
                            {/**/}
                            <Tab className="dietNames" eventKey="alkaline" title="Alkaline">
                                <Image src="/pictures/AlkalineFigma.png" alt={"Alkaline"} title={"Alkaline"} className="DietTabPhotos"/>
                                <Alkaline/>
                            </Tab>


                            <Tab eventKey="husevo" title="Húsevő">
                                <Image src="/pictures/HusevoFigma.png" alt={"Húsevő"} title={"Húsevő"} className="DietTabPhotos"/>
                                <Husevo/>
                            </Tab>


                            <Tab eventKey="ketogen" title="Ketogén">
                                <Image src="/pictures/KetoFigma.png" alt={"Ketogén"} title={"Ketogén"} className="DietTabPhotos"/>
                                <Ketogen/>
                            </Tab>


                            <Tab eventKey="mediterran" title="Mediterrán">
                                <Image src="/pictures/MediterranFigma.png" alt={"Mediterrán"} title={"Mediterrán"} className="DietTabPhotos"/>
                                <Mediterran/>
                            </Tab>


                            <Tab eventKey="paleoit" title="Paleoit">
                                <Image src="/pictures/PaleoitFigma.png" alt={"Paleoit"} title={"Paleoit"} className="DietTabPhotos"/>
                                <Paleoit/>
                            </Tab>


                            <Tab eventKey="vegan" title="Vegán">
                                <Image src="/pictures/VeganFigma.png" alt={"Vegán"} title={"Vegán"} className="DietTabPhotos"/>
                                <Vegan/>
                            </Tab>
                        </Tabs>

                    </Row>

                </Container>
            );
        }
    }
}

export default DietTabs;
