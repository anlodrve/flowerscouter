import React, { useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';

import LocationMap from '../LocationMap/LocationMap';

import "./AddSpot.css"

function AddSpot () {

    const dispatch = useDispatch();
    // const history = useHistory(); 
    // const categoriesFromRedux = useSelector((store) => store.categories)
    const locationFromStore = useSelector((store)=> store.location)

    // useEffect(() => {
    //     dispatch({ type: "FETCH_CATEGORIES" });
    // }, [])


    const [newSpot, setNewSpot] = useState({
        location: locationFromStore,
        // category eventually
        description: '',
    })

    const handleChange = (event, key) => {
        //key is a string value from the input
        setNewSpot({...newSpot, [key]: event.target.value})
    }

    const addSpot = (event) => {
        event.preventDefault();
        dispatch({ 
            type: 'POST_SPOT', 
            payload: newSpot, 
            callback: setNewSpot
        });
    }

    return(
        <div className='addSpotForm'>
            <form onSubmit={addSpot}>
                <textarea label='Description' placeholder='Describe where to view this plant - i.e. "right by the door", or "from the sidewalk facing south, next to the oak tree"' type="textarea" value={newSpot.description} onChange={(event) => handleChange(event, 'description')}></textarea>
                {/* <input></input>
                <select></select> */}
                 <LocationMap />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddSpot; 