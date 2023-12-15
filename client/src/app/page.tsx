'use client'
import NewsCard from '@/components/news/NewsCard'
import { INews } from '@/interfaces/news'
import { Row } from 'react-bootstrap'
import Link from "next/link";
import Login from "../pages/login/login"
import { Card, Form, Container, Image, Button } from "react-bootstrap";

export default function Home() {
  return (
    <html lang="hu">
    <head>
        <link rel="stylesheet" href="globals.css"></link>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
        <title>Thrive Tribe</title>
    </head>
    <body>

    <nav>
        <div className="logo">
            <img src="/client/src/pictures/logo.jpg"/>
            <a>THRIVE TRIBE</a>
        </div>

          <ul>
              <ul className="Menulinks">
                  <li className="link"><a href="#">Étrend</a></li>
                  <li className="link"><a href="#">Edzés</a></li>
                  <li className="link"><a href="#">Edző</a></li>
                  <li className="link"><a href="#">Térkép</a></li>
                  <li className="link"><a href="#">Üzenőfal</a></li>
              </ul>
          </ul>

          <button id="userIcon">
              <Link href="/login/login">
                      <i className='bx bx-user'></i>
              </Link>
          </button>

      </nav>
      <img className="mainP"
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVOObEkdf2ClOza_WLMSt9DF1KKthpdQE5g&usqp=CAU"></img>
      <img className="mainImagine" src="/client/src/pictures/duck-dance.gif"></img>

      <hr></hr>



    <div className="articles" id="articles">
        <h5>Cikkek</h5>
        <h3>First Articles</h3>
        <div className="articlesMain" id="articlesMain">
            <div className="mainArt" id="mainArt">
                <div className="iconArticle" id="iconArticle"><i className='bx bx-dumbbell'></i></div>
                <h4>Workouts</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta,
                </p>
            </div>
            <div className="mainArt" id="mainArt">
                <div className="iconArticle" id="iconArticle"><i className='bx bx-bowl-hot'></i></div>
                <h4>About Eating</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta,
                    lectus dictum fermentum rhoncus, lacus nulla egestas neque,
                </p>
                tehén
            </div>
            <div className="mainArt" id="mainArt">
                <div className="iconArticle" id="iconArticle"><i className='bx bx-info-square'></i></div>
                <h4>Important Thing</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta,
                    lectus dictum fermentum rhoncus, lacus nulla egestas neque,
                </p>
            </div>
            <div className="mainArt" id="mainArt">
                <div className="iconArticle" id="iconArticle"><i className='bx bx-bell'></i></div>
            <h4>Santa Claus is HERE</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta,
                    lectus dictum fermentum rhoncus, lacus nulla egestas neque,
                </p>
            </div>
        </div>
    </div>
    </body>
    </html>
  )
}