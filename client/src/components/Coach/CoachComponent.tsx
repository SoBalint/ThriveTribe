"use client"
import React, {useState} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {IoMdMail} from "react-icons/io";
import {FaMobileAlt} from "react-icons/fa";

function CoachComponent() {
    return (
        <Container className="coachContainer">
            <Row className="coachHeaderText">
                <p className="personalTrainers">Személyi edzők</p>
                <p className="coachQuestion">Miért a Thrive Tribe edzői?</p>
                <p className="trainersText">Egy tapasztalt személyi tréner nem csupán egy egyszerű segítőtárs lesz
                    számodra a fogyásban, izomépítésben, alakformálásban és az erőnlét növelésében. <br/>
                    Nálunk biztos lehetsz abban, hogy a figyelem, amit megérdemelsz, személyre szabott edzéstervben és
                    mindennapi motivációban ölt testet, melyek kizárólag a te egyéni igényeidre és céljaidra szabva
                    lesznek megtervezve. <br/>
                    Továbbá, ha a fitnesz céljaid megvalósításaira törekszel, biztos lehetsz a magas szintű, hatékony
                    támogatásra!
                </p>
            </Row>
            <Row className="coachCard">
                <Col lg={6} md={6} xs={12}>
                    <img src="/pictures/FarkasMalna.jpg" className="coachImage"/>
                </Col>
                <Col lg={6} md={6} xd={12} className="coachText">
                    <h3 className="coachName">Farkas Málna (28)</h3>

                    <h5 className="coachTitle">Végzettség</h5>
                    <ul className="coachInformation">
                        <li className="coachSchool">Szakos Egyetem Budapest - Rehabilitációs Szak</li>
                        <li className="coachSchool">Kis Kalaúz Győr - Aktív Mozgások Szak</li>
                        <li className="coachSchool">Sárvári Tamás Debrecen - Személyi Fitnesz Edző</li>
                    </ul>

                    <h5 className="coachTitle">Készség</h5>
                    <ul className="coachInformation">
                        <li className="coachSkill">Odaadás</li>
                        <li className="coachSkill">Együttműködés</li>
                        <li className="coachSkill">Munkásság</li>
                        <li className="coachSkill">Segítőkészség</li>
                    </ul>
                    <h5 className="coachTitle">Tapasztalat</h5>
                    <ul className="coachInformation">
                        <li className="coachExperience">4 év xy-ban</li>
                        <li className="coachExperience">1év xy-ban</li>
                        <li className="coachExperience">12 év xy-ban</li>
                    </ul>
                    <p className="coachContact"><IoMdMail className={"coachIcons"}/> vasarpad@thrivetribe.hu
                        | <FaMobileAlt className={"coachIcons"}/> +36407382145</p>

                </Col>
            </Row>
        </Container>
    );
}

export default CoachComponent;