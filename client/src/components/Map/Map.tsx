"use client";
import React, {useEffect} from 'react';
import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import {Icon} from "leaflet";
import 'leaflet/dist/leaflet.css'
import {Button, Col, Container, Row} from "react-bootstrap";
import { useState } from "react";
import {useCookies} from "next-client-cookies";
import isValidView from "@/components/Access_Component/access";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Link from "next/link";

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

const ReCenter = ({lat, lng} : {
    lat: number,
    lng: number
}) => {
    const map = useMap();
    useEffect(() => {
        map.setView([lat,lng], 13)
    }, [lat,lng]);
    return null;
}

function Map() {

    let mapKey = 1;
    const [resultLocation, setResultL] = useState<location[]>([]);
    const [searchLocation, setSearchLocation] = useState<number[]>([47.23068387330566, 16.621957077628533 ]);
    useEffect(() => {
        mapKey++;
    }, [searchLocation]);

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
        iconSize: [38, 38]
    })

    const cookies = useCookies(); // cookiek betöltése
    let vanjogod: boolean = false;
    if (cookies.get('user') != undefined) {
        const jsonObj = JSON.parse(cookies.get('user') as string); //a user kiolvasása, ha van
        //jogosultságellenőrzés
        if (isValidView("map", jsonObj.roles[0].id) == false) {
            vanjogod = false;
        } else {
            vanjogod = true;
        }

        if (!vanjogod) {
            return (<Container>
                    <Link href="/">
                        <button className={"backButton"}>
                            <i className='bx bx-chevron-left'></i>
                        </button>
                    </Link>
                    <h1>Nincs jogod ehhez!!!</h1>
                </Container>
            );
        } else {

        }
        let lat = 0;
        let long = 0;
        return (
            <div className="mb-5">
                <Link href="/">
                    <button className={"backButtonAdmin"}>
                        <i className='bx bx-chevron-left'></i>
                    </button>
                </Link>
                <div className="search">
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        const form = event.target;

                        axios.get(`http://localhost/thrivetribe-server/public/api/citycentrums/search/${form.kereso.value}`, {
                        }).then((res) => {
                            res.data.latitude;
                            lat = res.data[0].latitude;
                            long = res.data[0].longitude;
                            setSearchLocation([lat, long])
                        })
                    }}>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            fullWidth
                            label="Keresés"
                            name="kereso"
                        />
                        <Button type="submit">Keresés</Button>
                    </form>
                </div>
            <br/>
                <div key={mapKey}>
                <MapContainer key={mapKey} center={searchLocation} zoom={13} scrollWheelZoom={false}>
                    <ReCenter lat={searchLocation[0]} lng={searchLocation[1]} />
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
                                                                    <p>Nyitvatartás:</p>
                                                                </Col>
                                                                <p>
                                                                {valueM.OpenHour}
                                                                </p>
                                                            </Row>
                                                        </>
                                                        : <></>
                                                );
                                            })}
                                        </div>
                                    </Popup>
                                </Marker>
                            </>
                        );
                    })}
                </MapContainer>
                </div>
            </div>
        );
    }
}

export default Map;