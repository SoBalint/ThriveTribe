import React from 'react';
import dynamic from "next/dynamic";
import TextField from "@mui/material/TextField";
import {Col, Container, Image, Row} from "react-bootstrap";
import "@/app/globals.css"
import {borderRadius} from "@mui/system";

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
                        <Image className="GymPhotoForMap" src="/pictures/GymPhotoForMap.png" title="GymPhotoForMap" alt="GymPhotoForMap"/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <div className="search">
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                fullWidth
                                label="Keresés"
                            />
                        </div>
                        <br/>
                        <MapComponent/>
                        <br/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>

    );
}

export default Page;
