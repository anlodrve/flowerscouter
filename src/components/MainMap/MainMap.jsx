import React, { useMemo, useRef, useCallback, useState, useEffect } from "react";

//maps import
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api"

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

function Map() {
    const mapRef = useRef(); 

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

    return (
        <GoogleMap>
            
        </GoogleMap>
    )






}



  

export default MainMap; 