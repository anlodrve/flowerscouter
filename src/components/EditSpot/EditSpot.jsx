import React, { useMemo, useRef, useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api"

import { TextField, Button, Box } from "@mui/material";


function EditSpot() {
    //gives us the id from the url 
    const { id } = useParams();

    const dispatch = useDispatch();
    const history = useHistory();
    const mapRef = useRef();

    const onLoad = useCallback(map => (mapRef.current = map), []);

    useEffect(() => {
        //get individual spot based on ID from url params
        dispatch({ type: "SELECT_SPOT", payload: id });
        //get all the categories 
        dispatch({ type: "GET_CATEGORIES" });

    }, [])

    const selectedSpot = useSelector((store) => store.edit);
    console.log('selectedSpot', selectedSpot)

    //set starting center location 
    let center = useMemo(() => ({ lat: selectedSpot?.location?.x, lng: selectedSpot?.location?.y }), [selectedSpot.id]);

    //    console.log('selectedSpot x', selectedSpot.location.x)

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_API_KEY,
    })

    if (!isLoaded) { return <div>Loading...</div> };


    console.log('selectedSpot:', selectedSpot)

    const handleChange = (event, key) => {
        //key is a string value from the input
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: key, value: event.target.value }
        })
    }

    const handleClick = (event) => {
        const clickLocation = {
            x: event.latLng.lat(),
            y: event.latLng.lng()
        }

        dispatch({
            type: 'EDIT_LOCATION',
            payload: { location: clickLocation }
        })
    }

    const handleSubmit = () => {
        console.log(selectedSpot);
        dispatch({
            type: 'UPDATE_SPOT',
            payload: selectedSpot
        })

        history.push('/user');
    }

    // if(!selectedSpot.location){
    //     return <div>Loading...</div>
    // }


    const containerStyle = {
        width: '350px',
        height: '350px',
        leftMargin: '20px',
        rightMargin: '20px'
    }

    return (
        <div>
            <h2>Edit Post</h2>
            <form id="editSpotForm" onSubmit={handleSubmit}>
                <Box    sx={{
                width: 390,
                mr: 'auto',
                ml: '20px',
                my: '20px'
            }}>
                    <GoogleMap
                        zoom={17}
                        center={center}
                        mapContainerStyle={containerStyle}
                        onLoad={onLoad}
                        onClick={(event) => handleClick(event, 'location')}
                    >

                        <MarkerF key={selectedSpot.id} position={{ lat: selectedSpot?.location?.x, lng: selectedSpot?.location?.y }} />


                    </GoogleMap>
                </Box>
                <TextField
                    label='Description'
                    variant='outlined'
                    value={selectedSpot.description}
                    onChange={(event) => handleChange(event, 'description')}
                    sx={{
                        ml: '20px',
                        width: '350px',
                    }}>
                </TextField>
                <Button
                            type="submit"
                            variant='contained'
                            sx={{ mx: '40%' }}
                        >
                            Save Changes
                        </Button>
            </form>
        </div>

    )

}

export default EditSpot