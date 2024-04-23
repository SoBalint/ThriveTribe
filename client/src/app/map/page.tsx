
import React from 'react';
import dynamic from "next/dynamic";
import {Col, Container, Image, Row} from "react-bootstrap";
import "@/app/globals.css"

type keres = [
  id: number,
  name: string,
  latitude: number,
  longitude: number
];

function Page() {
    const MapComponent = dynamic(
        () => import('@/components/Map/Map'),
        { ssr: false }
    )

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col>
                        <Image className="GymPhotoForMap" src="/pictures/GymPhotoForMap.png" title="Térképi kép" alt="Térképi kép"/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <MapComponent/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>

    );
}

export default Page;
