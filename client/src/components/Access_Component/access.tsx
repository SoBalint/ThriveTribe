
import React from 'react';
import DietTabs from "@/components/Diet/DietTabs";

function isValidView(viewname: string, userType: number):boolean {
    //viewname - az oldal neve, mely megnyitásra került - a név azonos kell, hogy legyen az alábbi tömbökben szereplőkkel
    //userType - átadásra került a belogolt felhasználó azonositója
    interface Nezetek {
        name: string;
    }
    const adminNezetek : Nezetek[] = [
        { name: "admin"},
        { name: "citycenrumCRUD"},
        { name: "coachCRUD"},
        { name: "dietCRUD"},
        { name: "foodCRUD"},
        { name: "locationCRUD"},
        { name: "mapCRUD"},
        { name: "roleCRUD"},
        { name: "trainingCRUD"},
        { name: "userCRUD"}
    ];
    const edzoNezetek : Nezetek[] = [
        { name: "coachcreate"},
        { name: "trainingcreate"},
        { name: "diet"},
        { name: "map"},
        { name: "datamodification"},
        { name: "passwordchange"}
    ];
    const felhasznaloNezetek : Nezetek[] = [
        { name: "coach"},
        { name: "diet"},
        { name: "map"},
        { name: "training"},
        { name: "detailedtraining"},
        { name: "datamodification"},
        { name: "passwordchange"}
    ];


    if(userType == 1){
        const talalatAdmin = adminNezetek.find(Nezetek => Nezetek.name == viewname);
        if(talalatAdmin != undefined){
            return true;
        }else{
            //nem admin jog
            return false;
        }
    }else if (userType == 5){
        const talalatEdzo = edzoNezetek.find(Nezetek => Nezetek.name == viewname);
        if(talalatEdzo != undefined){
            return true;
        }else{
            //nem edzo jog
            return false;
        }
    }else if (userType == 4){
        const talalatFelhasz = felhasznaloNezetek.find(Nezetek => Nezetek.name == viewname);
        if(talalatFelhasz != undefined){
            return true;
        }else{
            //nem felhasz jog
            return false;
        }
    }else{
        //ha egyik user kategóriában sincs, tehát nincs belépve, akkor nem lát semmit a vizsgált oldalakon
        return false;
    }

    //Admin User mit láthat
    //Felhasználó
    //edző

    //nézetek;

    }

export default isValidView;