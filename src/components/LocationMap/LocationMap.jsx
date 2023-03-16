import React, { useMemo, useRef, useCallback, useState, useEffect } from "react";

//imports from google maps
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api"

//import css
import "./LocationMap.css"

function FirstMap(){
    const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: process.env.REACT_APP_API_KEY,
    })
  
    //checking if map is there
    if(!isLoaded) 
      {return <div>Loading...</div>};
  
      //return the component Map created below 
      return (
        <div className="containerForAll">
            <div className="inputs"></div>
            <div className="map">
              <Map />
            </div>
        </div>
    
      )
  }
  
function Map() {
    const mapRef = useRef(); 
  
    //useMemo performs the calculation once everytime the array arg changes, reuse the same value every time it re-renders
    const center = useMemo(() => ({lat: 44.94, lng: -93.25}), [] ) ;
  
    const [newMarker, setNewMarker] = useState({
      lat: 0, 
      lng: 0
    });
  
    //customization 
    const options = useMemo(
      () => ({
        disableDefaultUI: true,
        // clickableIcons: false,
      }), 
      []
    ); 
  
    const handleClick = (event) => {
      // console.log(event.latLng.lat())
      // console.log(event.latLng.lng())
  
      const location = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }
  
      console.log(location);
      // setNewMarker(event.target.value)
      // <MarkerF  />
    }
  
    // google.maps.event.addListener(map, 'click', function(event) {
    //   // Get the latitude and longitude of the clicked location
    //   const lat = event.latLng.lat();
    //   const lng = event.latLng.lng();
    //   // Do something with the latitude and longitude values
    //   console.log(lat, lng);
    // });
    
  
    const onLoad = useCallback(map => (mapRef.current = map), []);
  
    //functional component GoogleMap from above - takes three props
    //zoom, center, and how big of a map 
      return (
      <GoogleMap 
          zoom={15} 
          center={center} 
          mapContainerClassName="map-container"
          options={options}
          onLoad={onLoad}
          onClick={(event) => handleClick(event)}
          // value={{lat, lng}}
          >
          <MarkerF position={{lat: 44.94, lng: -93.25}}/>
          </GoogleMap>
      )
  
  }

export default LocationMap; 