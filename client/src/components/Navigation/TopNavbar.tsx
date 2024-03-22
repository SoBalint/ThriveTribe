"use client";
import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import {TbUserOff} from "react-icons/tb";
import {useCookies} from "next-client-cookies";

function TopNavbar() {
    const cookies = useCookies();

    return (
        <Navbar expand="lg" className="bg-body-tertiary py-3" style={{ height: "auto"}}>
            <Container fluid>
                <Navbar.Brand href="/" className={"logo"}>
                    <Image alt="Logo" src="/pictures/Logo.png" width={50} height={50}></Image>
                    THRIVE TRIBE
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                    >
                        {JSON.stringify(cookies.get("user") || "")}
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
                        <Link className="nav-link link" href="/messageboard">
                            Üzenőfal
                        </Link>
                    </Nav>
                    <Link href="/login">
                        <button>
                            {/*<i className='bx bx-user-x'></i>*/}
                            <TbUserOff/>
                            {/*<TbUser/>*/}
                        </button>

                        {/*{!signedIn && <button><TbUser/></button>}
                            {<button><TbUserOff/></button> && signedIn}*/}
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNavbar;
