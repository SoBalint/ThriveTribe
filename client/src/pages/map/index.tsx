'use client';
import dynamic from "next/dynamic"
import {useEffect, useState} from "react";
import RootLayoutComponent from "@/components/RootLayout";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker, Popup } from "react-leaflet"
import { useMap } from 'react-leaflet/hooks'
import Map from "@/components/map";


export default function Index() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

        const Leafletmap = dynamic(() => import('@/components/map'),
            {
                ssr: false,
                loading: () => (<div>...loading</div>)
            })

        return (
            <RootLayoutComponent>
                <Leafletmap/>
            </RootLayoutComponent>
        )
}