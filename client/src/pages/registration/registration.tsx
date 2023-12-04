import { Button, Card, Form, Row } from "react-bootstrap";

export default function Registration() {
    return(
        <body>
            <h1>THRIVE TRIBE</h1>
        <Card>
            <Card.Title>Regisztráció</Card.Title>
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
                <Form.Group className="mb-3">
                    <Form.Label>Jelszó</Form.Label>
                    <Form.Control type="text" name="password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Jelszó ismét</Form.Label>
                    <Form.Control type="text" name="password2" />
                </Form.Group>
                </Form>
                <Button>Regisztráció</Button>
                <hr></hr>
                <p>Már van fiókod?</p>
                <Button>Belépés</Button>
            </Card.Body>
        </Card>
        </body>
    )
}