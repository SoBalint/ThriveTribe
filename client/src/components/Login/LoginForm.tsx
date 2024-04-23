"use client";
import React from 'react';
import Link from "next/link";
import {useCookies} from "next-client-cookies";
import Notiflix from "notiflix";
import {Col} from "react-bootstrap";

function LoginForm() {
    const cookies = useCookies();

    const queryString = window.location.href;

    if(queryString.search("logout") == -1){

    }else{
        if(cookies.get('user') != undefined){
            cookies.remove('user');
            location.href = "/login";
        }
    }
    const handleLogout = async (event) => {

    }
    const handleLogin = async (event) => {
        event.preventDefault();

        const UserName = event.target.elements.UserName.value;
        const Password = event.target.elements.Password.value;

        cookies.set("user",JSON.stringify({
            email: "asd@asd.hu",
            roles: []
        }));
        try {
            const response = await fetch("http://localhost/thrivetribe-server/public/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ UserName, Password })
            });

            if (response.ok) {
                // Sikeres belépés, folytasd a megfelelő intézkedésekkel, például átirányítással
                const user = await response.json();
                cookies.set("user",JSON.stringify(user));
                if(user.roles[0].id == 1){
                    location.href = "/admin";
                }
                if(user.roles[0].id == 5){
                    location.href = "/coachcreate";
                }
                if(user.roles[0].id == 4){
                    location.href = "/";
                }
            } else {
                // Sikertelen belépés, kezeld a hibát
                let message = response.messages;
                if (Array.isArray(message)) {
                    message = message[0]
                }
                Notiflix.Notify.failure(message as string)
                console.error("Sikertelen belépés!");

            }
        } catch (error) {
            console.error("Hiba történt:", error);
        }
    };

    return(
        <Col xs={10} md={12} lg={12}>
            <Link href="/">
                <button className={"backButton"}>
                    <i className='bx bx-chevron-left'></i>
                </button>
            </Link>
            <div className="testLogin">
                <div className="containerLogin">
                    <h1>Belépés</h1>
                    <form onSubmit={handleLogin}>
                        <label className="userName">Felhasználónév</label>
                        <div className="custom-inputLogin">
                            <input
                                type="text"
                                name="UserName"
                                autoComplete="off"
                            />
                        </div>
                        <label className="password">Jelszó</label>
                        <div className="custom-inputLogin">
                            <input
                                type="password"
                                name="Password"
                            />
                        </div>
                        <button type="submit" className="login">Belépés</button>
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
        </Col>
    );
}

export default LoginForm;

