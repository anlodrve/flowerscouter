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

    // const onLoad = useCallback(map => (mapRef.current = map), []);

    useEffect(() => {
        //get individual spot based on ID from url params
        dispatch({ type: "SELECT_SPOT", payload: id});
        //get all the categories 
        dispatch({ type: "GET_CATEGORIES" });
    }, [])

    // const { isLoaded } = useJsApiLoader({
    //     googleMapsApiKey: process.env.REACT_APP_API_KEY,
    // })  

    //even though it's one spot, it comes back as an array
    const selectedSpot = useSelector((store) => store.spots); 
    // console.log(selectedSpot[0].location)

    const [spotToUpdate, setSpotToUpdate] = useState(selectedSpot[0]);
    // console.log('spotToUpdate description', spotToUpdate.description);
    
    const handleChange = (event, key) => {
        //key is a string value from the input
        setSpotToUpdate({...spotToUpdate, [key]: event.target.value})
        console.log(spotToUpdate);
    }

    // const handleClick = (event) => {
    //     const location = {
    //         lat: event.latLng.lat(),
    //         lng: event.latLng.lng()
    //         }
    //     setSpotToUpdate({...spotToUpdate, location:{location}})
    // }

    const handleSubmit = () => {
        dispatch({
            type: 'UPDATE_SPOT',
            payload: spotToUpdate
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
            {/* <div className="mapContainer">
                <GoogleMap
                        zoom={15} 
                        center={center} 
                        mapContainerClassName="map-container"
                        onLoad={onLoad}
                        onClick={(event) => handleClick(event)}
                        >
                            {console.log(selectedSpot)}
                        {selectedSpot.map(spotObject => {
                            <MarkerF key={spotObject.id} position={{lat: spotObject.location.x, lng: spotObject.location.y}}></MarkerF> 
                        })}
                    </GoogleMap>
            </div> */}
            <textarea
                label='Description' 
                type="textarea" 
                value={spotToUpdate.description}
                onChange={(event) => handleChange(event, 'description')}>
                </textarea>
            <button type="submit">Save Changes</button>
            </form>
        </div>

    )

}

export default EditSpot