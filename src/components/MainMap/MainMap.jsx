import { Wrapper} from "@googlemaps/react-wrapper";
import { useRef, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import "./MainMap.css"

const MainMap = () => {
    return(
        <Wrapper
            apiKey={process.env.REACT_APP_API_KEY}
            version="beta"
            libraries={["marker"]}>
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

    //ref is a mutable place you can put data that doesnt trigger re-render
    return (
        <>
            <div ref={ref} id="map" />
        </>
      )
}

export default MainMap; 