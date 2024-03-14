import { Button, Card, Form, Row } from "react-bootstrap";
import RootLayoutComponent from "@/components/RootLayout";
import Link from "next/link";
import {Checkbox} from "@mui/material";

export default function Index() {
    return(
        <RootLayoutComponent>
            <div className="testRegistration">
                <div className="containerRegistration">
                    <h1>Regisztráció</h1>
                    <form>
                        <label>Vezetéknév</label>
                        <div className="custom-inputRegistration">
                            <input type="surname" name="surname"/>
                        </div>
                        <label>Keresztnév</label>
                        <div className="custom-inputRegistration">
                            <input type="firstname" name="firstname"/>
                        </div>
                        <label>Felhasználónév</label>
                        <div className="custom-inputRegistration">
                            <input type="username" name="username" autoComplete="off"/>
                        </div>
                        <label>Email</label>
                        <div className="custom-inputRegistration">
                            <input type="email" name="email" autoComplete="off"/>
                        </div>
                        <label>Jelszó</label>
                        <div className="custom-inputRegistration">
                            <input type="password" name="password"/>
                            <i className='bx bx-low-vision'></i>
                        </div>
                        <label>Jelszó ismét</label>
                        <div className="custom-inputRegistration">
                            <input type="password" name="password"/>
                            <i className='bx bx-low-vision'></i>
                        </div>
                        <label>Edző vagy? <Checkbox/></label>
                        <button className="registration">Regisztráció</button>
                        <div className="divider">
                            <div className="line"></div>
                        </div>
                        <label className="yesAccount">Már van fiókod?</label>
                        <Link href="/login">
                            <button className="login">Belépés</button>
                        </Link>
                    </form>
                </div>
            </div>
        </RootLayoutComponent>
    )
}