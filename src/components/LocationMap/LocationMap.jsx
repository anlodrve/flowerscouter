import React, { useMemo, useRef, useCallback, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

//imports from google maps
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api"

//import css
import "./LocationMap.css"

function LocationMap(){
    const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: process.env.REACT_APP_API_KEY,
    })
  
    //checking if map is there
    if(!isLoaded) 
      {return <div>Loading...</div>};
  
      //return the component Map created below 
      return (
            <div className="map">
              <Map />
            </div>
      )
  }
  
function Map() {
    const dispatch = useDispatch(); 
    const mapRef = useRef(); 
  
    //useMemo performs the calculation once everytime the array arg changes, reuse the same value every time it re-renders
    const center = useMemo(() => ({lat: 44.94, lng: -93.25}), [] ) ;

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
            callback: setNewLocation
        })
        
    }
    
  
    const onLoad = useCallback(map => (mapRef.current = map), []);
  
    //functional component GoogleMap from above - takes three props
    //zoom, center, and how big of a map 
      return (
      <GoogleMap 
          zoom={18} 
          center={center} 
          mapContainerClassName="map-container"
          options={options}
          onLoad={onLoad}
          onClick={(event) => handleClick(event)}
          >
            {newLocation.map((locationObject, i)=> {
                return (
                    <MarkerF key={i} position={locationObject}/>
                )
            })}
          {/* <MarkerF position={{lat: 44.94, lng: -93.25}}/> */}
          </GoogleMap>
      )
  }

export default LocationMap; 