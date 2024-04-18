import UpdateMap from "@/components/mapCRUD/updateMap";
import axios from "axios";
import {use} from "react";

async function getOne(id: number) {
    return await axios.get(`http://localhost/thrivetribe-server/public/api/maps/getMap/${id}`)
}

export default function UpdateMapPage({ params } : { params: { id: number }}) {
    const album = use(getOne(params.id)).data
    return (
        <UpdateMap
            id={params.id}
            address={album.Address}
            gymname={album.GymName}
            openhour={album.OpenHour}
            cordinationId={album.CordinationId}
        />
    )

}