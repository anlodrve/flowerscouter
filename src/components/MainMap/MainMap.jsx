import React, { useMemo, useRef, useCallback, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//google maps import
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindow } from "@react-google-maps/api"

//import css
import "./MainMap.css"

const MainMap = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_API_KEY,
      })

    //checking if map is there
    if(!isLoaded) 
        {return <div>Loading...</div>};

  //return the component Map created below 
  return (
    <div className="mainMapOuterContainer">
        <div className="mainMapInnerContainer">
          <Map />
        </div>
    </div>
  )
}

//Map is called in the return of MainMap 
function Map() {

    const spots = useSelector((store) => store.spots)
    const mapRef = useRef(); 

    //eventually want this center to be determined by current user geolocation 
    //useMemo performs the calculation once everytime the array arg changes, reuse the same value every time it re-renders
    const center = useMemo(() => ({lat: 44.94, lng: -93.25}), [] ) ;

  //customization 
    const options = useMemo(
        () => ({
        // disableDefaultUI: true,
        // clickableIcons: false,
        }), []
    ); 

    const onLoad = useCallback(map => (mapRef.current = map), []);

    const dispatch=useDispatch(); 
    const [infoWindowOpen, setInfoWindowOpen] = useState(false);

    const selectedMarker = useSelector((store) => store.infoWindowReducer)

    const handleClick = (event) => {
        // setMarkerWithInfoWindow(event.target.value)
        dispatch ({
            type: 'SET_MARKER_INFOWINDOW', 
            payload: event.target.value
        })
        setInfoWindowOpen(true);
    }

    useEffect(() => {
        dispatch({ type: 'GET_SPOTS' });
    }, []);

    return (
        <GoogleMap
            zoom={15} 
            center={center} 
            mapContainerClassName="map-container"
            options={options}
            onLoad={onLoad}
        >
            {spots.map((spotObject) => {
                return (
                    <>
                        {console.log(spotObject.location)}
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
            })}

            {/* {selectedMarker 
                ? 
                    (
                        key={selectedMarker.id}
                        position={{lat: selectedMarker?.location?.x, lng: selectedMarker?.location?.y}}
                        >
                           
                    </InfoWindow>) 
                : null} */}
        </GoogleMap>
    )
}

export default MainMap; 