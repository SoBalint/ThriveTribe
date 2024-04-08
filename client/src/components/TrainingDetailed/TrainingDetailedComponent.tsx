"use client"

import {Col, Container, Row} from "react-bootstrap";
import React from "react";

function DetailedTrainingComponent() {
    return (
        <Container className="trainingContainer">

            <Row className="trainingHeader">
                <p className="trainingTitle">Edzés</p>
                <Col className="titleDivider"></Col>
                <p className="">Edzés megnevezése</p>
                <p>Edzés címe</p>
            </Row>
                <img className="trainingImage" src="/pictures/Stretching.jpg"/>
            <Row>
                <p>Leírás</p>
                <p>Dátum</p>
                <p>Szerző</p>
            </Row>
        </Container>

    );
}

export default DetailedTrainingComponent;