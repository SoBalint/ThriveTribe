'use client'
import Link from "next/link";
import {Container, Col, Row, Image} from "react-bootstrap";
import React from "react";

export default function Home() {
    return (

        <Row>
            <div className="image-container">
                <div className="overlay-text">Ép test ép lélek</div>
                <Image className="mainPageImg" src="/pictures/chrisheria.jpg" alt={"MainKép"}/>
            </div>
            segg
            <div className="separatorLine"></div>
    <Container>

            <Col xs={12} className="articles" id="articles">
                <h5>Cikkek</h5>
                <div className="articlesMain" id="articlesMain">
                    <div className="mainArt" id="mainArt">
                        <div className="iconArticle" id="iconArticle"><i className='bx bx-dumbbell'></i></div>
                        <h4>Workouts</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta,
                        </p>
                    </div>
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
                    <div className="mainArt" id="mainArt">
                        <div className="iconArticle" id="iconArticle"><i className='bx bx-info-square'></i></div>
                        <h4>Important Thing</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta,
                            lectus dictum fermentum rhoncus, lacus nulla egestas neque,
                        </p>
                    </div>
                    <div className="mainArt" id="mainArt">
                        <div className="iconArticle" id="iconArticle"><i className='bx bx-bell'></i></div>
                        <h4>Santa Claus is HERE</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta,
                            lectus dictum fermentum rhoncus, lacus nulla egestas neque,
                        </p>
                    </div>
                </div>
            </Col>

            <div className="separatorLine"></div>

    </Container>
        </Row>

)

}