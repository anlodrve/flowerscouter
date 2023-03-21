import React, { useMemo, useRef, useCallback, useEffect, useState  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api"


function EditSpot(){
    //gives us the id from the url 
    const { id } = useParams(); 

    const dispatch = useDispatch(); 
    const history = useHistory(); 
    const mapRef = useRef(); 

    const onLoad = useCallback(map => (mapRef.current = map), []);

    useEffect(() => {
        //get individual spot based on ID from url params
        dispatch({ type: "SELECT_SPOT", payload: id});
        //get all the categories 
        dispatch({ type: "GET_CATEGORIES" });
        
    }, [])

    const selectedSpot = useSelector((store) => store.edit);
    console.log('selectedSpot', selectedSpot)

   //set starting center location 
   let center = useMemo(() => ({lat: selectedSpot.location?.x, lng: selectedSpot.location?.y}), [] ) ;

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_API_KEY,
    })  

    console.log('selectedSpot:', selectedSpot)

    const handleChange = (event, key) => {
        //key is a string value from the input
        dispatch({
            type: 'EDIT_ONCHANGE', 
            payload: {property: key, value: event.target.value}
        })
    }

    const handleClick = (event, key) => {
        const clickLocation = {
            x: event.latLng.lat(),
            y: event.latLng.lng()
            }

        
       dispatch({
        type: 'EDIT_LOCATION',
        payload: {location: clickLocation}
    })}

    const handleSubmit = () => {
        console.log(selectedSpot);
        dispatch({
            type: 'UPDATE_SPOT',
            payload: selectedSpot
        })

        history.push('/user');
    }

    if(!isLoaded) 
        {return <div>Loading...</div>};

    return(
        <div>
            <h2>Edit Post</h2>
            <form id="editSpotForm" onSubmit={handleSubmit}>
            <div className="mapContainer">
                <GoogleMap
                        zoom={15} 
                        center={center} 
                        mapContainerClassName="map-container"
                        onLoad={onLoad}
                        onClick={(event) => handleClick(event, 'location')}
                        >
                        <MarkerF key={selectedSpot.id} position={{lat: selectedSpot.location.x, lng: selectedSpot.location.y}}/>
                    </GoogleMap>
            </div>
            <textarea
                label='Description' 
                type="textarea" 
                value={selectedSpot.description}
                onChange={(event) => handleChange(event, 'description')}>
                </textarea>
            <button type="submit">Save Changes</button>
            </form>
        </div>

    )

}

export default EditSpot