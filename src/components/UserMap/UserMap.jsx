import React, { useMemo, useRef, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//google maps import
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"

//import Marker component
import Marker from "../Marker/Marker";

//import mui
import { Box } from "@mui/material";


const UserMap = () => {
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

//Map is called in the return of UserMap 
function Map() {
    const user = useSelector((store) => store.user);
    const spots = useSelector((store) => store.spots)
    const mapRef = useRef(); 
    const onLoad = useCallback(map => (mapRef.current = map), []);
    const dispatch=useDispatch(); 

    //useMemo performs the calculation once everytime the array arg changes, reuse the same value every time it re-renders
    const center = useMemo(() => ({lat: spots[0].location.x, lng: spots[0].location.y}), [] ) ;

  //customization 
    const options = useMemo(
        () => ({
        disableDefaultUI: true,
        gestureHandling: 'greedy',
        clickableIcons: false,
        }), []
    ); 

    const containerStyle = { 
      width: '350px',
      height: '350px', 
      leftMargin: '20px',
      rightMargin: '20px'
  }

    useEffect(() => {
        dispatch({ type: "GET_SPOTS_BY_ID", payload: user.id });
      }, [])

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
                    <>
                    {console.log(spotObject.location)}
                    <Marker key={i} spotObject={spotObject}/>
                    </>
                )
            })}
        </GoogleMap>
    )
}

export default UserMap; 