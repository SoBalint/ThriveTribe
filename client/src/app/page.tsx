import {Container, Col, Row, Image} from "react-bootstrap";
import React from "react";
import HomeCarousel from "@/components/Home/HomeCarousel";

export default function Home() {
    // let docTitle = document.title;
    // window.addEventListener("blur", () => {
    //     document.title = "Come back nig";
    // })
    // window.addEventListener("focus", () => {
    //     document.title = docTitle;
    // })
    return (

        <Row className={"w-100"}>
            <HomeCarousel />

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
