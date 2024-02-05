import '@/app/globals.css'
import RootLayoutComponent from "@/components/RootLayout";
import dynamic from "next/dynamic";

export default function Index() {
    const MapComponent = dynamic(
        () => import('@/components/Map'),
        { ssr: false }
    )

    return(
        <RootLayoutComponent>
            <div className="kozepreMap">
                <MapComponent />
            </div>
        </RootLayoutComponent>
    )
}