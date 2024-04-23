import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";
import {Container} from "react-bootstrap";
import TopNavbar from "@/components/Navigation/TopNavbar";
import "bootstrap/dist/css/bootstrap.css"
import './globals.css'
import {CookiesProvider} from "next-client-cookies/server";
import FooterComponent from "@/components/footer/FooterComponent";


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
            <FooterComponent/>

        </CookiesProvider>
        </body>
        </html>
    )
}
