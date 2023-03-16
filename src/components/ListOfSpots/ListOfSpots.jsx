import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';


function ListOfSpots() {

    const dispatch = useDispatch();
    const spotsFromStore = useSelector(store => store.spots)

    //load all spots from the list on page load
    useEffect(() => {
        dispatch({ type: 'GET_SPOTS' });
    }, []);

    return (
        <div className='listOfSpots'>
            {spotsFromStore.map(spot => {
                return (
                    <div key={spot.id}>
                        <h4>{spot.description}</h4>
                    </div>
                )
            })}

        </div>
    )

}

export default ListOfSpots;