import {Container, Col, Row} from "react-bootstrap";
import React from "react";
import HomeCarousel from "@/components/Home/HomeCarousel";


export default function Home() {
    return (
        <Row className={"w-100 justify-content-center"}>
            <HomeCarousel />

            <div className="separatorLine"></div>
            <Container fluid>

                <Col className="articles px-2" id="articles">
                    <h5>Edzéstervek (TOP 4)</h5>
                    <Row className={"articlesMain"}>
                        <Col xs={12} md={6} lg={3} className={"mt-3"}>
                            <div className="mainArt" id="mainArt">
                                <div className="iconArticle" id="iconArticle">
                                    <i className='bx bx-dumbbell'></i></div>
                                <h4>Workouts 1</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta,
                                    lectus dictum fermentum rhoncus, lacus nulla egestas neque,
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3} className={"mt-3"}>
                            <div className="mainArt" id="mainArt">
                                <div className="iconArticle" id="iconArticle">
                                    <i className='bx bx-dumbbell'></i>
                                </div>
                                <h4>Workouts 2</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta,
                                    lectus dictum fermentum rhoncus, lacus nulla egestas neque,
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3} className={"mt-3"}>
                            <div className="mainArt" id="mainArt">
                                <div className="iconArticle" id="iconArticle"><i className='bx bx-dumbbell'></i>
                                </div>
                                <h4>Workouts 3</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta,
                                    lectus dictum fermentum rhoncus, lacus nulla egestas neque,
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3} className={"mt-3"}>
                            <div className="mainArt" id="mainArt">
                                <div className="iconArticle" id="iconArticle"><i className='bx bx-dumbbell'></i></div>
                                <h4>Workouts 4</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta,
                                    lectus dictum fermentum rhoncus, lacus nulla egestas neque,
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Col>

                <div className="separatorLine"></div>

            </Container>
        </Row>

    )

}
