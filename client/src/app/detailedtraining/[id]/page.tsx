import React from 'react';
import DetailedTrainingComponent from "@/components/TrainingDetailed/TrainingDetailedComponent";

function Page({ params }: { params: { id: number }}) {
    const id = params.id;
    return (
        <>
            <React.Fragment>
                <DetailedTrainingComponent id={id}/>
            </React.Fragment>
        </>
    );
}

export default Page;
