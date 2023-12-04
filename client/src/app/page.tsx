import NewsCard from '@/components/news/NewsCard'
import { INews } from '@/interfaces/news'
import { Row } from 'react-bootstrap'
import { Card, Form, Container, Image, Button } from "react-bootstrap";

export default function Home() {
  return (
    <html lang="hu">
      <head>
      <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet"/>
      </head>
      <body>
        <nav>
          
          <h1>THRIVE TRIBE</h1>

          <div className="nav-icon">
              <a href="#">
                <i className='bx bx-user'></i>
              </a>
          </div>

          <ul className="nav-links">
            <li className="link"><a href="#">Étrend</a></li>
            <li className="link"><a href="#">Edzés</a></li>
            <li className="link"><a href="#">Edző</a></li>
            <li className="link"><a href="#">Térkép</a></li>
            <li className="link"><a href="#">Üzenőfal</a></li>
          </ul>

        </nav>
        <img className="mainP" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVOObEkdf2ClOza_WLMSt9DF1KKthpdQE5g&usqp=CAU"></img>
        <hr></hr>

        
        <h2>Cikkek</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu consequat velit. Morbi viverra efficitur lectus ac vestibulum. Pellentesque volutpat egestas ligula, id tempus augue ultricies vitae. Aliquam ac magna sit amet velit luctus fermentum. Duis aliquam ullamcorper eros, quis porttitor ante scelerisque eget. Nunc vitae purus eu ex tempor imperdiet. Maecenas id nulla odio. Praesent ut magna iaculis, tristique sem sed, viverra sapien. Curabitur vel laoreet massa, sed volutpat mauris. Aliquam eget elit in leo dictum vestibulum ut vel felis. Suspendisse eget turpis non nibh malesuada fermentum elementum at libero. Proin risus dui, laoreet nec auctor nec, rutrum et odio. Vivamus ut ligula condimentum, sagittis lacus eget, vestibulum felis. Aenean pulvinar congue justo, quis ultricies velit suscipit sed.</p>
      </body>
    </html>
  )
}