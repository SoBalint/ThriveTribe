"use client";
import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {Icon} from "leaflet";
import 'leaflet/dist/leaflet.css'
import {Col, Row} from "react-bootstrap";
import { useState, useEffect } from "react";

//const markerIcon = new L.Icon({
//   iconUrl: require("/pictures/sulyzo.png"),
//    iconSize: [35, 45]
//})
type location = {
    id: number;
    latitude: number;
    longitude: number;
};

type gyms = {
    Address: string;
    GymName: string;
    OpenHour: string;
    CordinationId: number;
};


function Map() {

    const [resultLocation, setResultL] = useState<location[]>([]);

    useEffect(() => {
        const api = async () => {
            const data = await fetch("http://localhost/thrivetribe-server/public/api/locations", {
                method: "GET"
            });
            const jsonData = await data.json();
            setResultL(jsonData);
        };

        api();
    }, []);

    const [resultMap, setResultM] = useState<gyms[]>([]);

    useEffect(() => {
        const api = async () => {
            const data = await fetch("http://localhost/thrivetribe-server/public/api/maps", {
                method: "GET"
            });
            const jsonData = await data.json();
            setResultM(jsonData);
        };

        api();
    }, []);

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
            {resultLocation.map((valueL) => {
                return (
                    <>
                    <Marker position={[valueL.latitude, valueL.longitude]} icon={costumeIcon}>
                        <Popup>
                            <div>
                                {resultMap.map((valueM) => {
                                    return (
                                        valueM.CordinationId == valueL.id ? <>
                                            <h5>{valueM.Address}</h5>
                                            <Row>
                                                <Col>
                                                    <p>{valueM.GymName}</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="col-2">
                                                    <p>Nyitvatartás</p>
                                                </Col>
                                                <Col className="col-10">
                                                    <ul className="openHours">
                                                        <li>{valueM.OpenHour}</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </>
                                            : <>Hiba!!!</>
                                    );
                                })}
                            </div>
                        </Popup>
                    </Marker>
                    </>
                );
            })}
        </MapContainer>
    );
}

export default Map;