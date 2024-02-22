import {useEffect, useState} from "react";
import RootLayoutComponent from "@/components/RootLayout";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Index() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <RootLayoutComponent>
        <Container>


        </Container>
        </RootLayoutComponent>
    )
}