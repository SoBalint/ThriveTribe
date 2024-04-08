"use client";
import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {Icon} from "leaflet";
import 'leaflet/dist/leaflet.css'

function Map() {
    const costumeIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/128/7976/7976479.png",
        iconSize: [38,38]
    })
    return (
        <MapContainer center={[47.233333, 16.633333]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[47.233333, 16.633333]} icon={costumeIcon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;