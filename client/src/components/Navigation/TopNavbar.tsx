"use client";
import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import {TbUserOff} from "react-icons/tb";
import {TbUser} from "react-icons/tb";
import {useCookies} from "next-client-cookies";
import handleLogout from "@/components/Login/Logout";

function TopNavbar() {
    const cookies = useCookies();
    let tabok: string = "";
    let logged_in_user:number = -1; // ha -1, akkor nincs belépett user
    if(cookies.get('user') != undefined){
    const jsonObj = JSON.parse(cookies.get('user') as string);
    if(jsonObj.roles[0] != undefined){
        logged_in_user = jsonObj.roles[0].id;
        if (jsonObj.roles[0].id == 1 ){

        }else if (jsonObj.roles[0].id == 1 ){
        }else{
            //tabok = "ez NEM egy admin";
        }
    }
    }else{
        //console.log("nincs belépve felhasználó");
    }


    return (
        <Navbar expand="lg" className="py-3" style={{ height: "auto"}}>
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
                        {/*JSON.stringify(cookies.get("user") || "")*/}

                        {/*cookies.get("user")*/}

                        {
                            logged_in_user == 1 ?
                                <>
                                    <Link className="nav-link link" href="/admin">
                                        Admin
                                    </Link>
                                </> : <></>
                        }
                        {
                            logged_in_user == 4 ?
                                <>
                                    <Link className="nav-link link" href="/coach">
                                        Edző
                                    </Link>
                                    <Link className="nav-link link" href="/diet">
                                        Étrend
                                    </Link>
                                    <Link className="nav-link link" href="/map">
                                        Térkép
                                    </Link>
                                    <Link className="nav-link link" href="/training">
                                        Edzés
                                    </Link>
                                    <Link className="nav-link link" href={`/datamodification`}>
                                        Adatmódosítás
                                    </Link>
                                </> : <></>
                        }
                        {
                            logged_in_user == 5 ?
                                <>
                                    <Link className="nav-link link" href="/coachcreate">
                                        Edző
                                    </Link>
                                    <Link className="nav-link link" href="/trainingcreate">
                                        Edzés
                                    </Link>
                                    <Link className="nav-link link" href="/map">
                                        Térkép
                                    </Link>
                                    <Link className="nav-link link" href="/diet">
                                        Étrend
                                    </Link>
                                    <Link className="nav-link link" href={`/datamodification`}>
                                        Adatmódosítás
                                    </Link>
                                </> : <></>
                        }
                    </Nav>

                    {
                        logged_in_user == 1 || logged_in_user == 4 || logged_in_user == 5 ?
                            <>
                                <Link href="/login?logout">
                                <button>
                                    {/*<i className='bx bx-user-x'></i>*/}
                                    <TbUser/>
                                    {/*<TbUser/>*/}
                                </button>
                            </Link>
                            </> : <>
                                <Link href="/login">
                                <button>
                                    {/*<i className='bx bx-user-x'></i>*/}
                                    <TbUserOff/>
                                    {/*<TbUser/>*/}
                                </button>
                            </Link>
                            </>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNavbar;
