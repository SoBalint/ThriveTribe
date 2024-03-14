import React, {useState, useEffect} from 'react'
import RootLayoutComponent from "@/components/RootLayout";
import Link from "next/link";
import Login from "@/components/Login/Login";



export default function LoginForm() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (

        <RootLayoutComponent>
            <Login/>
        </RootLayoutComponent>
    )
}