"use client"
import {Col, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";

type workout = {
    id: number,
    Name: string,
    Author: string,
    UploadeDate: string
}
export default function TopTraining() {

    const [resultW, setResultW] = useState<workout[]>([]);
    useEffect(() => {
        const api = async () => {
            const data = await fetch("http://localhost/thrivetribe-server/public/api/trainings/getTopFour", {
                method: "GET"
            });
            const jsonData = await data.json();
            setResultW(jsonData);
        };

        api();
    }, []);

    return(
        <>

            <Col className="articles px-2" id="articles">
                <h5 className="trainingTop">Felkapott Edzéstervek </h5>
                <Row className={"articlesMain"}>
                {resultW.map((valueW) => {
                    return (
                      <>

                              <Col xs={12} md={6} lg={3} className={"mt-3"}>
                                  <a className="buttonClick" href={`/detailedtraining/${valueW.id}`}>
                                      <div className="mainArt" id="mainArt">
                                          <div className="iconArticle" id="iconArticle"><i className='bx bx-dumbbell'></i>
                                          </div>
                                          <h1 className="articleTitle">{valueW.Name}</h1>
                                          <h2 className="authorName">{valueW.Author}</h2>
                                          <h2 className="articleDate">{valueW.UploadeDate}</h2>
                                      </div>
                                  </a>
                              </Col>

                      </>
                    );
                })}
                </Row>
            </Col>

            <div className="separatorLine"></div>
        </>
    );
}