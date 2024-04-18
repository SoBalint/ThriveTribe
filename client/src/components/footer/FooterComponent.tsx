"use client"
import React from 'react';
import {Container} from "react-bootstrap";
import Image from "next/image";
import {usePathname} from "next/navigation";

function FooterComponent() {
    const path = usePathname();
    return ( path != "/admin" ? (
            <footer className="footer">
                <Container>
                    <div className="top">
                        <div className="logo">
                            <Image alt="Logo" src="/pictures/Logo.png" width={50} height={50}></Image>
                            THRIVE TRIBE
                        </div>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/future">Future</a></li>
                        </ul>
                        <div className="social-links">
                            <a href="https://github.com/SoBalint/ThriveTribe" target={"_blank"}><i className='bx bxl-github'></i></a>
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
        ) : (<></>))
}

export default FooterComponent;