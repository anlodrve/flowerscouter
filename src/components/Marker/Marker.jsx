import { useState } from "react";

function Marker(spotObject) {

    const [infoWindowOpen, setInfoWindowOpen] = useState(false);


    const handleClick = (event) => {
        // setMarkerWithInfoWindow(event.target.value)
        dispatch ({
            type: 'SET_MARKER_INFOWINDOW', 
            payload: event.target.value
        })
        setInfoWindowOpen(true);
    }

    return(
        <>
            <MarkerF 
                id={spotObject.id}
                value={spotObject} 
                position={({lat: spotObject.location.x, lng: spotObject.location.y})}
                onClick={handleClick}
                >
                    {infoWindowOpen && (
                        <InfoWindow 
                            onCloseClick={() => setInfoWindowOpen(false)}
                            position={({lat: selectedMarker.location.x, lng: selectedMarker.location.y})}
                        >
                            <div>
                                <h3>Flower!</h3>
                                {/* <p></p> */}
                            </div>
                        </InfoWindow>
                     )}
            </MarkerF>
        </>
    )
}

export default Marker; 