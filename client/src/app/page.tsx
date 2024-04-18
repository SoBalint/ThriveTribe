import {Container, Col, Row} from "react-bootstrap";
import React from "react";
import HomeCarousel from "@/components/Home/HomeCarousel";
import TopTraining from "@/components/toptraining/TopTraining";


export default function Home() {
    return (
        <Row className={"w-100 justify-content-center"}>
            <HomeCarousel />
            <div className="homePageRow">
                <div className="divider">
                    <div className="line"></div>
                </div>
            </div>
            <Container fluid>
                <TopTraining/>
            </Container>
        </Row>

    )

}
