import React, {useState, useEffect} from 'react'
import RootLayoutComponent from "@/components/RootLayout";
import Login from "@/components/Login/Login";


export default function LoginForm() {
    return (
        <RootLayoutComponent>
            <Login/>
        </RootLayoutComponent>
    )
}