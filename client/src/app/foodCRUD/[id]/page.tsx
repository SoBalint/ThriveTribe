import {use} from "react";
import axios from "axios";
import UpdateFood from "@/components/foodCRUD/updateFood";


async function getOne(id: number) {
    return await axios.get(`http://localhost/thrivetribe-server/public/api/foods/getFood/${id}`)
}

export default function UpdateFoodPage({ params } : { params: { id: number }}) {
    const album = use(getOne(params.id)).data
    return (
        <UpdateFood
            id={params.id}
            food={album.Name}
        />
    )
}