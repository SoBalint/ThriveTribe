'use client'
import React from 'react';
import {Container, Row} from "react-bootstrap";
import Link from "next/link";
import '../app/globals.css'

function RootLayoutComponent({children}: {
    children: React.ReactNode
}) {
    return (

<>
            <header>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
            <nav>
                <div className="logo">
                    <img src="/pictures/Logo-removebg.png"/>
                    <a className="navbar-brand pb-0" href="/">THRIVE TRIBE</a>
                </div>

                <ul>
                    <Link className="link" href="/coach">
                        Edző
                    </Link>
                    <Link className="link" href="/diet">
                        Étrend
                    </Link>
                    <Link className="link" href="/map">
                        Térkép
                    </Link>
                    <Link className="link" href="#">
                        Üzenőfal
                    </Link>
                </ul>

                <Link href="/login">
                    <button>
                        <i className='bx bx-user'></i>
                    </button>
                </Link>
            </nav>
            </header>

            <Container>
                {children}
            </Container>

            <footer className="footer">
                <div className="top">
                    <div className="logo">
                        <img src="/pictures/Logo-removebg.png"/>
                        THRIVE TRIBE
                    </div>

                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Future</a></li>
                    </ul>
                    <div className="social-links">
                        <a href="#"><i className='bx bxl-facebook-square'></i></a>
                        <a href="#"><i className='bx bxl-gmail'></i></a>
                        <a href="#"><i className='bx bxl-twitter'></i></a>
                        <a href="#"><i className='bx bxl-linkedin-square'></i></a>
                    </div>
                </div>
                <div className="separator"></div>
                <div className="bottom">
                    <p>
                        Made with Intentions by Thrive Tribe
                    </p>
                    <div className="links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
            </footer>
</>
    );
}

export default RootLayoutComponent;