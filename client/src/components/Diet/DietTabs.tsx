"use client"
import React from 'react';
import {Container, Tab, Tabs, Row, Col, Image} from "react-bootstrap";
import "./diet.css"

function DietTabs() {
    return (

        <Container>
            <br/>
            <Row>
                <Col className={"col-6"}>
                    <h1 className="Etrend">Étrend</h1>
                    <p>Az emberek gyakran „diétaként” egy specifikus fogyókúrás tervre gondolnak, de a diéta egyszerűen
                        az ember
                        által elfogyasztott ételek típusait és mennyiségét jelenti.
                    </p>
                    <p>Bár sok információ áll rendelkezésre, így az egészséges étrend kialakítása nyomasztónak tűnhet,
                        azonban
                        néhány egyszerű változtatás növelheti az étrend tápláló értékét és csökkentheti a sokféle
                        egészségügyi
                        probléma kockázatát.
                    </p>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Image src="/pictures/paprika.jpg" alt={"edzes2"} className="w-100" />
                </Col>

                <Col>
                    <Image src="/pictures/hus.jpg" alt={"edzes2"} className="w-100"/>
                </Col>

                <Col>
                    <Image src="/pictures/korte.jpg" alt={"edzes2"} className="w-100"/>
                </Col>
            </Row>
            <br/>
            <Row>
                <Tabs
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    justify
                >
                    <Tab eventKey="alkaline" title="Alkaline">
                        <Image src="/pictures/AlkalineFigma.png" alt={"alkaline"} className="w-100"/>
                    </Tab>

                    <Tab eventKey="husevo" title="Húsevő">
                        <Image src="/pictures/HusevoFigma.png" alt={"husevo"} className="w-100"/>

                    </Tab>

                    <Tab eventKey="ketogen" title="Ketogén">
                        <Image src="/pictures/KetoFigma.png" alt={"ketogen"} className="w-100"/>
                    </Tab>

                    <Tab eventKey="mediterran" title="Mediterrán">
                        <Image src="/pictures/MediterranFigma.png" alt={"mediterran"} className="w-100"/>
                    </Tab>

                    <Tab eventKey="paleoit" title="Paleoit">
                        <Image src="/pictures/PaleoitFigma.png" alt={"paleoit"} className="w-100"/>
                    </Tab>

                    <Tab eventKey="vegan" title="Vegán">
                        <Image src="/pictures/VeganFigma.png" alt={"vegan"} className="w-100"/>
                    </Tab>
                </Tabs>
            </Row>
        </Container>
);
}

export default DietTabs;
