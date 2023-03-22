import { useState } from "react";

//google maps imports
import { MarkerF, InfoWindowF } from "@react-google-maps/api"

function Marker(spotObject) {
    console.log('spotObject', spotObject.spotObject)

    //boolean to show or hide infoWindow
    const [infoWindowOpen, setInfoWindowOpen] = useState(false);

    return(
        <>
            <MarkerF 
                id={spotObject.spotObject.id}
                position={({lat: spotObject.spotObject.location.x, lng: spotObject.spotObject.location.y})}
                onClick={() => setInfoWindowOpen(true)}
                >
                    {infoWindowOpen && (
                        <InfoWindowF 
                            onCloseClick={() => setInfoWindowOpen(false)}
                            position={({lat: spotObject.spotObject?.location?.x, lng: spotObject.spotObject?.location?.y})}
                        >
                            
                                <h3>Flower!</h3>
                              
                        </InfoWindowF>
                     )}
            </MarkerF>
        </>
    )
}

export default Marker; 