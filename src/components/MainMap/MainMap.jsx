import React, { useMemo, useRef, useCallback, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//google maps import
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api"

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
            // onClick={(event) => handleClick(event)}
        >
            {spots.map((spotObject) => {
                return (
                    <>
                    {console.log(spotObject.location)}
                    <MarkerF key={spotObject.id} position={({lat: spotObject.location.x, lng: spotObject.location.y})}></MarkerF>
                    </>
                )
            // {spots.map(spot.category => )}
            })}
        </GoogleMap>
    )
}

export default MainMap; 