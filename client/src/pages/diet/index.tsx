import RootLayoutComponent from "@/components/RootLayout";
import "bootstrap/dist/css/bootstrap.css"
import "../../app/globals.css";
import {Tabs, Tab} from "react-bootstrap"


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
                <Tab eventKey="profile" title="Profile">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="longer-tab" title="Loooonger Tab">
                    Tab content for Loooonger Tab
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    Tab content for Contact
                </Tab>
            </Tabs>


        </RootLayoutComponent>
    )
}

