'use client'
import React from 'react';
import {Container, Navbar, Nav, Image, NavDropdown, Form, Button} from "react-bootstrap";
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
            <Navbar expand="lg" className="bg-body-tertiary py-3" style={{ height: "auto"}}>
                <Container fluid>
                    <Navbar.Brand href="/" className={"logo"}>
                        <Image alt="Logo" src="/pictures/Logo.png"></Image>
                        THRIVE TRIBE
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                        >
                            <Link className="nav-link link" href="/coach">
                                Edző
                            </Link>
                            <Link className="nav-link link" href="/workout">
                                Edzés
                            </Link>
                            <Link className="nav-link link" href="/diet">
                                Étrend
                            </Link>
                            <Link className="nav-link link" href="/map">
                                Térkép
                            </Link>
                            <Link className="nav-link link" href="#">
                                Üzenőfal
                            </Link>
                        </Nav>

                        <Link href="/login">
                            <button>
                                <i className='bx bx-user'></i>
                            </button>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container fluid className={"p-0 m-0 d-flex justify-content-center"}>
                {children}
            </Container>

            <footer className="footer">
                <Container>
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
                </Container>
            </footer>
        </>
    );
}

export default RootLayoutComponent;