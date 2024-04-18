"use client"

import {Tab, Tabs} from "react-bootstrap";
import React, {useEffect, useState} from "react";

type diet = {
    Description: string,
    foods: object
}

export default function Vegan() {
    const [resultV, setResultV] = useState<diet[]>([]);
    useEffect(() => {
        const api = async () => {
            const data = await fetch(`http://localhost/thrivetribe-server/public/api/diets/getDiet/${15}`, {
                method: "GET"
            });
            const jsonData = await data.json();
            setResultV(jsonData);
        };
        api();
    }, []);
    return(
        <Tabs
            justify
        >
            <Tab eventKey="subtab1" title="A Diétáról">
                {resultV.Description}
            </Tab>
            <Tab eventKey="subtab2" title="Fogyasztható ételek">
                {resultV.foods && resultV.foods.map((food, index) => (
                    <div key={index}>{food.Name}</div>
                ))}
            </Tab>
        </Tabs>
    )
}