"use client";
import React from 'react';
import { Carousel, Row, Image } from "react-bootstrap";

function HomeCarousel() {
    return (
        <Row className={"slider w-100"}>
            <Carousel className={"px-0 mx-0"}>
                <Carousel.Item>

                    <Image src="/pictures/edzes1.jpg" title={"Deadlift"} alt={"Deadlift"} className="w-100"/>

                    <Carousel.Caption>
                        <p className="homeSentences">Az új életmód kihívásokat hoz.</p>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>

                    <Image src="/pictures/edzes2.jpg" title={"Súlyzó"} alt={"Súlyzó"} className="w-100"/>

                    <Carousel.Caption>
                        <p className="homeSentences">Tudatos változás lépésről lépésre.</p>
                    </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item>

                    <Image src="/pictures/edzes3.jpg" title={"Súlyemelés"} alt={"Súlyemelés"} className="w-100"/>

                    <Carousel.Caption>
                        <p className="homeSentences">Napi elkötelezettség a testmozgás mellett.</p>
                    </Carousel.Caption>

                </Carousel.Item>
            </Carousel>
        </Row>

    );
}

export default HomeCarousel;
