import React, { useMemo, useRef, useCallback, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//google maps import
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindow } from "@react-google-maps/api"

//import css
import "./MainMap.css"

//import Marker custom component
import Marker from "../Marker/Marker";

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
  )}

//Map is called in the return of MainMap 
function Map() {

    const spots = useSelector((store) => store.spots)
    const mapRef = useRef(); 

    //set starting center location 
    const [centerLat, setCenterLat] = useState(0)
    const [centerLng, setCenterLng] = useState(0)

    const onLoad = useCallback(map => (mapRef.current = map), []);
    const dispatch=useDispatch(); 

    const center = {lat: centerLat, lng: centerLng}

    //useMemo(() => (), [] ) ;
    // former center {lat: 44.94, lng: -93.25}

  //customization 
    const options = useMemo(
        () => ({
        disableDefaultUI: true,
        // clickableIcons: false,
        }), []
    ); 

    // const selectedMarker = useSelector((store) => store.infoWindowReducer)
    useEffect(() => {
        //get user current location
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCenterLat(position.coords.latitude)
                setCenterLng(position.coords.longitude)
            })
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
            {spots.map((spotObject, i) => {
                return (
                    <>
                        <Marker key={i} spotObject={spotObject}/>
                    </>
                )
            // {spots.map(spot.category => )}
            })}
        </GoogleMap>
    )
}

export default MainMap; 