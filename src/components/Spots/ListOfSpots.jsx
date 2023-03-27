import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


//import SpotItem
import SpotItem from './SpotItem';

import { Button, Typography } from '@mui/material';

function ListOfSpots() {

    const dispatch = useDispatch();
    const history = useHistory();
    const spotsFromStore = useSelector(store => store.spots)
    console.log('spots', spotsFromStore)


    //load all spots from the list on page load
    useEffect(() => {
        dispatch({ type: 'GET_SPOTS' });
    }, []);

    const handleMap = () => {
        history.push("/home");
    }

    return (
        <>
            {/* If spotsFromStore isn't loaded yet, show this */}
            {!spotsFromStore && (
                <h3>Loading Spots...</h3>
            )}
            {/* If spotsFromStore has loaded, show this */}
            {spotsFromStore && (
                <div className='listOfSpots'>
                    <Typography
                        variant='h5'
                        sx={{
                            textAlign: 'center'
                        }}
                    >
                        List of All Spots
                    </Typography>
                    <Button
                        variant='outlined'
                        id="toMap"
                        onClick={handleMap}
                        sx={{
                            ml: '130px',
                            mt: '20px',
                            mb: '20px',
                            px: '20px'
                        }}
                    >
                        Map View
                    </Button>
                    {spotsFromStore.map(spot => {
                        return (
                            <>
                                {console.log(spot)}
                                {/* passing props to spotItem */}
                                <SpotItem spot={spot} />
                            </>
                        )
                    })}

                </div>
            )}
        </>
    )

}

export default ListOfSpots;