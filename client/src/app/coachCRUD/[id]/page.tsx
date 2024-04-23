
import axios from "axios";
import {use} from "react";
import UpdateCoach from "@/components/coachCRUD/updateCoach";

async function getOne(id: number) {
    return await axios.get(`http://localhost/thrivetribe-server/public/api/coachexperiences/getCoach/${id}`)
}

export default function UpdateCoachPage({ params } : { params: { id: number }}) {
    const album = use(getOne(params.id)).data
    return (
        <UpdateCoach
            id={params.id}
            skill={album.Skill}
            school={album.School}
            experience={album.Experience}
        />
    )
}