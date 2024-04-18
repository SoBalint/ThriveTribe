
import React from 'react';
import LoginForm from "@/components/Login/LoginForm";
import {useCookies} from "next-client-cookies";


function Page() {


    return (
        <React.Fragment>
            <LoginForm/>
        </React.Fragment>
    );
}

export default Page;
