"use client"

import {Tab, Tabs} from "react-bootstrap";
import React, {useEffect, useState} from "react";

type diet = {
    Description: string,
    foods: object
}

export default function Ketogen(){
    const [resultK, setResultK] = useState<diet[]>([]);
    useEffect(() => {
        const api = async () => {
            const data = await fetch(`http://localhost/thrivetribe-server/public/api/diets/getDiet/${12}`, {
                method: "GET"
            });
            const jsonData = await data.json();
            setResultK(jsonData);
        };
        api();
    }, []);
    return(
        <Tabs
            justify
        >
            <Tab eventKey="subtab1" title="A Diétáról">
                {resultK.Description}
            </Tab>
            <Tab eventKey="subtab2" title="Fogyasztható ételek">
                {resultK.foods && resultK.foods.map((food, index) => (
                    <div key={index}>{food.Name}</div>
                ))}
            </Tab>
        </Tabs>
    )
}