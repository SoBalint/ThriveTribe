import RootLayoutComponent from "@/components/RootLayout";
import {Tabs, Tab} from "react-bootstrap"
import React from "react";


export type Tabs = "ALL" | "ACTIVE" | "COMPLETED";
export default function App() {


    return (
        <RootLayoutComponent>
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

        </RootLayoutComponent>
    )
}

