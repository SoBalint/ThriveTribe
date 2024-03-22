"use client";
import React from 'react';
import { Carousel } from "react-bootstrap";

function HomeCarousel() {
    return (
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
    );
}

export default HomeCarousel;
