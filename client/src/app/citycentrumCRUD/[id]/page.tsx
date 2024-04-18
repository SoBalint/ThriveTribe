
import axios from "axios";
import {use} from "react";
import UpdateCityCentrum from "@/components/citycentrumCRUD/updateCityCentrum";


async function getOne(id: number) {
    return await axios.get(`http://localhost/thrivetribe-server/public/api/citycentrums/getCT/${id}`)
}

export default function UpdateCityCentrumPage({ params } : { params: { id: number }}) {
    const album = use(getOne(params.id)).data
    return (
        <UpdateCityCentrum
            id={params.id}
            postcode={album.PostCode}
            name={album.Name}
            lat={album.latitude}
            long={album.longitude}
            />
    )
}