import {Button} from "react-bootstrap";
import React from "react";

function DataModification() {
    return (
        <div className="containerLogin my-5">
            <h1>Adatmódosítás</h1>
            <form>
                <label className="lastName">Vezetéknév</label>
                <div className="custom-inputLogin">
                    <input
                        type="text"
                        name="LastName"
                        autoComplete="off"
                    />
                </div>
                <label className="firstName">Keresztnév</label>
                <div className="custom-inputLogin">
                    <input
                        type="text"
                        name="FirstName"
                        autoComplete="off"
                    />
                </div>
                <label className="email">Email</label>
                <div className="custom-inputLogin">
                    <input
                        type="text"
                        name="Email"
                        autoComplete="off"
                    />
                </div>
                <hr/>
                <label className="age">Életkor</label>
                <div className="custom-inputLogin">
                    <input
                        type="text"
                        name="Age"
                        autoComplete="off"
                    />
                </div>
                <label className="weight">Súly <sub>(kg)</sub></label>
                <div className="custom-inputLogin">
                    <input
                        type="text"
                        name="Weight"
                        autoComplete="off"
                    />
                </div>
                <label className="height">Magasság <sub>(cm)</sub></label>
                <div className="custom-inputLogin">
                    <input
                        type="text"
                        name="Height"
                        autoComplete="off"
                    />
                </div>
                <Button className="registration">Mentés</Button>
            </form>
        </div>
    );
}

export default DataModification;