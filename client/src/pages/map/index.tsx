import { MapContainer, TileLayer } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import '@/app/globals.css'
import RootLayoutComponent from "@/components/RootLayout";
import {Icon} from "leaflet";


const costumeIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/7976/7976479.png",
    iconSize: [38,38]
})
export default function Index() {
    return(
        <RootLayoutComponent>
            <div className="kozepreMap">
        <MapContainer center={[47.4979, 19.0402]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[47.4979, 19.0402]} icon={costumeIcon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
            </div>
        </RootLayoutComponent>
    )
}