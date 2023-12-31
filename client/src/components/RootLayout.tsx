import React from 'react';
import {Container} from "react-bootstrap";
import Link from "next/link";

function RootLayoutComponent({children}: {
    children: React.ReactNode
}) {
    return (
        <Container>
            <nav>
                <div className="logo">
                    <img src="/pictures/Logo.jpeg" width={50}/>
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
                    <Link href="/login">
                        <i className='bx bx-user'></i>
                    </Link>
                </button>

            </nav>
            {children}
        </Container>
    );
}

export default RootLayoutComponent;