import React, { useMemo, useRef, useCallback, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//google maps import
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"

import { Box } from "@mui/material";

//import css
import "./MainMap.css"

//import Marker custom component
import Marker from "../Marker/Marker";

const MainMap = () => {
      //load google map
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_API_KEY,
    })

    //checking if map is there
    if (!isLoaded) { return <div>Loading...</div> };

    //return the component Map created below 
    return (
        // styling for map container
        <Box
            sx={{
                width: 390,
                mr: 'auto',
                ml: '20px',
                my: '20px'
            }}
        >
            <Map />
        </Box>

    )
}

//Map is called in the return of MainMap 
function Map() {

    const spots = useSelector((store) => store.spots)
    const mapRef = useRef();
    const onLoad = useCallback(map => (mapRef.current = map), []);
    const dispatch = useDispatch();

    //set starting center location 
    const [centerLat, setCenterLat] = useState(0)
    const [centerLng, setCenterLng] = useState(0)

    //set center
    const center = { lat: centerLat, lng: centerLng }

    useEffect(() => {
        //get user current location and set center as geolocation
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCenterLat(position.coords.latitude)
                setCenterLng(position.coords.longitude)
            })
        dispatch({ type: 'GET_SPOTS' });
    }, []);


    //customization 
    const options = useMemo(
        () => ({
            disableDefaultUI: true,
            // clickableIcons: false,
        }), []
    );

    const containerStyle = {
        width: '350px',
        height: '350px',
        leftMargin: '20px',
        rightMargin: '20px'
    }

    return (
        <GoogleMap
            zoom={15}
            center={center}
            mapContainerStyle={containerStyle}
            options={options}
            onLoad={onLoad}
        >
            {spots.map((spotObject, i) => {
                return (
                    //possible conditional render to show Markers based on category id?
                    <Marker key={i} spotObject={spotObject} />
                )
            })}
        </GoogleMap>
    )
}

export default MainMap; 