import NewsCard from '@/components/news/NewsCard'
import { INews } from '@/interfaces/news'
import { Row } from 'react-bootstrap'
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
              <i className='bx bx-user'></i>
          </button>

      </nav>
      <img className="mainP"
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVOObEkdf2ClOza_WLMSt9DF1KKthpdQE5g&usqp=CAU"></img>
      <img className="mainImagine" src="/client/src/pictures/duck-dance.gif"></img>

      <hr></hr>

      <h2 className="Articles" id="Articles">Cikkek</h2>

      </body>
    </html>
  )
}