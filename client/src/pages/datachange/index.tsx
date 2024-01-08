import { Button, Card, Form, Row } from "react-bootstrap";

export default function Index() {
    return(
        <body>
            <h1>THRIVE TRIBE</h1>
        <Card>
            <Card.Title>Adatmódosítás</Card.Title>
            <Card.Body>  
                <Form id="form">
                <Form.Group className="mb-3">
                    <Form.Label>Felhasználónév</Form.Label>
                    <Form.Control type="text" name="userName" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Vezetéknév</Form.Label>
                    <Form.Control type="text" name="lastName" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Keresztnév</Form.Label>
                    <Form.Control type="text" name="firstName" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>E-mail cím</Form.Label>
                    <Form.Control type="text" name="email" />
                </Form.Group>
                <hr></hr>
                <Form.Group className="mb-3">
                    <Form.Label>Születési dátum</Form.Label>
                    <Form.Control type="date" name="birthDate" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Súly</Form.Label>
                    <Form.Control type="number" name="weight" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Magasság</Form.Label>
                    <Form.Control type="numberM" name="height" />
                </Form.Group>
                </Form>
                <a>Elfelejtetted a jelszavad?</a>
                <Button>Mentés</Button>
            </Card.Body>
        </Card>
        </body>
    )
}