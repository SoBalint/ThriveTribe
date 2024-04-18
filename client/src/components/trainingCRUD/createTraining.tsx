"use client"
import axios from "axios";
import {Button, Col, Container} from "react-bootstrap";
import React, { useRef } from "react";
import {Editor} from "@tinymce/tinymce-react";
import {useCookies} from "next-client-cookies";
import isValidView from "@/components/Access_Component/access";
import Link from "next/link";

export default function CreateTraining() {
    const cookies = useCookies(); // cookiek betöltése
    let vanjogod: boolean = false;
    const editorRef = useRef<Editor | null>(null);
    if(cookies.get('user') != undefined) {
        const jsonObj = JSON.parse(cookies.get('user') as string); //a user kiolvasása, ha van
        //jogosultságellenőrzés
        if (isValidView("admin", jsonObj.roles[0].id) == false) {
            vanjogod = false;
        } else {
            vanjogod = true;
        }

        if (!vanjogod) {
            return (<Container>
                    <Link href="/">
                        <button className={"backButton"}>
                            <i className='bx bx-chevron-left'></i>
                        </button>
                    </Link>
                    <h1>Nincs jogod ehhez!!!</h1>
                </Container>
            );
        } else {
            return (
                <Col>
                    <Link href="/admin">
                        <button className={"backButton"}>
                            <i className='bx bx-chevron-left'></i>
                        </button>
                    </Link>

                <div className="testRegistration">
                    <div className="containerRegistration">
                        <h1>Edzés létrehozás</h1>
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
                                Like: form.like.value,
                                Dislike: form.dislike.value,
                                Type: form.type.value,
                                UploadeDate: form.uploadedate.value,
                                Author: form.author.value
                            }).then((res) => {
                                alert("Sikeres felvitel!");
                            })
                        }}>
                            <label> Név </label>
                            <div className="custom-inputRegistration">
                                <input type="name" name="name"/>
                            </div>
                            <label>Szöveg</label>
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
                            <label>Like</label>
                            <div className="custom-inputRegistration">
                                <input type="number" name="like"/>
                            </div>
                            <label>Dislike</label>
                            <div className="custom-inputRegistration">
                                <input type="number" name="dislike"/>
                            </div>
                            <label>Típus</label>
                            <div className="custom-inputRegistration">
                                <input type="type" name="type"/>
                            </div>
                            <label>Feltöltés dátuma</label>
                            <div className="custom-inputRegistration">
                                <input type="date" name="uploadedate"/>
                            </div>
                            <label>Szerző</label>
                            <div className="custom-inputRegistration">
                                <input type="author" name="author"/>
                            </div>
                            <Button className="registration" type="submit">Mentés</Button>
                        </form>
                    </div>
                </div>
                </Col>
            )
        }
    }
}