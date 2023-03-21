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

    // const { isLoaded } = useJsApiLoader({
    //     googleMapsApiKey: process.env.REACT_APP_API_KEY,
    // })  

    const selectedSpot = useSelector((store) => store.edit);
    // const spotObject = selectedSpot.reduce()
    // console.log('selectedSpot:', spotObject)

    // const [spotToUpdate, setSpotToUpdate] = useState(selectedSpot);
    // console.log('spotToUpdate description', spotToUpdate.description);
    
    const handleChange = (event, key) => {
        //key is a string value from the input
        dispatch({
            type: 'EDIT_ONCHANGE', 
            payload: {property: key, value: event.target.value}
        })
        // setSpotToUpdate({...spotToUpdate, [key]: event.target.value})
        // console.log(spotToUpdate);
    }

    // const handleClick = (event, key) => {
    //     const location = {
    //         lat: event.latLng.lat(),
    //         lng: event.latLng.lng()
    //         }
    //    dispatch({
    //     location:{location}
    // })

    const handleSubmit = () => {
        console.log(selectedSpot);
        dispatch({
            type: 'UPDATE_SPOT',
            payload: selectedSpot
        })

        history.push('/user');
    }

    //eventually want this center to be determined by current user geolocation 
    //useMemo performs the calculation once everytime the array arg changes, reuse the same value every time it re-renders
    // const center = useMemo(() => ({lat:spotToUpdate.location.x, lng: spotToUpdate.location.y}), [] ) ;
          
    // if(!isLoaded) 
    //     {return <div>Loading...</div>};

    return(
        <div>
            <h2>Edit Post</h2>
            <form id="editSpotForm" onSubmit={handleSubmit}>
            <div className="mapContainer">
                {/* <GoogleMap
                        zoom={15} 
                        center={center} 
                        mapContainerClassName="map-container"
                        onLoad={onLoad}
                        onClick={(event) => handleClick(event, 'location')}
                        >
                            <MarkerF key={selectedSpot.id} position={{lat: selectedSpot.location.x, lng: selectedSpot.location.y}}></MarkerF> 
                    </GoogleMap> */}
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