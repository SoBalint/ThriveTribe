import React from 'react';

function Page() {
    return (
        <div className="testDatachange">
            <div className="containerDatachange">
                <h1>Adatmódosítás</h1>
                <form>
                    <label>Felhasználónév</label>
                    <div className="custom-inputDatachange">
                        <input type="name" name="username" autoComplete="off"/>
                    </div>
                    <label>Vezetéknév</label>
                    <div className="custom-inputDatachange">
                        <input type="name" name="firstname"/>
                    </div>
                    <label>Keresztnév</label>
                    <div className="custom-inputDatachange">
                        <input type="name" name="firstname"/>
                    </div>
                    <label>Email</label>
                    <div className="custom-inputDatachange">
                        <input type="email" name="email" autoComplete="off"/>
                    </div>
                    <div className="divider">
                        <div className="line"></div>
                    </div>
                    <label>Születési dátum</label>
                    <div className="custom-inputDatachange">
                        <input type="date" name="birthdate"/>
                    </div>
                    <label>Testsúly</label>
                    <div className="custom-inputDatachange">
                        <input type="number" name="weight"/>
                    </div>
                    <label>Magasság</label>
                    <div className="custom-inputDatachange">
                        <input type="number" name="height"/>
                    </div>
                    <button className="datachangeSave">Mentés</button>

                </form>

            </div>
        </div>
    );
}

export default Page;
