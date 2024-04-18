"use client"
import Link from "next/link";
import React, {useRef} from "react";
import {Editor} from "@tinymce/tinymce-react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {useCookies} from "next-client-cookies";
import isValidView from "@/components/Access_Component/access";
import axios from "axios";

function TrainingC() {
    const editorRef = useRef<Editor | null>(null);
    const cookies = useCookies(); // cookiek betöltése
    let vanjogod: boolean = false;
    if(cookies.get('user') != undefined) {
        const jsonObj = JSON.parse(cookies.get('user') as string); //a user kiolvasása, ha van
        //jogosultságellenőrzés
        if (isValidView("trainingcreate", jsonObj.roles[0].id) == false) {
            vanjogod = false;
        } else {
            vanjogod = true;
        }

        if (!vanjogod) {
            return (<Container>
                    <Link href="/">
                        <button className={"backButtonAdmin"}>
                            <i className='bx bx-chevron-left'></i>
                        </button>
                    </Link>
                    <h1>Nincs jogod ehhez!!!</h1>
                </Container>
            );
        } else {
            return (
                <Container>
                    <Link href="/">
                        <button className={"backButtonAdmin"}>
                            <i className='bx bx-chevron-left'></i>
                        </button>
                    </Link>
                    <Col className="trainCont" lg={12} md={12} xs={12}>
                        <div className="testTrainCreate">
                        <div className="trainCreate">
                            <h1>Hozz létre edzéstervet!</h1>
                            <form onSubmit={(event) => {
                                event.preventDefault();
                                const form = event.target;

                                let tartalom = "";
                                if(editorRef.current) {
                                    tartalom = editorRef.current.getContent();

                                }
                                axios.post("http://localhost/thrivetribe-server/public/api/trainings/create", {
                                    Name: form.name.value,
                                    Text: tartalom,
                                    Type: form.type.value,
                                    UploadeDate: form.uploadedate.value,
                                    Author: form.author.value
                                }).then((res) => {
                                    alert("Sikeres felvitel!");
                                })
                            }}>
                                <label>Edzés neve</label>
                                <div className="custom-inputTrainCreate">
                                    <input type="text" name="name"/>
                                </div>
                                <label>Leírás</label>
                                <div>
                                    <Editor
                                        apiKey='jpqfu7hxmh0si1s5hboooytu0xp6sv3x343qo8y7yniwy89x'
                                        tagName="proba1"
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        init={{
                                            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                            tinycomments_mode: 'embedded',
                                            tinycomments_author: 'Author name',
                                            mergetags_list: [
                                                {value: 'First.Name', title: 'First Name'},
                                                {value: 'Email', title: 'Email'},
                                            ],
                                            ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                                        }}
                                    />

                                </div>
                                <label>Megnevezése az edzésnek</label>
                                <div className="custom-inputTrainCreate">
                                    <input type="text" name="type" autoComplete="off"/>
                                </div>
                                <label>Mai dátum</label>
                                <div className="custom-inputTrainCreateDate">
                                    <input type="date" name="uploadedate" autoComplete="off"/>
                                </div>
                                <label>Létrehozó neve</label>
                                <div className="custom-inputTrainCreate">
                                    <input type="name" name="author"/>
                                </div>
                                <Button className="createTrainSave">Mentés</Button>
                            </form>
                        </div>
                        </div>
                    </Col>
                </Container>
            );
        }
    }
}

export default TrainingC;