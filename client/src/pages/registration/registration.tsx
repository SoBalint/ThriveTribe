import {Button, Card, Col, Form, Row} from "react-bootstrap";

export default function Registration() {
    return (
        <Row>
            <Col>
                <div className="wrapper">
                    <form action="">
                        <h1>Regisztráció</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Username" required/>
                            <i className='bx bxs-user'></i>
                        </div>

                        <div className="input-box">
                            <input type="lastname" placeholder="Lastname" required/>
                        </div>

                        <div className="input-box">
                            <input type="firstname" placeholder="Firstname" required/>
                        </div>

                        <div className="input-box">
                            <input type="password" placeholder="Password" required/>
                            <i className='bx bxs-lock-alt'></i>
                        </div>

                        <div className="input-box">
                            <input type="passwordagain" placeholder="Passwordagain" required/>
                            <i className='bx bxs-lock-alt'></i>
                        </div>


                        <button type="submit" className="btn">Regisztráció</button>
                    </form>
                </div>

                <p>Már van fiókod?</p>
                <button type="submit" className="btn">Belépés</button>
            </Col>
        </Row>
    )
}