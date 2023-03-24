import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//import SpotItem
import SpotItem from './SpotItem';

function ListOfSpots() {

    const dispatch = useDispatch();
    const spotsFromStore = useSelector(store => store.spots)
    console.log('spots', spotsFromStore)


    //load all spots from the list on page load
    useEffect(() => {
        dispatch({ type: 'GET_SPOTS' });
    }, []);

    return (
        <div className='listOfSpots'>
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
    )

}

export default ListOfSpots;