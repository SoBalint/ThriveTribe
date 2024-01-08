import {Button, Card, Form, Row, Col} from "react-bootstrap";
import {useState, useEffect} from 'react'
import {router} from "next/client";
import "@/app/globals.css"
import RootLayoutComponent from "@/components/RootLayout";


export default function Index() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <Row>
        <Col>
        <div className="wrapper">
            <form action="">
                <h1>Bejelentkezés</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <i className='bx bxs-lock-alt'></i>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox"/> Emlékezz rám</label>
                    <a href="#">Elfelejtetted a jelszavad?</a>
                </div>

                <button type="submit" className="btn">Bejelentkezés</button>

                <div className="register-link">
                    <p>Nincs fiókod? <a href="#">Regisztrálj</a></p>
                </div>
            </form>
        </div>
        </Col>
        </Row>

    )
}