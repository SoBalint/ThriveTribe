"use client"
import React from 'react';
import DietTabs from "@/components/Diet/DietTabs";
import {useCookies} from "next-client-cookies";

function handleLogout():void {
alert()
    const cookies = useCookies();

    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams);
    const logout = urlParams.get('logout');
    if(queryString == "?logout"){
        console.log(cookies.get('user'));
 //       if(cookies.get('user') != undefined){
            location.href = "/login";
            cookies.remove('user');
            console.log("LOGOUT VANNNNNNNN");
//        }

    }else{
        //console.log("LOGOUT NINNCSCSCS");
    }
}

export default handleLogout;