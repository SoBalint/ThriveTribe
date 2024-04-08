"use client"
import {Checkbox} from "@mui/material";
import Link from "next/link";
import React from "react";
import {Editor} from "@tinymce/tinymce-react";
import {Button} from "react-bootstrap";

function TrainingC() {
    return(
<>
              <h1>Hozz létre edzéstervet!</h1>
              <form>
                  <label>Edzés neve</label>
                  <div>
                      <input type="text" name="name"/>
                  </div>
                  <label>Leírás</label>
                  <div>
                      <Editor apiKey='jpqfu7hxmh0si1s5hboooytu0xp6sv3x343qo8y7yniwy89x' init={{}} />
                  </div>
                  <label>Megnevezése az edzésnek</label>
                  <div>
                      <input type="text" name="type" autoComplete="off"/>
                  </div>
                  <label>Mai dátum</label>
                  <div>
                      <input type="date" name="uploadedate" autoComplete="off"/>
                  </div>
              </form>
    <Button>Mentés</Button>
</>
    );
}

export default TrainingC;