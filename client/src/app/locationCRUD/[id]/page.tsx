import {use} from "react";
import axios from "axios";
import UpdateLocation from "@/components/locationCRUD/updateLocation";


async function getOne(id: number) {
    return await axios.get(`http://localhost/thrivetribe-server/public/api/locations/getLocation/${id}`)
}

export default function UpdateLocationPage({ params } : { params: { id: number }}) {
    const album = use(getOne(params.id)).data
    return (
        <UpdateLocation
            id={params.id}
            latitude={album.latitude}
            longitude={album.longitude}
        />
    )
}