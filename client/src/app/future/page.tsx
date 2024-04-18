import {Container} from "react-bootstrap";
import './future.css'
import Link from "next/link";

function Page() {
    return (
        <Container>
            <Link href="/">
                <button className={"backButtonFuture"}>
                    <i className='bx bx-chevron-left'></i>
                </button>
            </Link>
            <div className="testFuture">
                <div className="contFuture">
                    <div>
                        <h2 className="futureTitle">Jövőbeli fejlesztések az oldalon</h2>
                    </div>
                    <div>
                        <p>A tervezett fejlesztéseink egy olyan <b>felhasználói felületet</b> céloznak meg, amely még
                            inkább <b>személyre szabottá</b> és <b>interaktívvá</b> teszi az edzéseket és az edzőkkel való kommunikációt.</p>
                        <p>&#10004; Első lépésként minden felhasználó számára lehetővé tesszük a <b>profilkép beállítását</b>, hogy a
                            közösség még személyesebb legyen. Ezáltal mindenki könnyebben azonosítható lesz, ami
                            segíthet az
                            edzőknek és a felhasználóknak abban, hogy közelebb kerüljenek egymáshoz.
                        </p>
                        <p>
                            &#10004; Az <b>üzenőfal</b> egy másik kiemelt funkció lesz, ahol a felhasználók és az edzők szabadon
                            kommunikálhatnak. Ez lehetőséget ad a felhasználóknak arra, hogy <b>kérdéseket</b> tegyenek
                            fel az
                            edzőknek, vagy épp megosszák egymással a tapasztalataikat és a motivációjukat. Az edzők
                            pedig
                            használhatják az üzenőfalat arra, hogy közvetlenül kapcsolatba lépjenek a felhasználókkal,
                            tanácsokat adjanak nekik, vagy akár témákat boncolgassanak, amelyek érdekesek lehetnek az
                            egész
                            közösség számára.

                        </p>
                        <p>
                            &#10004; A <b>kedvencek</b> funkció megkönnyíti a felhasználók számára az edzéstervek tárolását és
                            hozzáférését.
                            Amikor valaki megtalálja a kedvenc edzését, egyszerűen <b>elmentheti</b> azt a profilon
                            belül, és
                            könnyen visszatérhet hozzá később, anélkül hogy végig kellene keresnie az összes elérhető
                            edzéstervet. Ezáltal <b>időt és energiát takaríthatnak</b> meg, és könnyebben fókuszálhatnak az
                            edzésekre.
                        </p>
                        <p>
                            &#10004; Az automatizálásnak köszönhetően a <b>Diet</b> fülön belül könnyeden létre lehet hozzni új tabokat a DietTab alkalmazásban, így egyszerűbben és gyorsabban tud új diétákat és ételeket összeállítani.
                        </p>
                        <p>
                            Ezek a tervezett fejlesztések mind azt célozzák, hogy még inkább <b>összekössék és támogassák</b> egymást az edzést végzők és az edzők között, valamint segítsék a felhasználókat abban, hogy
                            hatékonyabban és élvezetesebben érjék el céljaikat az edzések során.
                        </p>

                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Page;