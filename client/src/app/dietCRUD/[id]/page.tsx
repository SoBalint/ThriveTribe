
import axios from "axios";
import {use} from "react";
import UpdateDiet from "@/components/dietCRUD/updateDiet";

async function getOne(id: number) {
    return await axios.get(`http://localhost/thrivetribe-server/public/api/diets/getDiet/${id}`)
}

export default function UpdateTrainingPage({ params } : { params: { id: number }}) {
    const album = use(getOne(params.id)).data
    return (
        <UpdateDiet
            id={params.id}
            name={album.Name}
            description={album.Description}
            szam={album.foods}
        />
    )
}