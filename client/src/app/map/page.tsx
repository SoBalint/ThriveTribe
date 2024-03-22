import React from 'react';
import dynamic from "next/dynamic";

function Page() {
    const MapComponent = dynamic(
        () => import('@/components/Map'),
        { ssr: false }
    )

    return (
        <div className="kozepreMap">
            <MapComponent/>
        </div>
    );
}

export default Page;
