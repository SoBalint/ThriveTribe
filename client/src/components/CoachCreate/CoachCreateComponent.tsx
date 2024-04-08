"use client";
import {Checkbox} from "@mui/material";
import Link from "next/link";
import React from "react";
import {Button} from "react-bootstrap";

function CoachC() {
    return(
        <>
                <h1>Hozd létre saját ...</h1>
                <form>
                    <label>Vezetéknév</label>
                    <div>
                        <input type="surname" name="surname"/>
                    </div>
                    <label>Keresztnév</label>
                    <div>
                        <input type="firstname" name="firstname"/>
                    </div>
                    <label>Életkor</label>
                    <div>
                        <input type="number" name="age" autoComplete="off"/>
                    </div>
                    <label>Végzettség</label>
                    <div>
                        <textarea name="school" rows={4} cols={40}/>
                    </div>
                    <label>Készség</label>
                    <div>
                        <textarea name="skill" rows={4} cols={40}/>
                    </div>
                    <label>Tapasztalat</label>
                    <div>
                        <textarea name="experience" rows={4} cols={40}/>
                    </div>
                    <label>Email cím</label>
                    <div>
                        <input type="email" name="email"/>
                    </div>
                    <label>Telefonszám/Mobilszám</label>
                    <div>
                        <input type="text" name="phone"/>
                    </div>
                </form>
            <Button>Mentés</Button>
        </>
    );
}

export default CoachC;