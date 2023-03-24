import React, { useMemo, useRef, useCallback, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

//imports from google maps
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api"

import { Box } from "@mui/material";

//import css
import "./LocationMap.css"

function LocationMap(){
  //load google map
    const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: process.env.REACT_APP_API_KEY,
    })
  
    //checking if map is there
    if(!isLoaded) 
      {return <div>Loading...</div>};
  
      //return the component Map created below 
      return (
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
  
function Map() {
    const dispatch = useDispatch(); 
    const mapRef = useRef(); 

     //set starting center location 
     const [centerLat, setCenterLat] = useState(0)
     const [centerLng, setCenterLng] = useState(0) 
  
    //useMemo performs the calculation once everytime the array arg changes, reuse the same value every time it re-renders
    const center = useMemo(() => ({lat: centerLat, lng: centerLng}), [centerLat, centerLng] ) ;

    useEffect(() => {
      //get user current location and set center as geolocation
      navigator.geolocation.getCurrentPosition(
          (position) => {
              setCenterLat(position.coords.latitude)
              setCenterLng(position.coords.longitude)
            })}, []);

    const [newLocation, setNewLocation] = useState([])
  
    //customization 
    const options = useMemo(
      () => ({
        disableDefaultUI: true,
        // clickableIcons: false,
      }), 
      []
    ); 
  
    const handleClick = (event) => {

        const location = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
            }

        setNewLocation([location])
        console.log(location);

        dispatch({
            type: 'SET_LOCATION', 
            payload: location, 
        })
    }

    const containerStyle = { 
      width: '350px',
      height: '350px', 
      leftMargin: '20px',
      rightMargin: '20px'
  }

    const onLoad = useCallback(map => (mapRef.current = map), []);
  
    //functional component GoogleMap from above - takes three props
    //zoom, center, and how big of a map 
      return (
      <GoogleMap 
          zoom={18} 
          center={center} 
          mapContainerStyle={containerStyle}
          options={options}
          onLoad={onLoad}
          onClick={(event) => handleClick(event)}
          >
            {newLocation.map((locationObject, i)=> {
                return (
                    <MarkerF key={i} position={locationObject}/>
                )
            })}
          </GoogleMap>
      )
  }

export default LocationMap; 