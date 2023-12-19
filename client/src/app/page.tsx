'use client'
import Link from "next/link";
import {Col, Row} from "react-bootstrap";

export default function Home() {
    return (
        <Row>
            <img className="mainP"
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVOObEkdf2ClOza_WLMSt9DF1KKthpdQE5g&usqp=CAU" />
            <img className="mainImagine" src="/pictures/user2.png" />

            <hr></hr>


            <Col xs={12} className="articles" id="articles">
                <h5>Cikkek</h5>
                <h3>First Articles</h3>
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
                        tehén
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
        </Row>
    )
}