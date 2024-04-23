"use client"
import React, {useEffect, useState} from "react";
import {Tab, Tabs} from "react-bootstrap";

type diet = {
    Description: string,
    foods: object
}

export default function Alkaline() {
    const [resultA, setResultA] = useState<diet[]>([]);
    useEffect(() => {
        const api = async () => {
            const data = await fetch(`http://localhost/thrivetribe-server/public/api/diets/getDiet/${10}`, {
                method: "GET"
            });
            const jsonData = await data.json();
            setResultA(jsonData);
        };
        api();
    }, []);

    return (
        <Tabs
            justify
        >
            <Tab eventKey="subtab1" title="A Diétáról">
                {resultA.Description}
            </Tab>
            <Tab eventKey="subtab2" title="Fogyasztható ételek">
                {resultA.foods && resultA.foods.map((food, index) => (
                    <div key={index}>{food.Name}</div>
                ))}
            </Tab>
        </Tabs>
    );
}