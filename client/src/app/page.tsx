'use client'
import Link from "next/link";
import {Container, Col, Row, Image} from "react-bootstrap";
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '/public/pictures/Image1.jpg';
import chrisheria from '/public/pictures/chrisheria.jpg'
import Image2 from '/public/pictures/Image2.jpg'


export default function Home() {
    let docTitle = document.title;
    window.addEventListener("blur", () => {
        document.title = "A változás rád vár!";
    })
    window.addEventListener("focus", () => {
        document.title = docTitle;
    })

    return (

        <Row className={"w-100"}>
            <Carousel className={"px-0 mx-0"}>
                <Carousel.Item>
                    <img src="/pictures/edzes1.jpg" alt={"MainKép"} className="w-100"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/pictures/edzes2.jpg" alt={"MainKép"} className="w-100"/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/pictures/Image2.jpg" alt={"MainKép"} className="w-100"/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <div className="separatorLine"></div>
            <Container fluid>

                <Col className="articles px-2" id="articles">
                    <h5>Edzéstervek</h5>
                    <Row className={"articlesMain"}>
                        <Col xs={12} md={6} lg={3} className={"mt-3"}>
                            <div className="mainArt" id="mainArt">
                                <div className="iconArticle" id="iconArticle"><i className='bx bx-dumbbell'></i></div>
                                <h4>Workouts</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta,
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3} className={"mt-3"}>
                            <div className="mainArt" id="mainArt">
                                <div className="iconArticle" id="iconArticle">
                                    <i className='bx bx-bowl-hot'></i>
                                </div>
                                <h4>About Eating</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta,
                                    lectus dictum fermentum rhoncus, lacus nulla egestas neque,
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3} className={"mt-3"}>
                            <div className="mainArt" id="mainArt">
                                <div className="iconArticle" id="iconArticle"><i className='bx bx-info-square'></i>
                                </div>
                                <h4>Important Thing</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta,
                                    lectus dictum fermentum rhoncus, lacus nulla egestas neque,
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3} className={"mt-3"}>
                            <div className="mainArt" id="mainArt">
                                <div className="iconArticle" id="iconArticle"><i className='bx bx-bell'></i></div>
                                <h4>Santa Claus is HERE</h4>
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