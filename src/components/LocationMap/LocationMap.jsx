import { Wrapper} from "@googlemaps/react-wrapper";
import { useRef, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

//import css
import "./LocationMap.css"



const LocationMap = () => {
    return(
        <Wrapper
            apiKey={process.env.REACT_APP_API_KEY}
            version="beta"
            libraries={["marker", "geocoding", "core"]}>
                <MapComponent  />
        </Wrapper>
)};

const mapOptions = {
    mapId: 'process.env.MAP_ID',
    center: {lat: 44.9398, lng: -93.2533 },
    zoom: 15, 
    disableDefaultUI: true, 
  }

  function MapComponent () {
    const [map, setMap] = useState(); 
    const ref = useRef();
  
    useEffect(() => {
      setMap(new window.google.maps.Map(ref.current, mapOptions))
    }, []);
    
    const handleTouchMap = (event) => {
        console.log(map)
    }

    //ref is a mutable place you can put data that doesnt trigger re-render
    return (
        <>
            <div ref={ref} id="map" onTouchStart={(event) => handleTouchMap(event)}/>
        </>
      )
}

export default LocationMap; 