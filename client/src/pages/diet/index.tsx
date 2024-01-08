import {useEffect, useState} from "react";
import RootLayoutComponent from "@/components/RootLayout";

export default function Index() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <RootLayoutComponent>
            <h1></h1>
        </RootLayoutComponent>
    )
}