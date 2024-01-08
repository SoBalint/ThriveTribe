import {Button, Card, Form, Row} from "react-bootstrap";
import {useState, useEffect} from 'react'
import {router} from "next/client";
import RootLayoutComponent from "@/components/RootLayout";

export default function Index() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <RootLayoutComponent>
            <h1>THRIVE TRIBE</h1>
            <Card>
                <Card.Title>Belépés</Card.Title>
                <Card.Body>
                    <Form id="form">
                        <Form.Group className="mb-3">
                            <Form.Label>Felhasználónév</Form.Label>
                            <Form.Control type="text" name="userName"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Jelszó</Form.Label>
                            <Form.Control type="text" name="password"/>
                        </Form.Group>
                    </Form>
                    <a>Elfelejtetted a jelszavad?</a>
                    <Button>Belépés</Button>
                    <hr></hr>
                    <p>Nincs fiókod?</p>
                    <Button>Regisztráció</Button>
                </Card.Body>
            </Card>
        </RootLayoutComponent>
    )
}