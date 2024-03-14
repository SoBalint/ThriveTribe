import React, {useEffect} from "react";
import Link from "next/link";
import Notiflix from "notiflix";


const Login = () => {
    let signedIn = false;
    const handleLogin = async (event) => {
        event.preventDefault();


        const UserName = event.target.elements.UserName.value;
        const Password = event.target.elements.Password.value;

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
                Notiflix.Notify.success("Sikeres bejelentkezés!", () => {
                    location.href = "/"

                }, {
                    timeout: 2000
                })
                console.log("Sikeres belépés!");
                signedIn = true;
            } else {
                // Sikertelen belépés, kezeld a hibát
                signedIn = false
                let message = response.messages;
                if (Array.isArray(message)) {
                    message = message[0]
                }
                console.log(message)
                Notiflix.Notify.failure(message as string)
                console.error("Sikertelen belépés!");

            }
        } catch (error) {
            console.error("Hiba történt:", error);
        }
    };

    return(
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
                        <i className='bx bx-low-vision'></i>
                    </div>
                    <div className="loginLinks">
                        <a href="#">Elelejtetted a jelszavad?</a>
                        <label></label>
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
    )
}

export default Login