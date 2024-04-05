"use client";
import React from 'react';
import { Carousel, Row, Image } from "react-bootstrap";

function HomeCarousel() {
    return (
        <Row className={"w-100"}>
            <Carousel className={"px-0 mx-0"}>
                <Carousel.Item>

                    <Image src="/pictures/edzes1.jpg" alt={"edzes1"} className="w-100"/>

                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>

                    <Image src="/pictures/edzes2.jpg" alt={"edzes2"} className="w-100"/>

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item>

                    <Image src="/pictures/edzes3.jpg" alt={"edzes3"} className="w-100"/>

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>

                </Carousel.Item>
            </Carousel>
        </Row>

    );
}

export default HomeCarousel;
