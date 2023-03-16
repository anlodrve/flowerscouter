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
}



  

export default MainMap; 