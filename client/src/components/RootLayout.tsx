'use client'
import React from 'react';
import {Container, Row, Image} from "react-bootstrap";
import Link from "next/link";
import '../app/globals.css'
import Head from "next/head";

function RootLayoutComponent({children}: {
    children: React.ReactNode
}) {
    return (

        <>
            <Head>
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
                <link rel="icon" type="image/png" href="/pictures/Logo.png"/>
                <title>Thrive Tribe</title>
            </Head>
            <header>
                <nav>
                    <div className="logo">
                        <Image alt="Logo" src="/pictures/Logo.png"></Image>
                        <a className="navbar-brand pb-0" href="/">THRIVE TRIBE</a>
                    </div>

                    <ul>
                        <Link className="link" href="/coach">
                            Edző
                        </Link>
                        <Link className="link" href="/workout">
                            Edzés
                        </Link>
                        <Link className="link" href="/diet">
                            Étrend
                        </Link>
                        <Link className="link" href="/map">
                            Térkép
                        </Link>
                        <Link className="link" href="/messageboard">
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


            {children}


            <footer className="footer">
                <div className="top">
                    <div className="logo">
                        <Image alt="Logo" src="/pictures/Logo.png"></Image>
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