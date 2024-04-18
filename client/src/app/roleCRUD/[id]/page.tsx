import UpdateRole from "@/components/roleCRUD/updateRole";
import {use} from "react";
import axios from "axios";


async function getOne(id: number) {
    return await axios.get(`http://localhost/thrivetribe-server/public/api/roles/getRole/${id}`)
}

export default function UpdateRolePage({ params } : { params: { id: number }}) {
    const album = use(getOne(params.id)).data
    return (
        <UpdateRole
            id={params.id}
            name={album.Name}
        />
    )
}