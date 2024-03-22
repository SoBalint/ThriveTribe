import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";
import Image from "next/image"
import {Container, Nav, Navbar} from "react-bootstrap";
import TopNavbar from "@/components/Navigation/TopNavbar";
import "bootstrap/dist/css/bootstrap.css"
import './globals.css'
import {CookiesProvider} from "next-client-cookies/server";


const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'THRIVE TRIBE',
    icons: {
        icon: "/pictures/Logo.png"
    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const linkStyle = {
        color: "#1E1E1E"
    };
    return (
        <html>
        <body>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
        <CookiesProvider>
            <TopNavbar/>

            <Container fluid className={"p-0 m-0 d-flex justify-content-center"}>
                {children}
            </Container>

            <footer className="footer">
                <Container>
                    <div className="top">
                        <div className="logo">
                            <Image alt="Logo" src="/pictures/Logo.png" width={50} height={50}></Image>
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
        </CookiesProvider>
        </body>
        </html>
    )
}
