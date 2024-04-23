"use client"
import {useCookies} from "next-client-cookies";

function handleLogout():void {
alert()
    const cookies = useCookies();

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const logout = urlParams.get('logout');
    if(queryString == "?logout"){
            location.href = "/login";
            cookies.remove('user');
    }else{
    }
}

export default handleLogout;