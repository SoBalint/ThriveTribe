import {Button, Card, Form, Row, Col} from "react-bootstrap";
import {useState, useEffect} from 'react'
import {router} from "next/client";
import RootLayoutComponent from "@/components/RootLayout";
import Link from "next/link";

export default function Index() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <RootLayoutComponent>
            <div className="testLogin">
            <div className="containerLogin">
                <h1>Belépés</h1>
                <form>
                    <label className="userName">Felhasználónév</label>
                    <div className="custom-inputLogin">
                        <input type="username" name="username" autoComplete="off"/>

                    </div>
                    <label className="password">Jelszó</label>
                    <div className="custom-inputLogin">
                        <input type="password" name="password"/>
                        <i className='bx bx-low-vision'></i>
                    </div>
                    <div className="loginLinks">
                        <a href="#">Elelejtetted a jelszavad?</a>
                        <label></label>
                    </div>
                    <button className="login">Belépés</button>
                    <div className="divider">
                        <div className="line"></div>
                    </div>
                    <label className="noAccount">Nincs fiókod?</label>
                    <Link href="/registration">
                    <button className="registration">Regisztráció</button>
                    </Link>
                </form>
            </div>
            </div>
        </RootLayoutComponent>
    )
}