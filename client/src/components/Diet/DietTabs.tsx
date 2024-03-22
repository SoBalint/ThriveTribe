"use client"
import React from 'react';
import {Tab, Tabs} from "react-bootstrap";

function DietTabs() {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            justify
        >
            <Tab eventKey="home" title="Home">
                Tab content for Home

            </Tab>
            <Tab eventKey="carnivore" title="Carnivore">
                Carnivore
            </Tab>
            <Tab eventKey="vegan" title="Vegan">
                Vegan
            </Tab>
            <Tab eventKey="contact" title="Contact">
                Tab content for Contact
            </Tab>
        </Tabs>
    );
}

export default DietTabs;
