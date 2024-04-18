import UpdateTraining from "@/components/trainingCRUD/updateTraining";
import axios from "axios";
import {use} from "react";

async function getOne(id: number) {
    return await axios.get(`http://localhost/thrivetribe-server/public/api/trainings/getTraining/${id}`)
}

export default function UpdateTrainingPage({ params } : { params: { id: number }}) {
    const album = use(getOne(params.id)).data
    return (
        <UpdateTraining
            id={params.id}
            name={album.Name}
            text={album.Text}
            like={album.Like}
            dislike={album.DisLike}
            type={album.Type}
            author={album.Author}
        />
    )
}