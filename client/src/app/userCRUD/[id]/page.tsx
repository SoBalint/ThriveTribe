import UpdateUser from "@/components/userCRUD/updateUser";
import axios from "axios";
import { use } from "react"

async function getOne(id: number) {
    return await axios.get(`http://localhost/thrivetribe-server/public/api/users/getUser/${id}`)
}

export default function UpdateUserPage({ params } : { params: { id: number }}) {
    const album = use(getOne(params.id)).data
    return(
        <UpdateUser
            id={params.id}
            username={album.UserName}
            email={album.Email}
            firstname={album.FirstName}
            lastname={album.LastName}
            height={album.Height}
            weight={album.Weight}
            age={album.Age}
            phone={album.Phone}
            szam={album.roles}
            coachE={album.CoachExperienceId}
        />
    )
}