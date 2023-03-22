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
                    <>
                    {console.log(spot)}
                        <div key={spot.id}>
                            <h3>{spot.name}</h3>
                            <p>Description: {spot.description}</p>
                        </div>
                    </>
                )
            })}
 
        </div>
    )

}

export default ListOfSpots;